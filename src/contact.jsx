import React, { useState } from 'react';


export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to an API or email service
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold text-center mt-10 text-[#1de5a2] mb-12">Contact Me</h2>

        <p className="text-center text-white mb-8 text-lg">
          Feel free to reach out with any questions, collaboration ideas, or<br className='hidden md:inline-block'/> inquiries. I'm here to help and excited to hear from you!
        </p>

        <div className="bg-black shadow-xl rounded-3xl p-8 max-w-lg mx-auto border-2 border-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1de5a2] opacity-80">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-black text-[white] border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
                placeholder="Your Name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1de5a2] opacity-80">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-black tracking-wide text-[white] border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
                placeholder="Your Email"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1de5a2] opacity-80">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-black text-[white] border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1de5a2] focus:border-[#1de5a2]"
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
          </form>
        </div>
      </div>
    </section>
  );
};
