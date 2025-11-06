import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PremiumPlanBenefits() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Premium Plan Benefits
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Unlimited safety alerts</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Priority emergency response</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Advanced route planning</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Real-time incident reporting</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">24/7 customer support</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">
            Family sharing (up to 5 members)
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Offline map access</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Premium analytics dashboard</span>
        </div>
      </div>
    </div>
  );
}
