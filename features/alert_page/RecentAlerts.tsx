"use client";

import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCloudRain,
  FaExclamationTriangle,
  FaMobileAlt,
} from "react-icons/fa";
import Button from "../../ui/Button";
import AlertDetails from "./AlertDetails";

const alerts = [
  {
    icon: <FaExclamationTriangle />,
    title: "Road Hazard Detected",
    risk: "high",
    cause: "Construction work ahead on Main Street causing lane closures",
    time: "2 minutes ago",
    type: "safety",
    details:
      "Major construction work is currently underway on Main Street between 5th and 7th Avenue. Two lanes are closed, causing significant traffic delays. Alternative routes via Oak Street or Pine Avenue are recommended.",
    location: "Adeniji, Lagos Island",
    estDuration: "2-5 hours",
  },
  {
    icon: <FaCloudRain />,
    title: "Weather Alert",
    risk: "medium",
    cause: "Heavy rain expected in your area within the next hour",
    time: "1 hour ago",
    type: "incident",
    details:
      "The National Weather Service has issued a heavy rain warning for the metropolitan area. Rainfall rates of 1-2 inches per hour are expected, which may cause flooding in low-lying areas and reduced visibility.",
    location: "Ayobo, Lagos",
    estDuration: "20-45 minutes",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Update Available",
    risk: "low",
    cause: "New safety features and bug fixes are now available",
    time: "7 hours ago",
    type: "system",
    details:
      "SafeJourney version 2.1.3 is now available with enhanced route optimization, improved emergency contact features, and various performance improvements.",
    location: "System",
    estDuration: "Immediate",
  },
];

export default function RecentAlerts() {
  const [selectedAlert, setSelectedAlert] = useState<any | null>(null);
  const handleClickedAlert = (alert: any) => {
    if (selectedAlert === alert) {
      setSelectedAlert(null);
    } else {
      setSelectedAlert(alert);
    }
  };
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-sm font-semibold text-gray-900 md:text-lg">
        Recent Alerts
      </h2>
      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <div
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            key={i}
            onClick={() => handleClickedAlert(alert)}
          >
            <div className="cursor-pointer p-6 transition-colors hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex flex-1 items-start space-x-4">
                  <div
                    className={`rounded-lg p-2 text-lg md:p-3 ${alert.risk === "high" ? "bg-red-50 text-red-700" : alert.risk === "medium" ? "bg-yellow-50 text-yellow-700" : "bg-blue-50 text-blue-700"}`}
                  >
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-2 md:space-x-3">
                      <h3 className="text-xs font-semibold text-gray-900 md:text-lg">
                        {alert.title}
                      </h3>
                      <span
                        className={`rounded-full border px-2 py-1 text-xs font-medium uppercase ${alert.risk === "high" ? "border-red-200 bg-red-100 text-red-800" : alert.risk === "medium" ? "border-yellow-200 bg-yellow-100 text-yellow-800" : "border-blue-200 bg-blue-100 text-blue-800"}`}
                      >
                        {alert.risk}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-gray-600 md:text-lg">
                      {alert.cause}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center whitespace-nowrap">
                        <FaClock className="mr-1" /> {alert.time}
                      </span>
                      <span
                        className={`rounded px-2 py-1 text-xs font-medium capitalize ${alert.type === "safety" ? "bg-red-50 text-red-700" : alert.type === "incident" ? "bg-yellow-50 text-yellow-700" : "bg-blue-50 text-blue-700"}`}
                      >
                        {alert.type}
                      </span>
                    </div>
                  </div>
                </div>
                <Button>
                  {selectedAlert === alert ? (
                    <FaChevronUp className="ml-4 text-gray-400" />
                  ) : (
                    <FaChevronDown className="ml-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            {selectedAlert === alert && <AlertDetails alert={alert} />}
          </div>
        ))}
      </div>
    </div>
  );
}
