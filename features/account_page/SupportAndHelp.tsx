import React from "react";
import Link from "next/link";
import {
  FaChartBar,
  FaChevronRight,
  FaDollarSign,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";

interface SupportLink {
  id: string;
  title: string;
  icon: React.ReactElement; // The icon component
  iconColor: string; // Tailwind class for icon color
  href: string; // The destination path
}

const supportLinks: SupportLink[] = [
  {
    id: "premium",
    title: "Contact Premium Support",
    icon: <FaHeadset />,
    iconColor: "text-blue-600",
    href: "/support/premium",
  },
  {
    id: "comparison",
    title: "View Plan Comparison",
    icon: <FaChartBar />,
    iconColor: "text-green-600",
    href: "/pricing",
  },
  {
    id: "faq",
    title: "FAQ & Help Center",
    icon: <FaQuestionCircle />,
    iconColor: "text-purple-600",
    href: "/faq",
  },
  {
    id: "billing",
    title: "Billing Support",
    icon: <FaDollarSign />,
    iconColor: "text-yellow-600",
    href: "/support/billing",
  },
];

export default function SupportAndHelp() {
  return (
    <div className="mb-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Support &amp; Help
      </h3>
      <div className="space-y-3">
        {supportLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <span className={link.iconColor}>{link.icon}</span>
              <span className="text-gray-700">{link.title}</span>
            </div>
            <FaChevronRight className="text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
