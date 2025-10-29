import React from "react";
import Button from "../../ui/Button";
import { FaCog } from "react-icons/fa";

type User = {
  fullname: string;
  email: string;
  // ... any other user fields
};
export default function Header({ user }: { user: User | null }) {
  console.log(user);

  const lastName = user?.fullname ? user?.fullname.split(" ").slice(-1).join(" ") : "User";
  function getInitials(fullname: string) {
  if (fullname) return "";
  const parts = fullname.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}


  return (
    <header className="bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
            <span className="font-semibold text-white">{getInitials(user?.fullname)}</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Welcome back, {lastName}
            </h1>
            <p className="text-sm text-gray-600">Stay safe on your journey</p>
          </div>
        </div>

        <Button className="cursor-pointer text-gray-400 hover:text-gray-600">
          <FaCog className="text-xl" />
        </Button>
      </div>
    </header>
  );
}
