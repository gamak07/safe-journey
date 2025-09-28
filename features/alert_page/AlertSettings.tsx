"use client";

import React, { useState } from "react";
import Toggle from "../../ui/Toggle";
import { FaSave } from "react-icons/fa";

const notificationTypes = [
  {
    key: "safety",
    title: "Safety Alerts",
    desc: "Accidents, hazards, and road conditions",
    enabled: true,
  },
  {
    key: "incident",
    title: "Incident Warnings",
    desc: "Traffic, weather, and environmental alerts",
    enabled: true,
  },
  {
    key: "system",
    title: "System Notifications",
    desc: "App updates and maintenance alerts",
    enabled: false,
  },
];

const priorityLevels = [
  {
    key: "high",
    color: "bg-red-500",
    title: "High Priority",
    desc: "Critical safety and emergency alerts",
    enabled: true,
  },
  {
    key: "medium",
    color: "bg-yellow-400",
    title: "Medium Priority",
    desc: "Important warnings and advisories",
    enabled: true,
  },
  {
    key: "low",
    color: "bg-blue-500",
    title: "Low Priority",
    desc: "General information and tips",
    enabled: false,
  },
];

const additionalSettings = [
  {
    key: "emergency",
    title: "Emergency Contact Notifications",
    desc: "Automatically notify emergency contacts",
    enabled: true,
  },
  {
    key: "sound",
    title: "Sound Notifications",
    desc: "Play sound for alerts",
    enabled: true,
  },
  {
    key: "vibration",
    title: "Vibration",
    desc: "Vibrate device for alerts",
    enabled: true,
  },
];

export default function AlertSettings() {
  const [types, setTypes] = useState(notificationTypes);
  const [priorities, setPriorities] = useState(priorityLevels);
  const [additional, setAdditional] = useState(additionalSettings);

  const handleTypeToggle = (idx: any) => {
    setTypes((types) =>
      types.map((t, i) => (i === idx ? { ...t, enabled: !t.enabled } : t)),
    );
  };
  const handlePriorityToggle = (idx: any) => {
    setPriorities((priorities) =>
      priorities.map((p, i) => (i === idx ? { ...p, enabled: !p.enabled } : p)),
    );
  };
  const handleAdditionalToggle = (idx: any) => {
    setAdditional((additional) =>
      additional.map((a, i) => (i === idx ? { ...a, enabled: !a.enabled } : a)),
    );
  };

  return (
    <section className="mb-24">
      <h2 className="mb-4 text-sm md:text-lg font-semibold text-gray-900">
        Alert Settings
      </h2>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Notification Types */}
        <div className="mb-8">
          <h3 className="mb-4 text-base md:text-lg font-semibold text-gray-900">
            Notification Types
          </h3>
          <div className="space-y-2">
            {types.map((type, idx) => (
              <div key={type.key} className="flex items-center justify-between">
                <div>
                  <div className="md:text-base text-sm font-semibold text-gray-900">
                    {type.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">{type.desc}</div>
                </div>
                <Toggle
                  checked={type.enabled}
                  onChange={() => handleTypeToggle(idx)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        {/* Priority Levels */}
        <div className="mb-8">
          <h3 className="mb-4 text-base md:text-lg font-semibold text-gray-900">
            Priority Levels
          </h3>
          <div className="space-y-2">
            {priorities.map((priority, idx) => (
              <div
                key={priority.key}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span
                    className={`mr-3 h-3 w-3 rounded-full ${priority.color} inline-block`}
                  />
                  <div>
                    <div className="text-sm md:text-base font-semibold text-gray-900">
                      {priority.title}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">{priority.desc}</div>
                  </div>
                </div>
                <Toggle
                  checked={priority.enabled}
                  onChange={() => handlePriorityToggle(idx)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        {/* Additional Settings */}
        <div className="mb-8">
          <h3 className="mb-4 text-base md:text-lg font-semibold text-gray-900">
            Additional Settings
          </h3>
          <div className="space-y-2">
            {additional.map((setting, idx) => (
              <div
                key={setting.key}
                className="flex items-center justify-between"
              >
                <div>
                  <div className="text-sm md:text-base font-semibold text-gray-900">
                    {setting.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">{setting.desc}</div>
                </div>
                <Toggle
                  checked={setting.enabled}
                  onChange={() => handleAdditionalToggle(idx)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <button
          type="button"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <FaSave />
          Save Alert Settings
        </button>
      </div>
    </section>
  );
}
