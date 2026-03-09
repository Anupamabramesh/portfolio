import { useState } from "react";
import toast from "react-hot-toast";

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

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
            rows="5"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}