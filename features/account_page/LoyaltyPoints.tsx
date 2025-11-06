import React from "react";
import Button from "../../ui/Button";

export default function LoyaltyPoints() {
  return (
    <div className="mb-6 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6 shadow-sm">
      <h3
        className="mb-4 text-lg font-semibold text-gray-900"
      >
        Rewards &amp; Loyalty Points
      </h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="mb-1 text-2xl font-bold text-purple-600">2,450</div>
          <div className="text-sm text-gray-600">Current Points</div>
        </div>
        <div className="text-center">
          <div className="mb-1 text-2xl font-bold text-green-600">340</div>
          <div className="text-sm text-gray-600">Earned This Month</div>
        </div>
        <div className="text-center">
          <div className="mb-1 text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Referrals Made</div>
        </div>
      </div>
      <div className="mt-4 border-t border-purple-200 pt-4">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:items-center justify-between">
          <span className="text-sm text-gray-700">
            Available Rewards: 5% discount on renewal
          </span>
          <Button className="!rounded-md cursor-pointer bg-purple-600 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-purple-700">
            Redeem Points
          </Button>
        </div>
      </div>
    </div>
  );
}
