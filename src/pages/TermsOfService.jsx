import React from "react";
import PageSEO from "../components/PageSEO";
import LegalDocumentHeader from "../components/legal/LegalDocumentHeader";
import LegalSection from "../components/legal/LegalSection";
import { SITE_NAME, CONTACT_EMAIL } from "../constants/site";

const TermsOfService = () => {
  return (
    <>
      <PageSEO
        title={`Terms of Service | ${SITE_NAME}`}
        description={`Terms of Service for ${SITE_NAME} IT solutions, including cloud, cybersecurity, integration, and consulting. Effective April 25, 2026.`}
        canonicalPath="/terms-of-service"
      />
      <main className="min-h-screen bg-white font-inter">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-4xl">
          <LegalDocumentHeader
            title="Terms of Service"
            subtitle={`These terms govern your use of the ${SITE_NAME} website and how we engage with you regarding our technology services.`}
          />

          <LegalSection id="acceptance" title="1. Acceptance of Terms">
            <p>
              By accessing or using the website located at kafupeople.com (the
              &quot;Site&quot;) or by requesting information, proposals, or
              services from Kafu People (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree, do not use the Site or
              submit inquiries through it.
            </p>
            <p>
              If you are using the Site on behalf of an organization, you
              represent that you have authority to bind that organization to
              these Terms.
            </p>
          </LegalSection>

          <LegalSection id="services" title="2. Description of Services">
            <p>
              Kafu People provides professional information technology services,
              which may include, without limitation: cloud computing and
              infrastructure advisory; cybersecurity assessments and program
              support; system integration; digital transformation consulting;
              software support and maintenance; and business technology
              consulting. Specific deliverables, timelines, fees, and service
              levels are defined only in a separate written agreement or
              statement of work executed by both parties.
            </p>
            <p>
              Content on the Site is for general information and marketing
              purposes. It does not constitute a binding offer or guarantee of
              results, availability, or pricing until confirmed in writing.
            </p>
          </LegalSection>

          <LegalSection id="website-use" title="3. Website Use">
            <p>You agree to use the Site only for lawful purposes. You must not:</p>
            <ul>
              <li>
                Attempt to gain unauthorized access to our systems, networks, or
                data, or interfere with the security or performance of the Site;
              </li>
              <li>
                Use automated means (including scraping, bots, or crawlers) in a
                way that overloads or harms the Site without our prior written
                consent;
              </li>
              <li>
                Misrepresent your identity or affiliation, or use the Site to
                distribute malware, spam, or unlawful content.
              </li>
            </ul>
            <p>
              We may suspend or terminate access where we reasonably believe
              these rules are violated or where required by law.
            </p>
          </LegalSection>

          <LegalSection id="intellectual-property" title="4. Intellectual Property">
            <p>
              The Site, including its design, text, graphics, logos, trademarks,
              software, and compilations of content, is owned by Kafu People or
              its licensors and is protected by applicable intellectual property
              laws. Except for temporary viewing in a browser, you may not copy,
              modify, distribute, publicly display, or create derivative works
              without our prior written permission.
            </p>
            <p>
              Nothing in these Terms grants you rights to our name, marks, or
              proprietary materials beyond the limited license to use the Site as
              offered.
            </p>
          </LegalSection>

          <LegalSection id="user-submissions" title="5. User Submissions">
            <p>
              If you submit information through contact forms, email links, or
              similar features (including name, company, phone number, and
              message content), you represent that the information is accurate
              to the best of your knowledge and that you have the right to share
              it.
            </p>
            <p>
              You grant us a non-exclusive, worldwide, royalty-free license to
              use submissions solely to respond to you, operate the Site, improve
              our services, and comply with legal obligations. Do not send us
              confidential or proprietary information unless we have agreed in
              writing to treat it as confidential.
            </p>
          </LegalSection>

          <LegalSection
            id="proposals-engagements"
            title="6. Service Proposals and Engagements"
          >
            <p>
              Any proposal, estimate, or oral discussion is preliminary unless
              and until documented in a mutually executed agreement. Client
              responsibilities (such as timely access, approvals, and accurate
              requirements) may be specified in that agreement. Fees, expenses,
              invoicing, and taxes will be as stated in the applicable contract.
            </p>
            <p>
              Unless otherwise agreed in writing, we may engage qualified
              subcontractors to perform portions of work, and we remain
              responsible for their performance under our agreement with you.
            </p>
          </LegalSection>

          <LegalSection id="third-party-services" title="7. Third-Party Services">
            <p>
              The Site may reference or link to third-party websites, tools, or
              platforms (for example, cloud providers, security vendors, or
              scheduling widgets). We do not control third-party services and are
              not responsible for their content, availability, or practices. Your
              use of third-party services may be subject to separate terms and
              privacy policies.
            </p>
          </LegalSection>

          <LegalSection id="disclaimer" title="8. Disclaimer">
            <p>
              THE SITE AND ANY INFORMATION PROVIDED THROUGH IT ARE PROVIDED
              &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES
              OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT
              PERMITTED BY LAW.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, error-free,
              or free of harmful components. You use the Site at your own risk.
            </p>
          </LegalSection>

          <LegalSection id="limitation-of-liability" title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
              KAFU PEOPLE OR ITS DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS
              OPPORTUNITIES, ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR
              USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              TO THE EXTENT ANY LIABILITY CANNOT BE EXCLUDED, OUR AGGREGATE
              LIABILITY ARISING OUT OF OR RELATED TO THE SITE OR THESE TERMS
              (OTHER THAN AMOUNTS PAYABLE UNDER A SEPARATE SIGNED SERVICES
              AGREEMENT FOR BREACH OF THAT AGREEMENT) SHALL NOT EXCEED THE
              GREATER OF ONE HUNDRED EUROS (€100) OR THE AMOUNTS YOU PAID TO US
              SPECIFICALLY FOR SITE-RELATED ACCESS IN THE TWELVE (12) MONTHS
              PRECEDING THE CLAIM, IF ANY.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations; in those
              jurisdictions, our liability is limited to the fullest extent
              permitted by law.
            </p>
          </LegalSection>

          <LegalSection id="changes-to-terms" title="10. Changes to Terms">
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &quot;Last Updated&quot; and version information at the
              top of this page. Material changes may also be communicated through
              reasonable means where appropriate. Your continued use of the Site
              after changes become effective constitutes acceptance of the
              revised Terms.
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
              For questions about these Terms, please contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              Kafu People is an IT solutions company. Official correspondence
              should identify your organization and the subject of your inquiry.
            </p>
          </LegalSection>

          <LegalSection id="change-history" title="13. Change History">
            <ul>
              <li>
                <strong>Version 1.0</strong> — April 25, 2026: Initial
                publication of these Terms of Service.
              </li>
            </ul>
          </LegalSection>
        </article>
      </main>
    </>
  );
};

export default TermsOfService;
