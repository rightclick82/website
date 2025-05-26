import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        At [Your Brand Name], we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or purchase our products.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Information (name, email address, phone number, shipping/billing address)</li>
        <li>Payment Details (processed securely via third-party providers)</li>
        <li>Account Credentials (if you create an account)</li>
        <li>Browsing Behavior and Preferences (cookies, analytics)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To process and fulfill your orders</li>
        <li>To provide customer support and respond to your inquiries</li>
        <li>To improve our website and product offerings</li>
        <li>To send promotional emails (only if you opt in)</li>
        <li>To detect and prevent fraud or abuse</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We only share your information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Trusted third-party service providers (e.g., payment gateways, shipping companies)</li>
        <li>Legal authorities, if required by law</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Tracking</h2>
      <p className="mb-4">
        We use cookies and similar technologies to enhance your browsing experience and gather insights into user behavior. You can manage your cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your personal information. However, no online transmission or storage system is 100% secure, so we encourage you to take precautions on your end as well.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information at any time. Contact us at <a href="mailto:support@yourbrand.com" className="text-blue-600 underline">
        rightclick1008@gmail.com</a> for any requests.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please reach out to us at <a href="mailto:privacy@yourbrand.com" className="text-blue-600 underline">
        rightclick1008@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
