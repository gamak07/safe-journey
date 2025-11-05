'use client'

import { useRouter } from "next/navigation";
import { FaExclamationTriangle, FaStop } from "react-icons/fa";
import Button from "../../ui/Button";

export default function ActionButtons() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className="flex cursor-pointer items-center justify-center space-x-2 !rounded-md bg-red-600 py-4 font-semibold whitespace-nowrap text-white transition-colors hover:bg-red-700">
        <FaExclamationTriangle />
        <span>SOS Alert</span>
      </Button>
      <Button
        className="flex cursor-pointer items-center justify-center space-x-2 !rounded-md bg-gray-600 py-4 font-semibold whitespace-nowrap text-white transition-colors hover:bg-gray-700"
        onClick={() => router.back()}
      >
        <FaStop />
        <span>End Trip</span>
      </Button>
    </div>
  );
}
