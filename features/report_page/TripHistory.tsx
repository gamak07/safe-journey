"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import HistoryModal from "./HistoryModal";

const trips = [
  {
    date: "20-09-2025",
    time: "10:05 AM",
    arrived: "10:50 AM",
    status: "safe",
    from: "Ayobo",
    to: "Ikeja",
    duration: "45 min",
    distance: "12.5 km",
    incident: 0,
    image: "",
    routeMap: "/map.jpg",
    weather: "clear",
    route: ["Alimosho ", "mangoroo"],
  },
  {
    date: "20-09-2025",
    time: "10:05 AM",
    arrived: "10:50 AM",
    status: "minor",
    from: "Ayobo",
    to: "Ikeja",
    duration: "45 min",
    distance: "12.5 km",
    incident: 2,
    image: "",
    routeMap: "/map.jpg",
    weather: "clear",
    route: ["Alimosho ", "mangoroo"],
  },
  {
    date: "20-09-2025",
    time: "10:05 AM",
    arrived: "10:50 AM",
    status: "safe",
    from: "Ayobo",
    to: "Ikeja",
    duration: "45 min",
    distance: "12.5 km",
    incident: 0,
    image: "",
    routeMap: "/map.jpg",
    weather: "clear",
    route: ["Alimosho ", "mangoroo"],
  },
  {
    date: "20-09-2025",
    time: "10:05 AM",
    arrived: "10:50 AM",
    status: "major",
    from: "Ayobo",
    to: "Ikeja",
    duration: "45 min",
    distance: "12.5 km",
    incident: 2,
    image: "",
    routeMap: "/map.jpg",
    weather: "clear",
    route: ["Alimosho ", "mangoroo"],
  },
  {
    date: "20-09-2025",
    time: "10:05 AM",
    arrived: "10:50 AM",
    status: "safe",
    from: "Ayobo",
    to: "Ikeja",
    duration: "45 min",
    distance: "12.5 km",
    incident: 0,
    image: "",
    routeMap: "/map.jpg",
    weather: "clear",
    route: ["Alimosho ", "mangoroo"],
  },
];

export default function TripHistory() {
  const [selectedTrip, setSelectedTrip] = useState<any | null>(null);
  return (
    <>
      <section className="px-6 py-6 pb-24">
        <div className="space-y-4">
          {trips.map((trip, i) => (
            <div
              className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              key={i}
              onClick={() => setSelectedTrip(trip)}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-lg font-semibold text-gray-900">
                    {trip.date} at {trip.time}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${trip.status === "safe" ? "bg-green-100 text-green-600" : trip.status === "minor" ? "bg-yellow-100 text-yellow-600" : trip.status === "major" ? "bg-red-100 text-red-600" : ""}`}
                  >
                    {trip.status === "safe" && "Safe"}
                    {trip.status === "minor" && "Minor Incident"}
                    {trip.status === "major" && "Major Incident"}
                  </span>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
              <div className="mb-4 grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-green-600" />
                    <span className="text-sm font-medium text-gray-900">
                      From: {trip.from}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-red-600" />
                    <span className="text-sm font-medium text-gray-900">
                      to: {trip.to}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">
                      {trip.duration}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Distance</div>
                    <div className="font-semibold text-gray-900">
                      {trip.distance}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative h-20 w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    fill
                    src={trip.routeMap}
                    quality={100}
                    alt="route map"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {trip.incident > 0 && (
                  <div className="ml-4 text-sm text-gray-600">
                    {trip.incident}{" "}
                    {trip.incident >= 1 ? "Incident" : "Incidents"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* modal */}
      {selectedTrip && <HistoryModal onClose={() => setSelectedTrip(null)} trip={selectedTrip} />}
    </>
  );
}
