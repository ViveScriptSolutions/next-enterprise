import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read our terms and conditions to understand the rules and policies that govern the use of ViveScript Solutions' services.",
};

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>ViveScript Solutions LLC</strong>. By accessing or
        using our website (
        <a
          href="https://www.ViveScriptSolutions.com"
          className="text-green-500 underline"
        >
          www.ViveScriptSolutions.com
        </a>
        ) and our services, you agree to comply with and be bound by the
        following terms and conditions. Please read these terms carefully before
        using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. General Terms</h2>
      <p className="mb-4">
        ViveScript Solutions LLC provides custom technology solutions, including
        but not limited to web development, app development, workflow
        automation, and business data analysis. The terms of service are
        flexible and may vary depending on the specific requirements of each
        project. By engaging with our services, you acknowledge that each
        project is unique and, therefore, may require custom agreements,
        timelines, and deliverables.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using our services or accessing any part of our website, you agree to
        these Terms and Conditions. If you do not agree with any of these terms,
        you should discontinue use of our services and website immediately. We
        reserve the right to update or modify these terms at any time, and your
        continued use of our services constitutes acceptance of those changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Custom Solutions and Scope of Work
      </h2>
      <p className="mb-4">
        The services we provide are custom-built and tailored to each
        client&apos;s specific needs. Due to the nature of custom solutions, we
        may not be able to specify all project details upfront. Clients are
        expected to collaborate with our team to define requirements throughout
        the development process. We will work within agreed scopes, timelines,
        and budgets, but changes in project scope may lead to revisions in cost
        or delivery time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Client Responsibilities
      </h2>
      <p className="mb-4">
        As a client, you are responsible for providing accurate and complete
        information during the project engagement process. You agree to respond
        promptly to our requests for feedback and provide any necessary
        materials to help us complete your project in a timely manner. Delays in
        providing such information may result in extensions of the project
        timeline.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Payment Terms</h2>
      <p className="mb-4">
        Payment for services is required in accordance with the terms specified
        in your project agreement. We use <strong>Stripe</strong> as our payment
        gateway provider. By using our services, you agree to comply with
        Stripe&apos;s payment terms and policies. In the event of payment
        disputes or issues, we will work with you to resolve them following
        industry standards and Stripe’s procedures.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Intellectual Property Rights
      </h2>
      <p className="mb-4">
        Unless otherwise agreed upon, all work created by ViveScript Solutions
        LLC during the course of a project remains the intellectual property of
        ViveScript Solutions LLC until full payment is received. Upon payment,
        intellectual property rights are transferred to the client as outlined
        in the specific project agreement. We reserve the right to showcase
        completed projects and non-confidential client testimonials on our
        website and marketing materials unless explicitly prohibited by the
        client.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        7. Confidentiality and Privacy
      </h2>
      <p className="mb-4">
        We value your privacy and confidentiality. Any information or data you
        share with us in the course of using our services will be handled in
        accordance with our{" "}
        <a href="/privacy-policy" className="text-green-500 underline">
          Privacy Policy
        </a>
        . We will not disclose any confidential information unless required by
        law or agreed upon by both parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        While we strive to deliver high-quality services, ViveScript Solutions
        LLC will not be liable for any direct, indirect, incidental, or
        consequential damages arising from the use of our services. In the event
        of a breach of these terms, our liability is limited to the amount paid
        by the client for the specific project or service in question.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Termination</h2>
      <p className="mb-4">
        Either party may terminate the agreement for services at any time by
        providing written notice. Upon termination, the client will be
        responsible for paying for any work completed up to the point of
        termination. ViveScript Solutions LLC reserves the right to terminate
        services in cases of non-payment, breach of terms, or inappropriate
        conduct.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of the State of Wyoming, USA. Any disputes
        arising out of or in connection with these terms shall be subject to the
        exclusive jurisdiction of the courts of Wyoming.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        11. Contact Information
      </h2>
      <p className="mb-4">
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact us at:
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

export default TermsConditions;
