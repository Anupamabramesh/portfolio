import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Sending message...");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/anupamabramesh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.dismiss();
        toast.error("Failed to send message.");
      }

    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong.");
    }
  };

  const contactInfo = [
    { icon: <FaPhone />, text: "+91-8431918469", href: "tel:+918431918469" },
    { icon: <FaEnvelope />, text: "anupamabramesh@gmail.com", href: "mailto:anupamabramesh@gmail.com" },
    { icon: <FaGithub />, text: "github.com/Anupamabramesh", href: "https://github.com/Anupamabramesh" },
    { icon: <FaLinkedin />, text: "linkedin.com/in/anupama-br-19b31225b", href: "https://linkedin.com/in/anupama-br-19b31225b" },
    { icon: <FaMapMarkerAlt />, text: "Sri Siddhartha Institute of Technology, Tumakuru", href: null },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-xl text-purple-400">{item.icon}</span>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Resume Download Button */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <a
                href="/Resume.pdf"
                download="Anupama_BR_Resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:border-purple-500 focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:border-purple-500 focus:outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:border-purple-500 focus:outline-none"
                rows="5"
                required
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}
