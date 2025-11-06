'use client'

import React, { useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import Toggle from "../../ui/Toggle";

export default function CurrentPlanDetails() {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Current Plan Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Plan Name
          </label>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900">Premium Member</span>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              Annual
            </span>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Subscription Cost
          </label>
          <div className="font-medium text-gray-900">$99.99 / year</div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <div className="text-gray-900">March 15, 2024</div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Next Renewal
          </label>
          <div className="text-gray-900">March 15, 2025</div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <div className="flex items-center space-x-2">
            <FaCcVisa className="text-blue-600" />
            <span className="text-gray-900">•••• •••• •••• 4567</span>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Auto-Renewal
          </label>
          <Toggle checked={toggle} onChange={handleToggle} />
        </div>
      </div>
    </div>
  );
}
