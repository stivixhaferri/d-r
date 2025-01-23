import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 dark:hidden">
      <div className="container mx-auto px-4 lg:py-8 py-[15%]">
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy - D&amp;R Consultancy
        </h1>
        <p className="mb-4">
          This Privacy Policy explains how <strong>D&amp;R Consultancy</strong>{" "}
          collects, uses, and protects your information when you use our website
          and services. We are committed to safeguarding your privacy while
          helping you find job opportunities in Belgium, providing IT services,
          bid management, and visa support.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Full name, contact details, and professional background</li>
          <li>Curriculum Vitae (CV) and relevant certifications</li>
          <li>Visa and immigration-related documents</li>
          <li>Job preferences and employment history</li>
          <li>Feedback and inquiries related to our services</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>
        <p className="mb-4">
          We collect this information to understand your needs and provide the
          best possible service, specifically for:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Matching you with suitable job opportunities in Belgium</li>
          <li>
            Processing visa applications and providing immigration support
          </li>
          <li>Offering IT consultancy and bid management services</li>
          <li>Internal record-keeping and service improvement</li>
          <li>Sending relevant updates and service notifications</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Security</h2>
        <p className="mb-4">
          D&amp;R Consultancy is committed to ensuring your information is
          secure. We use appropriate physical, electronic, and managerial
          procedures to protect your data from unauthorized access or
          disclosure.
        </p>

        <h2 className="text-2xl font-bold mb-2">Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your browsing experience. Cookies
          help us analyze traffic and customize content based on your
          preferences. You can choose to accept or decline cookies through your
          browser settings.
        </p>

        <h2 className="text-2xl font-bold mb-2">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to other websites. Once you leave our
          site, we are not responsible for the protection of your data on those
          websites. Please review their privacy policies.
        </p>

        <h2 className="text-2xl font-bold mb-2">Your Privacy Choices</h2>
        <p className="mb-4">
          You can control your personal information in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Request access to your data by emailing us at{" "}
            <strong>info@drconsultancy.com</strong>
          </li>
          <li>Opt-out of marketing communications at any time</li>
          <li>
            Request corrections to any inaccurate or incomplete information
          </li>
          <li>Withdraw consent for data processing where applicable</li>
        </ul>

        <p className="mb-4">
          D&amp;R Consultancy will not sell, distribute, or lease your
          information to third parties unless required by law or with your
          consent.
        </p>

        <h2 className="text-2xl font-bold mb-2">Policy Updates</h2>
        <p className="mb-4">
          This Privacy Policy may be updated from time to time. Please review
          this page periodically for any changes. Your continued use of our
          services indicates your agreement with these changes.
        </p>

        <p className="mb-4">
          For any questions regarding this policy, contact us at{" "}
          <strong>info@drconsultancy.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default page;
