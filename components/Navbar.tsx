import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between space-y-4 bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-4 md:flex-row md:space-y-0 md:px-8 md:py-6">
      <div className="flex items-center space-x-2">
        <FaShieldAlt className="text-2xl text-white" />
        <span className="text-xl font-bold text-white">SafeJourney</span>
      </div>
      <div className="space-x-4">
        <Button className="cursor-pointer text-white transition-colors hover:text-blue-200">
          Login
        </Button>
        <Button className="cursor-pointer rounded-md bg-white px-4 py-2 font-semibold whitespace-nowrap text-blue-600 transition-colors hover:bg-blue-50 md:px-6">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
