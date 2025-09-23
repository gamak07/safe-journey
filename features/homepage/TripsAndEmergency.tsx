import Link from "next/link";
import React from "react";
import { FaHistory, FaUserPlus } from "react-icons/fa";

export default function TripsAndEmergency() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-3 flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <FaHistory className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">View Past Trips</h3>
        </div>

        <Link href="#" className="text-sm text-gray-600 hover:text-gray-800">
          Review your travel history and safety reports
        </Link>
      </div>

      <div className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-3 flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <FaUserPlus className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Add Emergency Contacts</h3>
        </div>

        <Link href="#" className="text-sm text-gray-600 hover:text-gray-800">
          Set up trusted contacts for safety alerts
        </Link>
      </div>
    </div>
  );
}
