import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../ui/Button";

export default function Filter() {
  return (
    <div className="sticky top-16 z-30 border-b border-gray-200 bg-white px-6 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label
            htmlFor="fromDate"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            From Date
          </label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="fromDate"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            To Date
          </label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="trip"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Trip Status
          </label>
          <select
            name="trip"
            id="trip"
            className="w-full cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Trips</option>
            <option value="safe">Safe</option>
            <option value="minor">Minor Incidents</option>
            <option value="major">Major Incidents</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search locations..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute top-3 left-3 text-sm text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50">
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
