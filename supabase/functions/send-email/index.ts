const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

    // ১. আপনার কাছে মেইল আসার রিকোয়েস্ট (XGGOLE)
    const adminMail = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'XGGOLE <info@xggole.com>',
        to: ['xggole.info@gmail.com'],
        subject: `New Message from ${name}`,
        html: `<h3>New Contact Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
      }),
    })

    // ২. বাটনের স্টাইলসহ অটো-রিপ্লাই (XGGOLE)
    const customerMail = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'XGGOLE <info@xggole.com>',
        to: [email],
        subject: `Thank you for contacting XGGOLE, ${name}!`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; letter-spacing: 3px;">XGGOLE</h1>
          </div>
          <div style="padding: 30px; line-height: 1.6; color: #333;">
            <h2 style="color: #0f172a;">Hello ${name},</h2>
            <p>Thank you for reaching out to XGGOLE. We have received your message and our team will contact you within 24 hours.</p>
          </div>
          <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin-bottom: 15px; color: #666; font-size: 14px;">Follow us for more updates:</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
              <a href="https://www.youtube.com/@MIRAJ1" style="background-color: #ff6666; color: #ffffff; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 12px; font-weight: bold;">YouTube</a>
              <a href="https://www.instagram.com/mirajul_hossain.11/" style="background-color: #ff85a2; color: #ffffff; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 12px; font-weight: bold;">Instagram</a>
              <a href="https://www.facebook.com/mirajul.hossain.75/" style="background-color: #6a89cc; color: #ffffff; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 12px; font-weight: bold;">Facebook</a>
              <a href="YOUR_LINKEDIN_LINK" style="background-color: #4a90e2; color: #ffffff; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 12px; font-weight: bold;">LinkedIn</a>
            </div>
            <p style="margin-top: 25px; font-size: 11px; color: #999;">© 2026 XGGOLE | All Rights Reserved</p>
          </div>
        </div>
        `,
      }),
    })

    await Promise.all([adminMail, customerMail])

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})