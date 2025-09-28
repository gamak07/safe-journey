import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../ui/Button";

export default function Filter() {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="alertType"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Alert Type
          </label>
          <select
            name="alertType"
            id="alertType"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="all">All Types</option>
            <option value="safety">Safety</option>
            <option value="incident">Incident</option>
            <option value="system">System</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="severity"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Severity
          </label>
          <select
            name="alertType"
            id="alertType"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="all">All Types</option>
            <option value="safety">Safety</option>
            <option value="incident">Incident</option>
            <option value="system">System</option>
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2 pl-10 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search alerts..."
            />
            <FaSearch className="absolute top-3 left-3 text-sm text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
