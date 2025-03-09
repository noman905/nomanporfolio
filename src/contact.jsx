import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = useState('');

  // Handle form value change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataObj = new FormData();
    formDataObj.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
        headers: {
          "Accept": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(data.message || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to submit the form. Please try again.");
    }

    // Hide result message after 3 seconds
    setTimeout(() => setResult(""), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold text-center mt-10 text-[#1de5a2] mb-12">
          Contact Me
        </h2>
        <p className="text-center text-white mb-8 text-lg">
          Feel free to reach out with any questions, collaboration ideas, or
          inquiries. I'm here to help and excited to hear from you!
        </p>

        <div className="bg-black shadow-xl rounded-3xl p-8 max-w-lg mx-auto border-2 border-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1de5a2] opacity-80">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
                placeholder="Your Name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1de5a2] opacity-80">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
                placeholder="Your Email"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1de5a2] opacity-80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#1de5a2] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#17c48f] transition duration-300 ease-in-out border border-white"
              >
                Send Message
              </button>
            </div>

            {/* Result Message */}
            {result && (
              <p className="text-center text-white mt-4">{result}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
