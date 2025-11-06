import React from "react";
import { FaCrown } from "react-icons/fa";

export default function Breadcrum() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-col md:items-center md:flex-row md:justify-between">
        <div className="flex md:items-center space-x-3">
          <FaCrown className="text-2xl text-yellow-500" />
          <div className="flex items-center md:items-start md:flex-col space-x-2 md:space-x-0">
            <h2
              className="text-2xl font-bold text-gray-900"
            >
              Premium Member
            </h2>
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Active
            </span>
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-sm text-gray-600">Next billing date</div>
          <div className="text-lg font-semibold text-gray-900">
            February 15, 2024
          </div>
          <div className="text-2xl font-bold text-blue-600">$29.99/month</div>
        </div>
      </div>
    </div>
  );
}
