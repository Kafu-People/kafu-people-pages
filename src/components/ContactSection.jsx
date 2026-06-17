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
} from "../constants/site";

const CONTACT_SECTION_IMAGE = "/images/contact-section.webp";

const ContactSection = () => {
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
                <MdMarkEmailUnread className="mr-2" />
                Email:
              </p>
              {CONTACT_EMAIL}
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
                <FaWhatsappSquare className="mr-2" />
                Phone:
              </p>
              {WHATSAPP_DISPLAY}
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
                <FaLinkedin className="mr-2" />
                LinkedIn:
              </p>
              Kafu People
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
        <form className="w-full max-w-md lg:max-w-none">
          <h2 className="mb-3 text-center text-2xl font-bold text-cWhite sm:text-xl lg:text-left">
            Contact Form:
          </h2>
          <p className="mb-3 text-center text-cWhite/90 sm:text-sm lg:text-left">
            For any inquiries, please fill out the form below, and we will get
            back to you as soon as possible.
          </p>
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
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Name"
              required
            />
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
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Email"
              required
            />
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
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Phone"
              required
            />
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
              className="w-full rounded border border-slate-200 bg-cWhite p-2 text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full min-h-[44px] p-3 bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold rounded hover:opacity-90"
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
