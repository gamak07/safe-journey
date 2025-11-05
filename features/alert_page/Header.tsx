"use client";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full bg-white px-6 py-4 shadow-sm">
      <div className="flex w-full items-center justify-between overflow-hidden">
        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-xl text-blue-600 md:text-2xl" />
          <span className="text-base font-bold text-gray-900 md:text-xl">
            SafeJourney
          </span>
        </div>
        <h1 className="text-sm font-semibold text-gray-900 md:text-xl">
          Alerts
        </h1>
        <Button
          className="flex cursor-pointer items-center rounded-md bg-blue-600 px-4 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700"
          onClick={() => router.push("/overview")}
        >
          <FaArrowLeft className="mr-2" />{" "}
          <span className="hidden md:block">Back</span>
        </Button>
      </div>
    </header>
  );
}
