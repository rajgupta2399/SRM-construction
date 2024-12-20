"use client";

import NumberTicker from "@/components/ui/number-ticker";
import RetroGrid from "@/components/ui/retro-grid";

export function RetroGridDemo() {
  const stats = [
    { value: 1545, label: "CLIENTS" },
    { value: 1275, label: "PROJECTS" },
    { value: 978, label: "REPAIRING" },
    { value: 50, label: "AWARDS" },
  ];

  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 bg-[#121212] rounded-2xl shadow-md overflow-hidden sm:mx-12 mx-6 sm:h-[150px] h-[300px] border">
      {/* Retro Animated Grid */}
      {/* <RetroGrid className="absolute inset-0 z-0" /> */}

      {/* Stats Content */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative z-10 flex flex-col items-center justify-center text-center"
        >
          <span className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]">
            <NumberTicker value={stat.value} />
          </span>
          <span className="mt-2 text-sm font-medium uppercase text-gray-400">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
