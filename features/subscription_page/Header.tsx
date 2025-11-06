"use client";

import React from "react";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-xl text-blue-600 md:text-2xl" />
            <span className="text-base font-bold text-gray-900 md:text-xl">
              SafeJourney
            </span>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Subscription Management</h1>
        <Button
          className="flex cursor-pointer items-center !rounded-md bg-blue-600 px-4 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="fas fa-arrow-left mr-2" />
          <span className="hidden md:block">Back</span>
        </Button>
      </div>
    </header>
  );
}
