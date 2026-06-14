import { Link } from "react-router-dom";
import { useCookieConsent } from "../context/useCookieConsent";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import {
  FaShieldAlt,
  FaBrain,
  FaCloud,
  FaLink,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
} from "../constants/site";
import { NewsletterSubscribeForm } from "./NewsletterSignup";

const columnClass = "min-w-0 w-full";
const brandColumnClass = `${columnClass} flex flex-col items-center`;
const linkColumnClass = `${columnClass} flex flex-col items-center`;
const linkColumnInnerClass =
  "text-left w-full min-w-0 sm:w-max sm:max-w-full";
const footerGridClass =
  "grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5 xl:gap-8";
const headingClass = "text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white";
const listClass = "space-y-2 text-xs sm:text-sm text-slate-200";

const Footer = () => {
  const { openCustomize } = useCookieConsent();
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-cWhite py-12 font-inter bg-slate-950">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark/40 to-slate-900"
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={footerGridClass}>
          <div className={brandColumnClass}>
            <img
              src="/images/kafupeople.webp"
              alt="Kafu People Logo"
              className="mb-4 block mx-auto max-w-[45%] sm:max-w-[200px] h-auto brightness-110"
            />
            <div className="w-full min-w-0 max-w-sm px-1">
              <NewsletterSubscribeForm variant="footer" />
            </div>
          </div>

          <div className={linkColumnClass}>
            <div className={linkColumnInnerClass}>
              <h3 className={headingClass}>Services</h3>
              <ul className={listClass}>
              <li className="flex items-center hover:text-primary-light transition-colors">
                <FaShieldAlt className="mr-2 shrink-0" />
                AI & Agentic Workflows
              </li>
              <li className="flex items-center hover:text-primary-light transition-colors">
                <FaBrain className="mr-2 shrink-0" />
                SaaS & Startup MVPs
              </li>
              <li className="flex items-center hover:text-primary-light transition-colors">
                <FaCloud className="mr-2 shrink-0" />
                Cloud-Native Dashboards
              </li>
              <li className="flex items-center hover:text-primary-light transition-colors">
                <FaLink className="mr-2 shrink-0" />
                Business & Corporate Websites
              </li>
              </ul>
            </div>
          </div>

          <div className={linkColumnClass}>
            <div className={linkColumnInnerClass}>
              <h3 className={headingClass}>Business Hours</h3>
              <ul className={listClass}>
              <li>
                <span className="font-semibold text-accent-light flex items-center gap-1">
                  <IoIosTime />
                  Monday to Friday:
                </span>{" "}
                9:00 AM – 9:00 PM (CET)
              </li>
              </ul>
            </div>
          </div>

          <div className={linkColumnClass}>
            <div className={linkColumnInnerClass}>
              <h3 className={headingClass}>Quick Links</h3>
              <ul className={listClass}>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-primary-light transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-primary-light transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              </ul>
            </div>
          </div>

          <div className={linkColumnClass}>
            <div className={linkColumnInnerClass}>
              <h3 className={headingClass}>Get in Touch</h3>
              <ul className={`${listClass} sm:space-y-3`}>
              <li>
                <span className="font-semibold text-accent-light flex items-center gap-1">
                  <FaLocationDot />
                  Address:
                </span>{" "}
                Amsterdam, NL
              </li>
              <li>
                <span className="font-semibold text-accent-light flex items-center gap-1">
                  <FaWhatsapp className="shrink-0" />
                  WhatsApp:
                </span>{" "}
                <a
                  href={WHATSAPP_URL}
                  className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <span className="font-semibold text-accent-light flex items-center gap-1">
                  <MdMarkEmailUnread />
                  Email:
                </span>{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="font-semibold text-accent-light flex items-center gap-1">
                  <FaLinkedin />
                  LinkedIn:
                </span>{" "}
                <a
                  href={LINKEDIN_URL}
                  className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kafu People
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-300">
        <p>Kafu People © {year}. All rights reserved.</p>
        <nav
          className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          aria-label="Legal and cookie preferences"
        >
          <Link
            to="/terms-of-service"
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={openCustomize}
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded bg-transparent border-0 cursor-pointer text-inherit text-sm"
          >
            Cookie Preferences
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
