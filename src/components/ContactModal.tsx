import { supabase } from '../lib/supabaseClient'; // adjust path to wherever your supabase client is set up

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Step 1: Save to Supabase
    const { data, error: dbError } = await supabase
      .from('inquiries')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      ]);

    if (dbError) throw new Error(dbError.message);

    // Step 2: Trigger email via Edge Function
    const { data: emailData, error: emailError } = await supabase.functions.invoke('quick-worker', {
      body: {
        to: 'xggole.info@gmail.com', // where YOU want to receive inquiries
        subject: `New Inquiry: ${formData.subject}`,
        html: `<p><strong>Name:</strong> ${formData.name}</p>
               <p><strong>Email:</strong> ${formData.email}</p>
               <p><strong>Message:</strong> ${formData.message}</p>`,
      },
    });

    if (emailError) throw new Error(emailError.message);

    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();

  } catch (err) {
    alert("Error: " + err.message);
    console.error(err);
  } finally {
    setLoading(false);
  }
};