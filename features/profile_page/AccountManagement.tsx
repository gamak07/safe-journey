"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  FaChevronRight,
  FaCreditCard,
  FaCrown,
  FaDatabase,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";
import Button from "../../ui/Button";
import Link from "next/link";

const accountItems = [
  {
    key: "status",
    title: "Account Status",
    desc: "Premium Member",
    icon: <FaCrown className="mr-3 text-xl text-yellow-500" />,
    descClass: "text-green-600 font-medium",
    type: "status",
    link:'/overview/account'
  },
  {
    key: "subscription",
    title: "Subscription Details",
    desc: "Manage billing and plans",
    icon: <FaCreditCard className="mr-3 text-xl text-gray-500" />,
    type: "link",
    link:'/overview/subscription'
  },
  {
    key: "data",
    title: "Data Management",
    desc: "Export or delete your data",
    icon: <FaDatabase className="mr-3 text-xl text-gray-500" />,
    type: "link",
    link:'/overview/account'
  },
];

export default function AccountManagement() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };
  return (
    <div className="mb-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Account Management
      </h2>
      <div className="mb-4 space-y-4">
        {accountItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.key}
            className="flex cursor-pointer items-center justify-between border-b border-gray-100 py-3 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center">
              {item.icon}
              <div>
                <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                  {item.title}
                </div>
                <div
                  className={
                    item.descClass
                      ? item.descClass + " text-sm"
                      : "text-sm text-gray-500"
                  }
                >
                  {item.desc}
                </div>
              </div>
            </div>
            <FaChevronRight className="text-gray-400" />
          </Link>
        ))}
      </div>
      <Button
        className="mb-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-600 py-4 text-base font-semibold text-white transition-colors hover:bg-red-700"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="text-lg" />
        Logout
      </Button>
      <Button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-red-200 bg-white py-4 text-base font-semibold text-red-600 transition-colors hover:bg-red-50">
        <FaTrash className="text-lg" />
        Delete Account
      </Button>
    </div>
  );
}
