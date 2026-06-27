// supabase/functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Supabase-এ সেভ করা নতুন BREVO_API_KEY-টি নিয়ে আসা
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

    // ব্রেভো এপিআই কি কনফিগার করা আছে কিনা চেক
    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not configured in Supabase Settings");
    }

    // ব্রেভোর (Brevo) অফিশিয়াল API URL-এ রিকোয়েস্ট পাঠানো
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY, // ব্রেভোর নিয়মে 'api-key' হেডারে দিতে হয়
      },
      body: JSON.stringify({
        // ব্রেভোতে যে জিমেইল দিয়ে অ্যাকাউন্ট খুলেছেন, সেটি এখানে দিন
        sender: { name: "XGGOLE", email: "info.xggole@gmail.com" }, 
        to: [
          { email: to } // আপনার ফ্রন্টএন্ড থেকে আসা ইউজারের বা এডমিনের ইমেইল
        ],
        subject: subject,
        htmlContent: html, // ব্রেভোতে 'html' এর জায়গায় 'htmlContent' লিখতে হয়
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send email via Brevo");
    }

    return new Response(JSON.stringify({ success: true, data }), { 
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});