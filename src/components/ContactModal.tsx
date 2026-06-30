const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ১. আপনার বর্তমান কোড: ডাটাবেসে সেভ করা
      const { error: dbError } = await supabase.from('inquiries').insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);
      if (dbError) throw new Error("Database Error: " + dbError.message);

      // ২. নতুন কোড: Web3Forms-এর মাধ্যমে ইমেইল পাঠানো
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "6c2c4584-ab0b-443d-9ebc-5700db2e8a80", // এখানে আপনার কপি করা Access Key টি বসান
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error("Email sending failed");

      // সাকসেস মেসেজ
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      onClose();
    } catch (err) {
      console.error("Error:", err);
      alert(err.message); 
    } finally {
      setLoading(false);
    }
  };