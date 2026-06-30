const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("access_key", "6c2c4584-ab0b-443d-9ebc-5700db2e8a80");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result); // কনসোলে ফলাফল দেখুন

      if (result.success) {
        alert("ইমেইল সফলভাবে পাঠানো হয়েছে!");
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("System Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };