import { SUPABASE_CONFIG, AGENCY_EMAIL, BRAND } from '../config';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${SUPABASE_CONFIG.URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_CONFIG.ANON_KEY}`,
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        message: payload.message,
        agencyEmail: AGENCY_EMAIL,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Email service returned ${response.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error('Email send error:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to send email',
    };
  }
}

export function buildConfirmationHtml(name: string): string {
  return `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #E8F4FD; border-radius: 12px;">
      <h1 style="color: #1E3A8A; margin-bottom: 16px;">Thank you, ${name}!</h1>
      <p style="color: #0F2847; line-height: 1.6;">We've received your message and will get back to you within 24 hours.</p>
      <p style="color: #2563EB; margin-top: 24px;">— The ${BRAND.name} Team</p>
    </div>
  `;
}
