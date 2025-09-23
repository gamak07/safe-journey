import React from "react";
import { FaEye, FaRoute, FaUsers } from "react-icons/fa";

const options = [
  {
    icon: <FaRoute />,
    title: "Start Your Trip",
    description:
      "Simply tap Start Trip and share your route with trusted contacts for real-time tracking and peace of mind.",
  },
  {
    icon: <FaEye />,
    title: "Stay Protected",
    description:
      "Get instant alerts about unsafe areas and access emergency SOS features with one-tap activation.",
  },
  {
    icon: <FaUsers />,
    title: "Community Safety",
    description:
      "Contribute to community safety by reporting incidents and viewing real-time safety information.",
  },
];

export default function HowItWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="font-poppins mb-16 text-center text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="rounded-lg border-gray-200 bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
                {option.icon}
              </div>
              <h3 className="font-semibold text-xl mb-4 text-gray-900">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
