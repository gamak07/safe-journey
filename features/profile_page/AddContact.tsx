import React from "react";
import Portal from "../../ui/Portal";
import Button from "../../ui/Button";
import { FaTimes } from "react-icons/fa";

export default function AddContact({ onClose }: { onClose: () => void }) {
  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Add Emergency Contact
            </h3>
            <Button className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={onClose}>
              <FaTimes />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contact Name *
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter contact name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Relationship
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Spouse, Parent, Friend"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Priority Level
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    className="mr-2 text-blue-600"
                    value="primary"
                  />
                  <span className="text-sm">Primary</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    className="mr-2 text-blue-600"
                    value="secondary"
                    // checked
                  />
                  <span className="text-sm">Secondary</span>
                </label>
              </div>
            </div>
            <div className="text-xs text-gray-500">* Required fields</div>
          </div>
          <div className="mt-6 flex flex-col space-y-3 space-x-0 md:flex-row md:space-y-0 md:space-x-3">
            <Button className="!rounded-md flex-1 cursor-pointer bg-blue-600 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
              Save Contact
            </Button>
            <Button className="!rounded-md flex-1 cursor-pointer bg-gray-100 py-2 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
