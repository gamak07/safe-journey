'use client'

import React from "react";
import { FaMapMarkerAlt, FaPlay } from "react-icons/fa";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

export default function TripReady() {
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('tracking/active')
    }
  return (
    <section className="px-6 py-8">
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <FaMapMarkerAlt className="text-3xl text-blue-600" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Ready to Start Your Trip
          </h2>
          <p className="mb-6 text-gray-600">
            Share your location with trusted contacts for safety monitoring
          </p>
          <form className="mb-6 space-y-4">
            <div>
              <label
                htmlFor="destination"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Destination
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Where are you going?"
                id="destination"
              />
            </div>

            <div>
              <label htmlFor="arrivalTime">Expected Arrival Time</label>
              <input
                type="time"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="mt-6 !rounded-md flex w-full cursor-pointer items-center justify-center space-x-3 bg-green-600 py-4 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:bg-green-700"
              onClick={handleSubmit}
            >
              <FaPlay className="text-xl" />
              <span>Start Trip Tracking</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
