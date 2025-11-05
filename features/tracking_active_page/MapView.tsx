import { FaMap } from "react-icons/fa";

export default function MapView() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
        <div className="flex items-center justify-center flex-col">
          <FaMap className="mb-3 text-4xl text-gray-400" />
          <p className="text-gray-500">Map View</p>
          <p className="text-sm text-gray-400">Real-time location tracking</p>
        </div>
      </div>
    </div>
  );
}
