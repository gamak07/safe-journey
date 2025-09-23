"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBell, FaHome, FaMapMarkedAlt, FaUser } from "react-icons/fa";

export default function OverviewLayoutNavbar() {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();

  return (
    <nav className="fixed right-0 bottom-0 left-0 border-t-gray-200 bg-white px-6 py-4">
      <div className="flex justify-around">
        {["home", "reports", "alerts", "profile"].map((item, i) => (
          <Link
            key={i}
            href={`/overview/${item}`}
            className={`flex cursor-pointer flex-col items-center space-y-1 capitalize ${currentPath === item ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            // onClick={() => handleNavChange(item)}
          >
            <span className="text-xl">
              {item === "home" && <FaHome />}
              {item === "reports" && <FaMapMarkedAlt />}
              {item === "alerts" && <FaBell />}
              {item === "profile" && <FaUser />}
            </span>
            <p className="text-xs">{item}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
