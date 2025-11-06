import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCreditCard,
  FaReceipt,
  FaTimes,
} from "react-icons/fa";
import Button from "../../ui/Button";

export default function SubscriptionManagement() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Subscription Management
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Button className="flex cursor-pointer items-center justify-center !rounded-md bg-blue-600 p-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
          <FaArrowUp className="mr-2" />
          Upgrade Plan
        </Button>
        <Button className="justify-center flex cursor-pointer items-center !rounded-md bg-gray-100 p-4 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200">
          <FaArrowDown className="mr-2" />
          Downgrade Plan
        </Button>
        <Button className="justify-center flex cursor-pointer items-center !rounded-md bg-green-600 p-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-green-700">
          <FaCreditCard className="mr-2" />
          Manage Payment
        </Button>
        <Button className="justify-center flex cursor-pointer items-center !rounded-md bg-indigo-600 p-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-indigo-700">
          <FaReceipt className="mr-2" />
          Billing History
        </Button>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4">
        <Button className="justify-center flex w-full cursor-pointer items-center !rounded-md border border-red-300 py-3 font-medium whitespace-nowrap text-red-600 transition-colors hover:bg-red-50">
          <FaTimes className="mr-2" />
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
}
