import Filter from "../../../features/report_page/Filter";
import Header from "../../../features/report_page/Header";
import TripHistory from "../../../features/report_page/TripHistory";

export default function ReportsPage() {
  return (
    <main>
      <Header />
      <Filter />
      <TripHistory />
    </main>
  );
}
