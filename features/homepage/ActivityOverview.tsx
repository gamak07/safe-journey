import React from "react";
import { FaPlay } from "react-icons/fa";
import TripsAndEmergency from "./TripsAndEmergency";
import RecentActivity from "./RecentActivity";
import Link from "next/link";

export default function ActivityOverview() {
  return (
    <section className="px-6 py-8">
      <div className="mb-8">
        <Link href='/tracking' className="flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md bg-blue-600 py-6 text-xl font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
          <FaPlay className="text-2xl" />
          <span>Start Trip</span>
        </Link>
      </div>

      <TripsAndEmergency />
      <RecentActivity />
    </section>
  );
}
