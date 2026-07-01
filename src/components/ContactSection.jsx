import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import CalendlyPopup from "./ui/CalendlyPopup";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
  OFFICE_ADDRESS,
  EMAIL_REGEX,
} from "../constants/site";
import { useState } from "react";
import Swal from "sweetalert2";

const CONTACT_SECTION_IMAGE = "/images/contact-section.webp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully! We'll get back to you soon.",
        timer: 3000,
        showConfirmButton: false,
      });
    }, 1500);
  };

  return (
    <section className="bg-cWhite px-4 py-12 font-inter sm:px-8 lg:px-24 lg:py-16">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg">
        <img
          src={CONTACT_SECTION_IMAGE}
          alt=""
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-900/75 to-slate-950 lg:from-slate-900/20 lg:via-slate-900/65 lg:to-slate-950"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col lg:flex-row">
          {/* Get in Touch */}
          <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold text-cWhite sm:text-2xl">Get in Touch:</h2>
          <p className="mb-6 text-base text-cWhite/90 sm:text-sm">
            At <span className="font-semibold text-cWhite">Kafu People</span>, we help you
            ship AI, cloud, and full-stack solutions. Book a meeting or send a
            message — we typically respond within one business day.
          </p>
          <div className="mb-4 text-base">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cWhite hover:text-cWhite/80">
              <p className="flex items-center justify-center text-cWhite/90 lg:justify-start">
                <MdMarkEmailUnread className="mr-1" />
                Email: {CONTACT_EMAIL}
              </p>
            </a>
          </div>
          <div className="mb-4">
            <a
              href={WHATSAPP_URL}
              className="text-cWhite hover:text-cWhite/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center justify-center text-cWhite/90 lg:justify-start">
                <FaWhatsappSquare className="mr-1" />
                Phone: {WHATSAPP_DISPLAY}
              </p>
            </a>
          </div>
          <div className="mb-4">
            <a
              href={LINKEDIN_URL}
              className="text-cWhite hover:text-cWhite/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center justify-center text-cWhite/90 lg:justify-start">
                <FaLinkedin className="mr-1" />
                LinkedIn: Kafu People
              </p>
            </a>
          </div>
          <div className="mb-4">
            <p className="flex justify-center text-cWhite/90 lg:justify-start">
              <FaLocationDot className="mr-2" /> Address:
            </p>
            <p className="text-cWhite/80">{OFFICE_ADDRESS}</p>
          </div>
          <div className="mb-4">
            <CalendlyPopup buttonText="Book a Meeting" />
          </div>
        </div>
          </div>
          
          {/* Contact Form */}
          <div className="flex flex-1 items-center justify-center p-8 lg:p-10">
        <form className="w-full max-w-md lg:max-w-none" onSubmit={handleSubmit}>
          <h2 className="mb-3 text-center text-2xl font-bold text-cWhite sm:text-xl lg:text-left">
            Contact Form:
          </h2>
          <p className="mb-3 text-center text-cWhite/90 sm:text-sm lg:text-left">
            For any inquiries, please fill out the form below, and we will get
            back to you as soon as possible.
          </p>
          <div className="mb-4 rounded bg-yellow-100 px-4 py-2 text-center text-sm text-yellow-800">
            Demo mode — messaging coming in v2
          </div>
          <div className="mb-4 w-full">
            <label
              className="mb-2 block text-base font-medium text-cWhite"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Name"
              required
            />
            {errors.name && <span id="name-error" role="alert" className="mt-1 text-sm text-red-300">{errors.name}</span>}
          </div>
          <div className="mb-4 w-full">
            <label
              className="mb-2 block text-base font-medium text-cWhite"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Email"
              required
            />
            {errors.email && <span id="email-error" role="alert" className="mt-1 text-sm text-red-300">{errors.email}</span>}
          </div>
          <div className="mb-4 w-full">
            <label
              className="mb-2 block text-base font-medium text-cWhite"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              aria-invalid={errors.phone ? "true" : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Phone"
              required
            />
            {errors.phone && <span id="phone-error" role="alert" className="mt-1 text-sm text-red-300">{errors.phone}</span>}
          </div>
          <div className="mb-4 w-full">
            <label
              className="mb-2 block text-base font-medium text-cWhite"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Your message here..."
              rows="4"
              required
            ></textarea>
            {errors.message && <span id="message-error" role="alert" className="mt-1 text-sm text-red-300">{errors.message}</span>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[44px] p-3 bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold rounded hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
