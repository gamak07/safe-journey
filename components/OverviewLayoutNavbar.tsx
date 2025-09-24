"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBell, FaHome, FaMapMarkedAlt, FaUser } from "react-icons/fa";

const links = [];

export default function OverviewLayoutNavbar() {
  const pathname = usePathname();
  let currentPath = pathname.split("/").pop();

  if (pathname === "/overview" || pathname === "") {
    currentPath = "/";
  }

  return (
    <nav className="fixed right-0 bottom-0 left-0 border-t-gray-200 bg-white px-6 py-4">
      <div className="flex justify-around">
        {["/", "reports", "alerts", "profile"].map((item, i) => (
          <Link
            key={i}
            href={`/overview/${item}`}
            className={`flex cursor-pointer flex-col items-center space-y-1 capitalize ${currentPath === item ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
          >
            <span className="text-xl">
              {item === "/" && <FaHome />}
              {item === "reports" && <FaMapMarkedAlt />}
              {item === "alerts" && <FaBell />}
              {item === "profile" && <FaUser />}
            </span>
            <p className="text-xs">{item === "/" ? "home" : item}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
