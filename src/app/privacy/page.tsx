

const page = () => {
  return (
    <div className="bg-white text-gray-800 dark:hidden">
      <div className="container mx-auto px-4 lg:py-[5%] py-[15%]">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At D&R Consultancy, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you engage with our services.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal identification information (Name, Email address, Phone number)</li>
          <li>Employment history and qualifications</li>
          <li>Visa and immigration details</li>
          <li>Technical information for IT services</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">Your information is used for:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Job placement and recruitment support</li>
          <li>IT service management</li>
          <li>Bid management consulting</li>
          <li>Visa support and advisory services</li>
          <li>Internal record-keeping and service improvements</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-bold mb-2">Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold mb-2">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. Please review their privacy policies separately.
        </p>

        <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@drconsultancy.be.
        </p>

        <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          D&R Consultancy reserves the right to update this Privacy Policy at any time. Changes will be posted on this page.
        </p>
      </div>
    </div>
  );
};

export default page;
