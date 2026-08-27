"use client";

import { PricingCards } from "@/components/PricingCards";
import { PrivateTaxCards } from "@/components/PrivateTaxCards";
import { useT } from "@/lib/i18n";

export function PackagesSection() {
  const t = useT();

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{
        // Donker navy linksonder dat naar rechts overloopt in royal blue,
        // met zachte radiale blauwe highlights en een heel subtiele cyaan gloed
        background: [
          "radial-gradient(900px 620px at 88% 32%, rgba(13, 76, 207, 0.50), transparent 70%)",
          "radial-gradient(520px 360px at 72% 12%, rgba(34, 211, 238, 0.08), transparent 70%)",
          "radial-gradient(640px 420px at 18% 88%, rgba(34, 211, 238, 0.05), transparent 70%)",
          "linear-gradient(105deg, #061B3A 0%, #0A2F66 55%, #0D4CCF 135%)",
        ].join(", "),
      }}
    >

      {/* Top edge - wave coming from white section above */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[100px] sm:h-[150px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1440 0 L1440 0 Q1440 200 1040 200 L0 200 L0 0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container relative z-[2] pt-16 md:pt-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            {t.packages.title}
          </h2>
          <p className="text-lg text-white/70">{t.packages.subtitle}</p>
        </div>

        <PricingCards />

        {/* Aangifte inkomstenbelasting voor particulieren */}
        <PrivateTaxCards />
      </div>

      {/* Bottom edge - curve on the left like Hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[100px] sm:h-[150px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L0 200 Q0 0 400 0 L1440 0 L1440 200 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
