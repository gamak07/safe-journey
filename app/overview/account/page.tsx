import React from "react";
import Header from "../../../features/account_page/Header";
import Breadcrum from "../../../features/account_page/Breadcrum";
import CurrentPlanDetails from "../../../features/account_page/CurrentPlanDetails";
import PremiumPlanBenefits from "../../../features/account_page/PremiumPlanBenefits";
import UsageStatistics from "../../../features/account_page/UsageStatistics";
import AccountVerificationStatus from "../../../features/account_page/AccountVerificationStatus";
import LoyaltyPoints from "../../../features/account_page/LoyaltyPoints";
import SubscriptionManagement from "../../../features/account_page/SubscriptionManagement";
import SupportAndHelp from "../../../features/account_page/SupportAndHelp";

export default function Account() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="px-6 py-6">
        <Breadcrum />
        <CurrentPlanDetails />
        <PremiumPlanBenefits />
        <UsageStatistics />
        <AccountVerificationStatus />
        <LoyaltyPoints />
        <SubscriptionManagement />
        <SupportAndHelp />
      </section>
    </main>
  );
}
