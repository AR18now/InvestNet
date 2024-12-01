import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageSquare, FileText, PhoneCall } from 'lucide-react';

const HelpCenter = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqs = [
    {
      question: "How do I verify a business?",
      answer: "To verify a business, navigate to the Business Verification tab and follow these steps: 1) Upload required documents 2) Fill in business details 3) Submit for review. Our team typically processes verifications within 24-48 hours."
    },
    {
      question: "How do I manage user permissions?",
      answer: "User permissions can be managed from the User Management section. Select a user, click on 'Edit Permissions', and adjust their role and access levels as needed. Don't forget to save your changes."
    },
    {
      question: "What do I do about flagged content?",
      answer: "When content is flagged, review it in the Flagged Content section. You can either approve the content if it meets our guidelines or remove it if it violates our policies. Always document your decision."
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Help Center</h1>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 hover:shadow-lg transition-shadow text-center">
          <MessageSquare className="h-8 w-8 mb-2 text-blue-600" />
          <h3 className="font-medium mb-1">Chat Support</h3>
          <p className="text-sm text-gray-500">Get help from our team</p>
        </div>
        <div className="p-4 hover:shadow-lg transition-shadow text-center">
          <FileText className="h-8 w-8 mb-2 text-blue-600" />
          <h3 className="font-medium mb-1">Documentation</h3>
          <p className="text-sm text-gray-500">Browse our guides</p>
        </div>
        <div className="p-4 hover:shadow-lg transition-shadow text-center">
          <PhoneCall className="h-8 w-8 mb-2 text-blue-600" />
          <h3 className="font-medium mb-1">Phone Support</h3>
          <p className="text-sm text-gray-500">Call our support team</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden mb-3"
            onClick={() => setOpenSection(openSection === index ? null : index)}
          >
            <div className="p-4 cursor-pointer flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              {openSection === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
            {openSection === index && (
              <div className="bg-gray-50 p-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
        <p className="text-gray-600 mb-4">
          Our support team is available 24/7 to help you with any questions or issues.
        </p>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            support@investnet.com
          </p>
          <p className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5 text-blue-600" />
            +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
