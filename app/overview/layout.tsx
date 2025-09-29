import OverviewLayoutNavbar from "../../components/OverviewLayoutNavbar";

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 max-w-[1440px] mx-auto">
      {children}
      <OverviewLayoutNavbar />
    </div>
  );
}
