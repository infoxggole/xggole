// supabase/functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// আপনার সেট করা Brevo API Key নিয়ে আসা
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");

// CORS Headers (অন্য ডোমেইন থেকে কল করার জন্য এটি মাস্ট)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // CORS Pre-flight request হ্যান্ডেল করা
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, subject, html } = await req.json();

    // ইনপুট ভ্যালিডেশন
    if (!to || !subject || !html) {
      throw new Error("Missing required fields: to, subject, or html");
    }

    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not configured");
    }

    // Brevo API কল
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { 
          name: "FGGOLE", 
          email: "xggole.info@gmail.com" // ⚠️ এখানে আপনার Brevo-তে ভেরিফাই করা ইমেইলটি দিন
        },
        to: [{ email: to }],
        subject: subject,
        htmlContent: html,
      }),
    });

    // রেসপন্স হ্যান্ডেল
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send email via Brevo");
    }

    return new Response(JSON.stringify(data), { 
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});