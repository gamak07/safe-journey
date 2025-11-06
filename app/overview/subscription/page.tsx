import React from "react";
import Header from "../../../features/subscription_page/Header";
import Breadcrum from "../../../features/subscription_page/Breadcrum";
import PlanActions from "../../../features/subscription_page/PlanActions";

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="px-6 py-6">
        <Breadcrum />
        <PlanActions />
      </section>
    </main>
  );
}
