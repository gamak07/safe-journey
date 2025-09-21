import React from "react";
import Button from "../../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 md:flex-row md:px-8 md:py-20">
      <div className="mb-8 flex-1 text-center md:mb-0 md:pr-12 md:text-left">
        <h1 className="font-poppins mb-6 text-4xl leading-tight font-bold text-white md:text-5xl">
          Safer Journeys for Everyone
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
          Advanced trip tracking, real-time safety alerts, and community-driven
          security reports to keep you protected on every journey.
        </p>
        <Button className="cursor-pointer rounded-md bg-white px-6 py-3 text-base font-semibold whitespace-nowrap text-blue-600 transition-colors hover:bg-blue-500 md:px-8 md:py-4 md:text-lg">
          Get Started Free
        </Button>
      </div>
      <div className="relative flex-1 h-[500px]">
        <Image
          className="absolute object-cover object-top "
          src="/hero-image.jpg"
          alt="Hero Image"
          fill
          quality={100}
        />
      </div>
    </section>
  );
}
