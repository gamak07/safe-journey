import React from "react";
import { FaShieldAlt } from "react-icons/fa";

export default function MiniDashboard() {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6">
      <div className="mb-4 flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
          <FaShieldAlt className="text-xl text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-800">Trip Active</h2>
          <p className="text-green-700">Your location is being shared safely</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <div className="rounded-lg bg-white p-4">
          <p className="text-2xl font-bold text-green-600">00:15:42</p>
          <p className="text-sm text-gray-600">Trip Duration</p>
        </div>
        <div className="rounded-lg bg-white p-4">
          <p className="text-2xl font-bold text-blue-600">2.3 km</p>
          <p className="text-sm text-gray-600">Distance</p>
        </div>
      </div>
    </div>
  );
}
