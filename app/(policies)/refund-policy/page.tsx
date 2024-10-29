import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read our refund policy to understand how ViveScript Solutions handles refund requests for digital products and services.",
};

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        At <strong>ViveScript Solutions LLC</strong>, we value our customers and
        strive to ensure that all clients are satisfied with our digital
        products and services. Our refund policy reflects our commitment to
        resolving issues fairly and transparently, while recognizing the nature
        of the services we offer.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Digital Products and Services
      </h2>
      <p className="mb-4">
        As we specialize in delivering digital products such as software,
        websites, web services, and other technical solutions, refunds may be
        limited in scope. Due to the nature of digital products, all sales are
        considered final once the service has been initiated or delivered.
        However, we understand that customer satisfaction is paramount.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Refund Eligibility
      </h2>
      <p className="mb-4">
        We will provide refunds in cases where we fail to meet the agreed-upon
        service requirements or when our product or service does not meet your
        satisfaction, provided that:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          The project was completed as per the agreed terms but failed to
          deliver the expected result.
        </li>
        <li>
          The service did not match the scope of work outlined in the original
          agreement.
        </li>
        <li>
          Reasonable attempts to resolve the issue have been made but were
          unsuccessful.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Extended Service Options
      </h2>
      <p className="mb-4">
        In some cases where the initial project did not meet your requirements,
        we may offer additional services or extensive modifications to resolve
        the issue before offering a refund. This includes situations where:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Minor adjustments are required to meet your expectations.</li>
        <li>
          Additional work is necessary to fulfill requirements that were not
          initially clear.
        </li>
      </ul>

      <p className="mb-4">
        We aim to resolve the issue in a way that ensures customer satisfaction
        without requiring a refund if possible. If the situation cannot be
        rectified through these measures, a refund will be issued based on our
        review of the case.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Refund Process</h2>
      <p className="mb-4">
        Refund requests must be submitted within 30 days of the service
        delivery. Once a refund request is received, we may take up to 10
        business days to investigate and resolve the issue. This time frame
        allows us to thoroughly review the project, identify any discrepancies,
        and determine whether a refund is warranted.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Stripe Payments and Refunds
      </h2>
      <p className="mb-4">
        We process all payments securely through <strong>Stripe</strong>.
        Refunds will be issued via Stripe and will adhere to{" "}
        <a
          href="https://stripe.com/refunds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 underline"
        >
          Stripe’s refund policies
        </a>
        . Depending on Stripe’s processes, refunds may take several business
        days to be credited to your original payment method.
      </p>

      <p className="mb-4">
        Please note that the time frame for the refund may be affected by your
        bank or payment provider, and we are not responsible for any additional
        delays caused by third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Exceptions to Refunds
      </h2>
      <p className="mb-4">Refunds will not be issued in the following cases:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Services were rendered as described and fulfilled to the agreed
          specifications.
        </li>
        <li>
          Delays or issues caused by external factors beyond our control,
          including third-party tools or integrations.
        </li>
        <li>
          The request for a refund is made beyond 30 days from the service
          delivery date.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Refund Policy or would like to
        request a refund, please contact us at:
      </p>
      <address className="not-italic mb-4">
        <strong>ViveScript Solutions LLC</strong>
        <br />
        {/* 30 N Gould St
        <br />
        Sheridan, Wyoming 82801
        <br /> */}
        Email:{" "}
        <a
          href="mailto:info@ViveScriptSolutions.com"
          className="text-green-500 underline"
        >
          info@ViveScriptSolutions.com
        </a>
        <br />
        {/* Phone: +1 555 1234 567 */}
      </address>
    </div>
  );
};

export default RefundPolicy;
