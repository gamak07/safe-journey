import React from "react";
import {
  FaArrowUp,
  FaCreditCard,
  FaFileInvoice,
  FaTimesCircle,
} from "react-icons/fa";
import Button from "../../ui/Button";

export default function PlanActions() {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Button className="cursor-pointer flex flex-col items-center justify-center !rounded-md bg-blue-600 p-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
        <FaArrowUp className="fas fa-arrow-up mb-2 block text-lg" />
        Upgrade Plan
      </Button>
      <Button className="cursor-pointer flex flex-col items-center justify-center !rounded-md bg-gray-100 p-4 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200">
        <FaCreditCard className="fas fa-credit-card mb-2 block text-lg" />
        Payment Method
      </Button>
      <Button className="cursor-pointer flex flex-col items-center justify-center !rounded-md bg-gray-100 p-4 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200">
        <FaFileInvoice className="fas fa-file-invoice mb-2 block text-lg" />
        View Invoices
      </Button>
      <Button className="cursor-pointer flex flex-col items-center justify-center !rounded-md bg-red-100 p-4 font-medium whitespace-nowrap text-red-700 transition-colors hover:bg-red-200">
        <FaTimesCircle className="fas fa-times-circle mb-2 block text-lg" />
        Cancel Subscription
      </Button>
    </div>
  );
}
