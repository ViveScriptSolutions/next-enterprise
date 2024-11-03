import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how ViveScript Solutions uses cookies to enhance your experience on our website.",
}

const CookiePolicy = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Cookie Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> September 12, 2024
      </p>
      <p className="mb-4">
        Welcome to the cookie policy of <strong>ViveScript Solutions LLC</strong> (“we,” “us,” or “our”). This policy
        outlines how we use cookies and similar technologies on our website,{" "}
        <a href="https://www.vivescriptsolutions.com" className="text-green-500 underline">
          www.ViveScriptSolutions.com
        </a>{" "}
        (the &quot;Website&quot;). We are committed to protecting your privacy and ensuring that your personal
        information is handled in a safe and responsible manner.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website.
        Cookies allow the website to recognize your device and store some information about your preferences or past
        actions.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">2. How We Use Cookies</h2>
      <p className="mb-4">
        At <strong>ViveScript Solutions</strong>, we use cookies to:
      </p>
      <ul className="mb-4 list-inside list-disc">
        <li>Enhance your browsing experience by improving site performance and navigation.</li>
        <li>Analyze site performance and understand user behavior on the Website.</li>
        <li>Offer personalized marketing and display relevant ads based on your interests.</li>
      </ul>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">3. Types of Cookies We Use</h2>
      <p className="mb-4">We use the following types of cookies on our Website:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <strong>Essential Cookies</strong>: Necessary for the operation of the Website. These cookies allow you to
          navigate the Website and use its features.
        </li>
        <li>
          <strong>Performance Cookies</strong>: Collect information about how visitors use the Website. Data collected
          is aggregated and anonymous.
        </li>
        <li>
          <strong>Functionality Cookies</strong>: Remember your choices (e.g., username, language, or region) and
          provide enhanced features.
        </li>
        <li>
          <strong>Targeting/Advertising Cookies</strong>: Deliver relevant ads to you and measure the effectiveness of
          marketing campaigns.
        </li>
      </ul>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">4. Third-Party Cookies</h2>
      <p className="mb-4">
        We may use third-party service providers, such as Google Analytics, to help us understand how visitors use our
        Website. These third-party providers may set cookies on your device, subject to their own privacy policies.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">5. How to Manage Cookies</h2>
      <p className="mb-4">You can manage cookie settings in your browser:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          <a href="https://support.google.com/chrome/answer/95647?hl=en" className="text-green-500 underline">
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            className="text-green-500 underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
            className="text-green-500 underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            className="text-green-500 underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p className="mb-4">
        Please note that disabling cookies may affect the functionality of certain features on the Website.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">6. Changes to This Cookie Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. When we make updates, we will revise the &quot;Effective
        Date&quot; at the top of this page. We encourage you to review this page periodically to stay informed about how
        we use cookies.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at:
      </p>
      <address className="mb-4 not-italic">
        <strong>ViveScript Solutions LLC</strong>
        <br />
        {/* 30 N Gould St
        <br />
        Sheridan, Wyoming 82801
        <br /> */}
        Email:{" "}
        <a href="mailto:info@ViveScriptSolutions.com" className="text-green-500 underline">
          info@ViveScriptSolutions.com
        </a>
        <br />
        {/* Phone: +1 555 1234 567 */}
      </address>
      <p>By continuing to use our Website, you consent to our use of cookies as described in this Cookie Policy.</p>
    </div>
  )
}

export default CookiePolicy
