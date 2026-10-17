import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: "Terms of Service — Uddom",
  description:
    "The terms that govern your use of the Uddom Shopify app and this website.",
});

/**
 * PLACEHOLDER TERMS.
 *
 * This text is a sensible starting skeleton, not legal advice, and it has not
 * been reviewed by a lawyer. Replace the body and the "last updated" date with
 * the final, reviewed terms before this page is published.
 */
const LAST_UPDATED = "October 2026";

export default function TermsPage() {
  return (
    <div id="top">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="The terms that govern your use of the Uddom app and this website."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
        meta={<p className="proseMeta">Last updated: {LAST_UPDATED}</p>}
      />

      <section className="section">
        <div className="container">
          <div className="prose reveal" data-reveal>
            <h2>1. Acceptance of these terms</h2>
            <p>
              By installing or using Uddom (the &ldquo;Service&rdquo;), you agree to these
              Terms of Service. If you are using the Service on behalf of a store or company,
              you confirm that you have authority to accept these terms for that organisation.
            </p>

            <h2>2. The service</h2>
            <p>
              Uddom is a Shopify application that adds conversion-rate optimisation modules,
              offers and discounts, upsells, analytics, A/B testing, email marketing,
              abandoned checkout recovery and subscription selling plans to a Shopify store.
              The Service is delivered as an embedded app in your Shopify admin and, on the
              storefront, through a Shopify theme app extension.
            </p>

            <h2>3. Your store and your account</h2>
            <ul>
              <li>You are responsible for the Shopify store the Service is installed on.</li>
              <li>
                You must not use the Service to send email to people who have not consented to
                receive it.
              </li>
              <li>
                You are responsible for the content, offers, discounts and messages you
                configure and for complying with the laws that apply to your business.
              </li>
            </ul>

            <h2>4. Plans and billing</h2>
            <p>
              Paid plans are sold and billed by Shopify through Shopify&rsquo;s own billing
              system. Uddom does not process payments and does not store card details. Plan
              changes, charges, taxes and refunds are handled by Shopify under your agreement
              with them. Prices shown on this website are indicative and the amount Shopify
              charges is the amount that applies.
            </p>

            <h2>5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>reverse engineer, resell or sublicense the Service;</li>
              <li>use the Service to break any law or any Shopify policy;</li>
              <li>
                attempt to disrupt or gain unauthorised access to the Service or to other
                merchants&rsquo; data.
              </li>
            </ul>

            <h2>6. Data and privacy</h2>
            <p>
              The Service reads and stores only the store data it needs to run the features you
              enable. Our handling of personal data is described in our privacy policy, which
              forms part of these terms. When you uninstall the app, background processing for
              your store stops.
            </p>

            <h2>7. Third-party services</h2>
            <p>
              The Service relies on Shopify and on the providers you connect (for example an
              SMTP provider for email). Their own terms and availability apply to those parts
              of the Service.
            </p>

            <h2>8. Availability and changes</h2>
            <p>
              We may modify, add or remove features, and we aim to keep the Service available
              and working. We may update these terms from time to time; the date above shows
              the latest revision, and continued use after a change means you accept it.
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              The Service is provided on an &ldquo;as is&rdquo; basis. To the fullest extent
              permitted by law, we disclaim implied warranties of merchantability, fitness for
              a particular purpose and non-infringement. Uddom is a tool: it does not guarantee
              any particular increase in conversion, revenue or any other business result.
            </p>

            <h2>10. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for indirect,
              incidental or consequential damages, or for lost profits or lost data, arising
              from your use of the Service.
            </p>

            <h2>11. Termination</h2>
            <p>
              You may stop using the Service at any time by uninstalling it. We may suspend or
              end access if these terms are broken or if the Service is misused.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions about these terms can be sent to the support address on our{" "}
              <a href="mailto:support@uddomcro.com">contact page</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
