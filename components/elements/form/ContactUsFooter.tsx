"use client";
import { useState } from "react";

interface FormErrors {
  name?: string;
  emailPhone?: string;
  subject?: string;
  message?: string;
}


const ContactUsFooter = () => {
    const [formData, setFormData] = useState({
      name: "",
      emailPhone: "",
      subject: "",
      message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
    };

    const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.emailPhone.trim()) {
      newErrors.emailPhone = "Email or Phone is required";
    } else {
      const isEmail = validateEmail(formData.emailPhone.trim());
      const isPhone = validatePhone(formData.emailPhone.trim());
      if (!isEmail && !isPhone) {
        newErrors.emailPhone = "Please enter a valid email or phone number";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        emailPhone: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
        <h2 id="contact-us-footer" className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 md:mb-8">
          Send us a signal!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-[#2D2D2D]">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full px-4 py-3 rounded-lg md:rounded-full text-center text-base md:text-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d161e] ${
                errors.name ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="emailPhone"
              value={formData.emailPhone}
              onChange={handleChange}
              placeholder="Email / Phone"
              className={`w-full px-4 py-3 rounded-lg md:rounded-full text-center text-base md:text-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d161e] ${
                errors.emailPhone ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.emailPhone && (
              <p className="text-red-400 text-sm mt-1">{errors.emailPhone}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`w-full px-4 py-3 rounded-lg md:rounded-full text-center text-base md:text-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d161e] ${
                errors.subject ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Start a Conversation"
              rows={5}
              className={`w-full px-4 py-3 rounded-lg md:rounded-3xl text-center text-base md:text-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d161e] resize-none ${
                errors.message ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-fit px-8 py-3 md:px-16 rounded-lg md:rounded-4xl bg-[#8d161e] text-white font-semibold md:font-bold md:text-xl hover:bg-[#a01a23] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 md:self-end"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
    </>
  )
}

export default ContactUsFooter