import OverviewLayoutNavbar from "../../components/OverviewLayoutNavbar";

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <OverviewLayoutNavbar />
    </div>
  );
}
