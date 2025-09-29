'use client'

import React, { useState } from "react";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import Button from "../../ui/Button";

type PreferenceKey = "language" | "units" | "theme" | "mapStyle";

const preferences: { label: string; key: PreferenceKey; options: string[] }[] =
  [
    {
      label: "Language",
      key: "language",
      options: ["English", "Spanish", "French"],
    },
    {
      label: "Units",
      key: "units",
      options: ["Imperial (mph, °F)", "Metric (km/h, °C)"],
    },
    {
      label: "Theme",
      key: "theme",
      options: ["Light Mode", "Dark Mode", "System"],
    },
    {
      label: "Map Style",
      key: "mapStyle",
      options: ["Standard", "Satellite", "Terrain"],
    },
  ];

export default function AppPreferences() {
  const [values, setValues] = useState({
    language: "English",
    units: "Imperial (mph, °F)",
    theme: "Light Mode",
    mapStyle: "Standard",
  });

  const handleToggle = (key: PreferenceKey, options: string[]) => {
    setValues((prev) => {
      const idx = options.indexOf(prev[key]);
      const next = options[(idx + 1) % options.length];
      return { ...prev, [key]: next };
    });
  };

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">App Preferences</h2>
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {preferences.map((pref) => (
          <div key={pref.key}>
            <label className="mb-2 block font-medium text-gray-700">
              {pref.label}
            </label>
            <Button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onClick={() => handleToggle(pref.key, pref.options)}
            >
              <span>{values[pref.key]}</span>
              <FaChevronDown className="text-gray-400" />
            </Button>
          </div>
        ))}
      </form>
    </div>
  );
}
