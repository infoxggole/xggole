const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submit started"); // ১. চেক করুন এটি কনসোলে আসছে কি না

    try {
      // Supabase পার্ট
      const { error: dbError } = await supabase.from('inquiries').insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);
      
      if (dbError) throw new Error("Database Error: " + dbError.message);
      console.log("Supabase Success, starting Web3Forms"); // ২. চেক করুন এটি আসছে কি না

      // Web3Forms পার্ট
      const formPayload = new FormData();
      formPayload.append("access_key", "6c2c4584-ab0b-443d-9ebc-5700db2e8a80"); // আপনার কি টি এখানে বসান
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result); // ৩. চেক করুন এটি আসছে কি না

      if (!result.success) throw new Error("Email sending failed");

      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      onClose();
      
    } catch (err) {
      console.error("Error occurred:", err); // ৪. কোনো এরর হলে এখানে দেখাবে
      alert(err.message); 
    } finally {
      setLoading(false);
    }
  };