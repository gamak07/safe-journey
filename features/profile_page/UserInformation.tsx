import Image from "next/image";
import React from "react";
import Button from "../../ui/Button";
import { FaCamera, FaCheckCircle, FaEdit, FaEnvelope, FaPhone } from "react-icons/fa";

export default function UserInformation() {
  return (
    <div className="mb-6 flex flex-col items-center gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:flex-row">
      {/* Profile Image and Camera Icon */}
      <div className="flex items-center justify-center space-x-6">
        <div className="relative h-24 w-24 rounded-full border-4 border-blue-100">
          {/* Replace with actual user image */}
          <Image
            fill
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="absolutew-full h-full rounded-full object-cover"
          />
          <Button className="absolute right-0 bottom-0 cursor-pointer rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
            <FaCamera className="text-sm" />
          </Button>
        </div>
      </div>
      {/* User Info */}
      <div className="flex-1 flex-col gap-6 md:flex-row md:items-center">
        <h2 className="mb-1 text-xl font-bold text-gray-900 md:text-2xl">
          Alex Thompson
        </h2>
        <p className="mb-2 text-base text-gray-600">@alexthompson</p>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-400" />
            <span>alex.thompson@email.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-400" />
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span className="font-medium text-green-600">Verified Account</span>
          </div>
        </div>
      </div>
      {/* Edit Profile Button */}
      <div className="flex items-start md:items-center w-full md:w-auto">

      <Button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-200 cursor-pointer whitespace-nowrap">
        <FaEdit className="mr-1" />
        Edit Profile
      </Button>
      </div>
    </div>
  );
}
