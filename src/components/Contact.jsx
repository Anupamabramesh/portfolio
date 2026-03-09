import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message.',
      }
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-divine-bg-dark text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-neural-fade">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600"
            rows="5"
            required
          />
          <button type="submit" className="cosmic-btn w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}