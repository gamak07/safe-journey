import ActionButtons from "../../../features/tracking_active_page/ActionButtons";
import ContactsNotified from "../../../features/tracking_active_page/ContactsNotified";
import MapView from "../../../features/tracking_active_page/MapView";
import MiniDashboard from "../../../features/tracking_active_page/MiniDashboard";

export default function Active() {
  return (
    <main className="px-6 py-8">
      <div className="space-y-6">
        <MiniDashboard />
        <MapView />
        <ActionButtons />
        <ContactsNotified />
      </div>
    </main>
  );
}
