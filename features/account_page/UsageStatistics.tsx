import React from "react";

interface StatItem {
  id: string;
  title: string;
  value: string;
  progressPercent: number; // A number from 0 to 100
  colorClass: string; // Tailwind CSS background color class
}

const statsData: StatItem[] = [
  {
    id: "alerts",
    title: "Safety Alerts Received",
    value: "47 / 50",
    progressPercent: 94, // (47 / 50) * 100
    colorClass: "bg-blue-600",
  },
  {
    id: "routes",
    title: "Routes Planned",
    value: "23 this month",
    progressPercent: 76, // This is an estimate (e.g., 23/30)
    colorClass: "bg-green-600",
  },
  {
    id: "contacts",
    title: "Emergency Contacts Used",
    value: "2 / 5",
    progressPercent: 40, // (2 / 5) * 100
    colorClass: "bg-yellow-600",
  },
  {
    id: "appTime",
    title: "App Usage Time",
    value: "12.5 hrs this month",
    progressPercent: 62.5, // This is an estimate (e.g., 12.5/20)
    colorClass: "bg-purple-600",
  },
];

export default function UsageStatistics() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Usage Statistics
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsData.map((stat, i) => (
          <div key={i}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {stat.title}
              </span>
              <span className="text-sm text-gray-900">{stat.value}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className={`h-2 rounded-full ${stat.colorClass}`}
                style={{ width: `${stat.progressPercent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
