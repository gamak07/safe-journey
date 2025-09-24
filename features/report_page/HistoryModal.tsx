import React from "react";
import Portal from "../../ui/Portal";
import Button from "../../ui/Button";
import { FaDownload, FaShare, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface HistoryModalProps {
  onClose: () => void;
  trip?: any;
}

export default function HistoryModal({ onClose, trip }: HistoryModalProps) {
  const {
    status,
    date,
    time,
    distance,
    duration,
    weather,
    routeMap,
    route,
    from,
    to,
    arrived,
  } = trip || {};
  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        <div className="no-scrollbar max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white">
          <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {" "}
              Trip Details
            </h2>
            <Button
              onClick={onClose}
              className="cursor-pointer text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-xl" />
            </Button>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Trip Overview
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${status === "safe" ? "bg-green-100 text-green-600" : status === "minor" ? "bg-yellow-100 text-yellow-600" : status === "major" ? "bg-red-100 text-red-600" : ""}`}
                >
                  {status === "safe" && "Safe"}
                  {status === "minor" && "Minor Incident"}
                  {status === "major" && "Major Incident"}
                </span>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Date & Time</div>
                  <div className="font-medium text-gray-900">
                    {date} at {time}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Weather</div>
                  <div className="font-medium text-gray-900">{weather}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium text-gray-900">{duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Distance</div>
                  <div className="font-medium text-gray-900">{distance}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Route Map
              </h3>
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  alt="Route Map"
                  src={routeMap}
                  fill
                  quality={100}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-3 rounded-lg bg-gray-50 p-3">
                <div className="text-sm text-gray-600">
                  <strong>Route:</strong> {route.join(" -> ")}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Trip Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Trip Started
                    </div>
                    <div className="text-sm text-gray-600">
                      {time} - {from}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Trip Completed
                    </div>
                    <div className="text-sm text-gray-600">
                      {arrived} - {to}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex flex-1 cursor-pointer items-center justify-center rounded-md bg-blue-600 py-3 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700">
                {" "}
                <FaDownload className="mr-2" /> Download Report
              </Button>
              <Button className="flex flex-1 cursor-pointer items-center justify-center rounded-md border border-gray-300 py-3 font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50">
                <FaShare className="mr-2" /> Share Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
