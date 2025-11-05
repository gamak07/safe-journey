import React from "react";
import Button from "../../ui/Button";
import { FaRoute, FaShare } from "react-icons/fa";

interface AlertDetailsProps {
  alert?: any;
}
export default function AlertDetails({ alert }: AlertDetailsProps) {
  return (
    <div className="border-t border-gray-200 bg-gray-50 p-6">
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 font-medium text-gray-900">Full Details</h4>
          <p className="text-gray-700">{alert?.details}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm font-medium text-gray-500">Location:</span>
            <p className="text-gray-900">{alert?.location}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">
              Estimated Duration:
            </span>
            <p className="text-gray-900">{alert?.estDuration}</p>
          </div>
        </div>
        {alert?.risk !== "low" && (
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3">
            <Button className="flex w-full md:w-fit cursor-pointer items-center !rounded-md bg-blue-600 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
              <FaRoute className="mr-2" /> Find Alternative Route
            </Button>
            <Button className="flex w-full md:w-fit cursor-pointer items-center !rounded-md border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50">
              <FaShare className="mr-2" /> Share Alert
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
