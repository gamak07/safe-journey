'use client'

import React, { useState } from "react";
import Toggle from "../../ui/Toggle";

interface notificationProps {
  key: string;
  title: string;
  desc: string;
  enabled: boolean;
}

const notificationPrefs: notificationProps[] = [
  {
    key: "safety",
    title: "Safety Alerts",
    desc: "Critical safety notifications",
    enabled: true,
  },
  {
    key: "incident",
    title: "Incident Warnings",
    desc: "Traffic and weather alerts",
    enabled: true,
  },
  {
    key: "system",
    title: "System Notifications",
    desc: "App updates and maintenance",
    enabled: false,
  },
  {
    key: "sound",
    title: "Sound Enabled",
    desc: "Play notification sounds",
    enabled: true,
  },
  {
    key: "vibration",
    title: "Vibration",
    desc: "Vibrate for notifications",
    enabled: true,
  },
  {
    key: "dnd",
    title: "Do Not Disturb",
    desc: "Silence non-critical notifications",
    enabled: false,
  },
];

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState(notificationPrefs);

  const handleToggle = (idx: number) => {
    setPrefs((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, enabled: !p.enabled } : p)),
    );
  };

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Notification Preferences
      </h2>
      <div className="space-y-4">
        {prefs.map((item, idx) => (
          <div
            key={item.key}
            className="flex items-center justify-between"
          >
            <div>
              <div className="font-medium text-gray-900">
                {item.title}
              </div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
            <Toggle checked={item.enabled} onChange={() => handleToggle(idx)} />
          </div>
        ))}
      </div>
    </div>
  );
}
