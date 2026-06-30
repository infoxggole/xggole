const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            access_key: "6c2c4584-ab0b-443d-9ebc-5700db2e8a80", // আপনার আসল এক্সেস কি এখানে দিন
            name: formData.name,
            email: formData.email,
            message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("ইমেইল সফলভাবে গেছে!");
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        throw new Error("Web3Forms এরর: " + result.message);
      }

    } catch (err) {
      alert("সমস্যা: " + err.message);
    } finally {
      setLoading(false);
    }
  };