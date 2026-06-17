import React from "react";
import PageSEO from "../components/PageSEO";
import LegalDocumentHeader from "../components/legal/LegalDocumentHeader";
import LegalSection from "../components/legal/LegalSection";
import { SITE_NAME } from "../constants/site";

const CONTACT_EMAIL = "contact@kafupeople.com";

const PrivacyPolicy = () => {
  return (
    <>
      <PageSEO
        title={`Privacy Policy | ${SITE_NAME}`}
        description={`Privacy Policy for ${SITE_NAME}: how we collect, use, and protect personal data when you use our website and services. Effective April 25, 2026.`}
        canonicalPath="/privacy-policy"
      />
      <main className="min-h-screen bg-white font-inter">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-4xl">
          <LegalDocumentHeader
            title="Privacy Policy"
            subtitle={`This policy describes how ${SITE_NAME} collects, uses, and protects personal information in connection with our website and related business activities.`}
          />

          <LegalSection id="information-we-collect" title="1. Information We Collect">
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Contact and identity data:</strong> such as name, job
                title, company name, email address, phone number, and country,
                when you submit a form, email us, or communicate with us about
                services.
              </li>
              <li>
                <strong>Technical and usage data:</strong> such as IP address,
                device type, browser type, approximate location derived from IP,
                pages viewed, referring URLs, and timestamps, collected through
                cookies and similar technologies when you use the Site.
              </li>
              <li>
                <strong>Engagement data:</strong> such as meeting scheduling
                details, support tickets, or project correspondence when you work
                with us under a contract.
              </li>
              <li>
                <strong>Marketing preferences:</strong> such as newsletter
                subscriptions or event registrations, where offered.
              </li>
            </ul>
            <p>
              We aim to collect only what is reasonably necessary for the
              purposes described below.
            </p>
          </LegalSection>

          <LegalSection id="how-we-use-information" title="2. How We Use Information">
            <p>We use personal information to:</p>
            <ul>
              <li>Respond to inquiries and provide requested information;</li>
              <li>
                Deliver, administer, and improve our IT services, consulting,
                and client engagements;
              </li>
              <li>
                Operate, secure, and analyze the Site; detect fraud and misuse;
              </li>
              <li>
                Send administrative messages, service notices, and (where
                permitted) marketing communications;
              </li>
              <li>Comply with law, regulation, and professional obligations;</li>
              <li>
                Establish, exercise, or defend legal claims, and protect the
                rights, property, and safety of Kafu People, our clients, and the
                public.
              </li>
            </ul>
            <p>
              Where required by applicable law, we rely on appropriate legal
              bases such as contract performance, legitimate interests balanced
              against your rights, consent where requested, or legal obligation.
            </p>
          </LegalSection>

          <LegalSection id="cookies-analytics" title="3. Cookies and Analytics">
            <p>
              We use cookies and similar technologies to remember preferences,
              measure Site performance, and understand how visitors use our
              pages. Some cookies are essential for security and basic
              functionality; others help us improve content and user experience.
            </p>
            <p>
              Where required, we will obtain consent before using non-essential
              cookies. You can control cookies through your browser settings;
              disabling certain cookies may limit Site functionality.
            </p>
          </LegalSection>

          <LegalSection id="sharing" title="4. Sharing of Information">
            <p>
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong> who assist us with hosting,
                analytics, email delivery, customer relationship tools, or
                scheduling, under contracts that require appropriate safeguards;
              </li>
              <li>
                <strong>Professional advisers</strong> such as lawyers or
                accountants where necessary;
              </li>
              <li>
                <strong>Authorities</strong> when required by law, court order, or
                lawful request, or to protect rights and safety.
              </li>
            </ul>
            <p>
              In connection with a merger, acquisition, or asset sale, personal
              information may be transferred as part of that transaction, subject
              to applicable law and notice requirements.
            </p>
          </LegalSection>

          <LegalSection id="data-security" title="5. Data Security">
            <p>
              We implement technical and organizational measures appropriate to
              the nature of the data and our role as an IT services provider,
              including access controls, encryption where appropriate, and vendor
              diligence. No method of transmission or storage is completely
              secure; we cannot guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection id="data-retention" title="6. Data Retention">
            <p>
              We retain personal information only as long as necessary for the
              purposes collected, to meet legal, tax, or accounting requirements,
              and to resolve disputes. Retention periods vary depending on context
              (for example, marketing data until you unsubscribe, client records
              for the duration of the engagement plus a statutory period).
            </p>
          </LegalSection>

          <LegalSection id="user-rights" title="7. User Rights">
            <p>
              Depending on your location, you may have rights to access, correct,
              delete, or restrict processing of your personal information, to
              object to certain processing, to data portability, and to withdraw
              consent where processing is consent-based. You may also have the
              right to lodge a complaint with a supervisory authority.
            </p>
            <p>
              To exercise rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need
              to verify your identity before fulfilling a request.
            </p>
          </LegalSection>

          <LegalSection id="third-party-services" title="8. Third-Party Services">
            <p>
              The Site may embed or link to third-party services (for example,
              maps, chat, or calendar tools). Those providers may collect
              information under their own policies. We encourage you to review
              their privacy notices before using integrated features.
            </p>
          </LegalSection>

          <LegalSection id="children" title="9. Children’s Privacy">
            <p>
              The Site and our services are directed to businesses and adult
              professionals. We do not knowingly collect personal information
              from children under 16 (or the age required in your jurisdiction).
              If you believe we have collected such information, please contact us
              and we will take steps to delete it where appropriate.
            </p>
          </LegalSection>

          <LegalSection id="policy-updates" title="10. Policy Updates">
            <p>
              We may update this Privacy Policy to reflect changes in our
              practices, technology, or legal requirements. We will revise the
              &quot;Last Updated&quot; and version information at the top of this
              page. Where changes are material, we will provide additional notice
              as required by law.
            </p>
          </LegalSection>

          <LegalSection id="company-information" title="11. Company Information">
            <p>
              <strong>Kafu People</strong>
            </p>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="font-semibold text-cBlack">Legal Structure</dt>
                <dd className="mt-1">Sole Trader</dd>
              </div>
              <div>
                <dt className="font-semibold text-cBlack">KVK Number</dt>
                <dd className="mt-1">85842788</dd>
              </div>
              <div>
                <dt className="font-semibold text-cBlack">Registered Address</dt>
                <dd className="mt-1">
                  <address className="not-italic">
                    Brantjesoever 4, 1441DW Purmerend, Netherlands
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-cBlack">Owner</dt>
                <dd className="mt-1">Belal Haikal</dd>
              </div>
              <div>
                <dt className="font-semibold text-cBlack">Contact Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </dd>
              </div>
            </dl>
          </LegalSection>

          <LegalSection id="contact" title="12. Contact Information">
            <p>
              For privacy-related questions or requests, contact{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              Kafu People — IT solutions including cloud computing, cybersecurity,
              system integration, digital transformation, software support, and
              business technology consulting.
            </p>
          </LegalSection>

          <LegalSection id="change-history" title="13. Change History">
            <ul>
              <li>
                <strong>Version 1.0</strong> — April 25, 2026: Initial publication
                of this Privacy Policy.
              </li>
            </ul>
          </LegalSection>
        </article>
      </main>
    </>
  );
};

export default PrivacyPolicy;
