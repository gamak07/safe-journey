'use client'

import React from "react";
import Button from "../../ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter()
  return (
    <header className="bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Button className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={()=>router.back()}>
          <FaArrowLeft className="text-xl" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-900">Trip Tracking</h1>
        <div></div>
      </div>
    </header>
  );
}
