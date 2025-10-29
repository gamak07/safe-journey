import React from "react";
import { FaCheck, FaUserPlus } from "react-icons/fa";
import { getUser } from "../../hooks/useUser";

const activities = [
  {
    icon: <FaCheck />,
    type: "Trip to Downtown completed",
    time: "2 hours ago",
  },
  { icon: <FaUserPlus />, type: "Emergency contact added", time: "1 day ago" },
];

export default function RecentActivity() {
  
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-gray-900">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <span className="text-sm text-green-600">{activity.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.type}
              </p>
              <p className="text-xs text-gray-600">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
