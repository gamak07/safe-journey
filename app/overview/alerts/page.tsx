import AlertHistory from "../../../features/alert_page/AlertHistory";
import AlertSettings from "../../../features/alert_page/AlertSettings";
import Header from "../../../features/alert_page/Header";
import RecentAlerts from "../../../features/alert_page/RecentAlerts";

export default function AlertsPage() {
  return (
    <main>
      <Header />
      <section className="p-6">
        <RecentAlerts />
        <AlertHistory />
        <AlertSettings />
      </section>
    </main>
  );
}
