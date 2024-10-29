import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about our privacy practices and how ViveScript Solutions protects your data.",
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> September 12, 2024
      </p>

      <p className="mb-4">
        Welcome to the privacy policy of{" "}
        <strong>ViveScript Solutions LLC</strong> (“we,” “us,” or “our”). We are
        committed to protecting your privacy and ensuring that your personal
        information is handled responsibly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        In the course of providing services, we may collect the following types
        of personal information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Your name, email address, and contact details when you submit an
          inquiry or sign up for services.
        </li>
        <li>
          Payment information (such as credit card details) when making
          purchases via Stripe.
        </li>
        <li>
          Usage data, such as your IP address, browser type, and device
          information when visiting our Website.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the personal information we collect in the following ways:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          To provide our services, such as web development, app development, and
          other freelance services.
        </li>
        <li>
          To process payments securely through <strong>Stripe</strong>, our
          payment gateway solution.
        </li>
        <li>
          To communicate with you regarding your projects, queries, or support
          requests.
        </li>
        <li>
          To analyze Website traffic and improve user experience using tools
          like <strong>Firebase Analytics</strong>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Data Security</h2>
      <p className="mb-4">
        We take the security of your data seriously and implement
        industry-standard measures to protect it from unauthorized access,
        disclosure, or misuse. We use <strong>Firebase</strong> as our backend
        service, which ensures the confidentiality and security of data stored
        in its infrastructure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Disclosure of Your Information
      </h2>
      <p className="mb-4">
        We do not disclose your personal data to third parties unless it is
        necessary for the performance of our services or required by law. We may
        disclose your personal information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          To comply with legal obligations, such as a court order or legal
          process.
        </li>
        <li>
          When required to protect the rights, property, or safety of our users
          or others.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Payment Processing
      </h2>
      <p className="mb-4">
        For payment processing, we use <strong>Stripe</strong>. Stripe may
        collect and store payment information as necessary to process
        transactions. We do not store or process your payment information
        directly. For more details on Stripe’s privacy practices, please refer
        to{" "}
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 underline"
        >
          Stripe’s Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Client Testimonials and Project Showcases
      </h2>
      <p className="mb-4">
        With your consent, we may use your testimonials and display your
        completed projects in our portfolio or marketing materials. Publicly
        shared data will be limited to information you have agreed to provide,
        such as your business name, project details, and testimonial content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or request the deletion of your
        personal data. If you wish to exercise any of these rights, please
        contact us at{" "}
        <a
          href="mailto:info@ViveScriptSolutions.com"
          className="text-green-500 underline"
        >
          info@ViveScriptSolutions.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Data Retention</h2>
      <p className="mb-4">
        We retain your personal data only as long as necessary to fulfill the
        purposes outlined in this privacy policy, or as required by law. When we
        no longer need your information, we will securely delete or anonymize
        it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        9. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this policy periodically to stay informed of how we protect your
        personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or how
        we handle your data, please contact us at:
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
      <p>
        By using our Website and services, you agree to the terms of this
        Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
