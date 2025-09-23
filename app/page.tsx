import Navbar from "../components/Navbar";
import Hero from "../features/landing_page/Hero";
import HowItWork from "../features/landing_page/HowItWork";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
     <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <Navbar />
      <Hero />
      <HowItWork />
     </div>
    </main>
  );
}
