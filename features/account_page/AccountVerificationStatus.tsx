import React from "react";
import { FaEnvelope, FaIdCard, FaPhone, FaShareAlt } from "react-icons/fa";

interface VerificationStep {
  id: string;
  title: string;
  icon: React.ReactElement; // The icon component itself
  iconColor: string; // Tailwind class for the icon color
  status: string; // The text for the badge
  badgeClasses: string; // Tailwind classes for the badge
}

const verificationSteps: VerificationStep[] = [
  {
    id: "email",
    title: "Email Verification",
    icon: <FaEnvelope />,
    iconColor: "text-green-500",
    status: "Completed",
    badgeClasses: "bg-green-100 text-green-800",
  },
  {
    id: "phone",
    title: "Phone Verification",
    icon: <FaPhone />,
    iconColor: "text-green-500",
    status: "Completed",
    badgeClasses: "bg-green-100 text-green-800",
  },
  {
    id: "identity",
    title: "Identity Verification",
    icon: <FaIdCard />,
    iconColor: "text-blue-500",
    status: "Verified",
    badgeClasses: "bg-blue-100 text-blue-800",
  },
  {
    id: "2fa",
    title: "Two-Factor Authentication",
    icon: <FaShareAlt />,
    iconColor: "text-green-500",
    status: "Enabled",
    badgeClasses: "bg-green-100 text-green-800",
  },
];

export default function AccountVerificationStatus() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Account Verification Status
      </h3>
      <div className="space-y-4">
        {verificationSteps.map((verification) => (
          <div
            className="flex items-center justify-between"
            key={verification.id}
          >
            <div className="flex items-center space-x-3">
              <span className={verification.iconColor}>
                {verification.icon}
              </span>
              <span className="text-gray-700">{verification.title}</span>
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${verification.badgeClasses}`}
            >
              {verification.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
