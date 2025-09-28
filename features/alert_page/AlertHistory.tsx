import React from "react";
import Filter from "./Filter";
import {
  FaAmbulance,
  FaCamera,
  FaCar,
  FaCarCrash,
  FaSatelliteDish,
} from "react-icons/fa";

const histories = [
  {
    id: 1,
    icon: <FaAmbulance />,
    situation: "Emergency Vehicle Alert",
    cause: "Ambulance approaching from behind",
    severity: "high",
    date: "2024-01-20",
    time: "14:20",
    resolved: true,
  },
  {
    id: 2,
    icon: <FaCar />,
    situation: "Traffic Congestion",
    cause: "Heavy traffic detected on highway 101",
    severity: "medium",
    date: "2024-01-20",
    time: "14:20",
    resolved: true,
  },
  {
    id: 3,
    icon: <FaSatelliteDish />,
    situation: "GPS Signal Lost",
    cause: "Temporary GPS connectivity issues",
    severity: "medium",
    date: "2024-01-20",
    time: "14:20",
    resolved: true,
  },
  {
    id: 4,
    icon: <FaCamera />,
    situation: "Speed Camera Alert",
    cause: "Speed enforcement zone ahead",
    severity: "low",
    date: "2024-01-20",
    time: "14:20",
    resolved: true,
  },
  {
    id: 5,
    icon: <FaCarCrash />,
    situation: "Accident Report",
    cause: "Minor fender bender reported on Oak Avenue",
    severity: "high",
    date: "2024-01-20",
    time: "14:20",
    resolved: true,
  },
];
export default function AlertHistory() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Alert History
      </h2>
      <Filter />
      <div className="space-y-3">
        {histories.map((history) => (
          <div
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            key={history.id}
          >
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`rounded-lg p-2 text-sm ${history.severity === "high" ? "bg-red-50 text-red-700" : history.severity === "medium" ? "bg-yellow-50 text-yellow-700" : history.severity === "low" ? "bg-blue-50 text-blue-700" : ""}`}
                >
                  {history.icon}
                </div>
                <div>
                  <div className="mb-1 flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">
                      {history.situation}
                    </h4>
                    <span
                      className={`rounded-full border px-2 py-1 text-xs font-medium uppercase ${history.severity === "high" ? "border-red-200 bg-red-100 text-red-800" : history.severity === "medium" ? "border-yellow-200 bg-yellow-100 text-yellow-800" : history.severity === "low" ? "border-blue-200 bg-blue-100 text-blue-800" : ""}`}
                    >
                      {history.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{history.cause}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between md:flex-col md:items-end md:w-fit md:text-right mt-4 md:mt-0">
                <div className="text-sm font-medium text-gray-900">
                  {history.date}
                </div>
                <div className="text-sm text-gray-500">{history.time}</div>
                <span
                  className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${history.resolved ? "bg-green-100 text-green-800" : ""}`}
                >
                  {history.resolved && "Resolved"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
