import React from "react";
import { FaCalendar, FaCheckCircle, FaCrown } from "react-icons/fa";

export default function Breadcrum() {
  return (
    <div className="mb-6 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex md:items-center items-start space-x-4">
          <div className="rounded-full bg-yellow-100 p-3">
            <FaCrown className="text-2xl text-yellow-600" />
          </div>
          <div>
            <h2 className="mb-1 text-2xl font-bold text-gray-900">
              Premium Member
            </h2>
            <div className="flex flex-col md:flex-row md:items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <FaCheckCircle className="text-green-500" />
                <span>Account Verified</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendar className="fas fa-calendar text-gray-400" />
                <span>Member since March 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end md:text-right md:flex-col md:items-end">
          <div className="mb-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            Active
          </div>
          <div className="text-sm text-gray-600">Tier: Premium</div>
        </div>
      </div>
    </div>
  );
}
