import Navbar from "../components/Navbar";
import Hero from "../features/homepage/Hero";
import HowItWork from "../features/homepage/HowItWork";

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
