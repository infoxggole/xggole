// supabase/functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  const { to, subject, html } = await req.json();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "FGGOLE <onboarding@resend.dev>", // ডোমেইন ভেরিফাই করলে আপনার নিজের ইমেইল দিবেন
      to: to,
      subject: subject,
      html: html,
    }),
  });

  return new Response(JSON.stringify(await res.json()), { status: 200 });
});