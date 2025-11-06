import React from "react";
import Portal from "../../ui/Portal";
import { FaTimes } from "react-icons/fa";
import Button from "../../ui/Button";

export default function PasswordChangeModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Change Password
            </h3>
            <Button
              className="cursor-pointer text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <FaTimes />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter current password"
                value=""
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
                value=""
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new password"
                value=""
              />
            </div>
            <div className="text-xs text-gray-500">
              Password must be at least 6 characters long
            </div>
          </div>
          <div className="mt-6 flex flex-col space-y-3 space-x-0 md:flex-row md:space-y-0 md:space-x-3">
            <Button className="flex-1 cursor-pointer !rounded-md bg-blue-600 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
              Update Password
            </Button>
            <Button
              className="flex-1 cursor-pointer !rounded-md bg-gray-100 py-2 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
