"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Handshake,
  MonitorCheck,
  Settings2,
  UserRound,
} from "lucide-react";
import { SOCIALS } from "@/lib/constants";
import { useT } from "@/lib/i18n";

// =============================================================================
// USP PILLS
// =============================================================================
function UspPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="inline-flex h-11 items-center gap-2 rounded-full border border-[#DCEAF5] bg-white px-4 text-sm font-medium text-[#334A62]"
      style={{ boxShadow: "0 5px 18px rgba(25, 70, 105, 0.045)" }}
    >
      <span className="text-[#18B99C]">{icon}</span>
      {text}
    </div>
  );
}

// =============================================================================
// MONEYBIRD SAMENWERKING VISUAL
// Afbeelding: laptop en telefoon met online administratie-overzicht (Moneybird).
// =============================================================================
function MoneybirdVisual() {
  const t = useT();

  return (
    <Image
      src="/moneybird-overzicht.png"
      alt={t.why.imageAlt}
      width={1536}
      height={1024}
      sizes="(max-width: 1024px) 100vw, 720px"
      className="w-full"
    />
  );
}

// =============================================================================
// DE 3 STAPPEN
// Statische proces-uitleg: alle stappen zijn "compleet" zichtbaar.
// =============================================================================
// Stijl per stap; de teksten komen uit de vertalingen (lib/translations.ts)
const STEP_STYLES = [
  { icon: Handshake, numberColor: "#249BF4", featured: false },
  { icon: Settings2, numberColor: "#22CDAE", featured: true },
  { icon: MonitorCheck, numberColor: "#249BF4", featured: false },
];

function StepIcon({ icon: Icon, featured }: { icon: typeof Handshake; featured: boolean }) {
  return (
    <div
      className={`flex h-[58px] w-[58px] items-center justify-center rounded-[17px] text-white ${
        featured ? "ring-4 ring-[#22CDAE]/15" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #249BF4, #22CDAE)",
        boxShadow: "0 10px 26px rgba(34, 155, 208, 0.16)",
      }}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function StepsDesktop() {
  const t = useT();

  return (
    <div className="relative mt-20 hidden md:block">
      {/* Connector: dunne lijn met gradient (proces-uitleg, geen progress bar) */}
      <div className="absolute left-[16.67%] right-[16.67%] top-[57px] h-[2px] bg-[#DFEAF2]">
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(90deg, #249DF3, #21CBAF)" }}
        />
      </div>

      <div className="relative grid grid-cols-3 gap-8">
        {t.why.steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div
              className="mb-2 text-sm font-extrabold tracking-[0.08em]"
              style={{ color: STEP_STYLES[index].numberColor }}
            >
              {step.number}
            </div>
            <div className="relative z-10">
              <StepIcon icon={STEP_STYLES[index].icon} featured={STEP_STYLES[index].featured} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#102A4A]">{step.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[#344B63]">{step.subtitle}</p>
            <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-[#65778A]">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepsMobile() {
  const t = useT();

  return (
    <div className="relative mt-14 md:hidden">
      {/* Verticale connector */}
      <div className="absolute bottom-8 left-[28px] top-8 w-[2px] bg-[#DFEAF2]">
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(180deg, #249DF3, #21CBAF)" }}
        />
      </div>

      <div className="relative space-y-8">
        {t.why.steps.map((step, index) => (
          <div key={step.number} className="flex gap-5">
            <div className="relative z-10 shrink-0">
              <StepIcon icon={STEP_STYLES[index].icon} featured={STEP_STYLES[index].featured} />
            </div>
            <div className="pt-1">
              <div
                className="text-xs font-extrabold tracking-[0.08em]"
                style={{ color: STEP_STYLES[index].numberColor }}
              >
                {step.number}
              </div>
              <h3 className="mt-0.5 text-lg font-bold text-[#102A4A]">{step.title}</h3>
              <p className="mt-0.5 text-sm font-semibold text-[#344B63]">{step.subtitle}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#65778A]">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION - "Zo starten we samen"
// Kernboodschap: jij houdt overzicht in Moneybird, DRFA zorgt dat je
// administratie goed staat en blijft kloppen.
// =============================================================================
export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 pb-20 pt-24 md:px-8 md:pb-[95px] md:pt-[110px]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Bovenste gedeelte: tekst links, Moneybird visual rechts */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Links: tekst en CTA's */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#102A4A] md:text-[48px] lg:text-[54px]">
              {t.why.titlePre}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #269CF4 0%, #22CDAE 100%)" }}
              >
                {t.why.titleGradient}
              </span>
            </h2>

            <p className="mt-5 text-lg leading-[1.55] text-[#344B63] [font-weight:650]">
              {t.why.lead}
            </p>

            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.75] text-[#65778A] md:text-[17px]">
              {t.why.intro}
            </p>

            {/* USP pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              <UspPill icon={<Handshake className="h-4 w-4" />} text={t.why.pills[0]} />
              <UspPill icon={<Settings2 className="h-4 w-4" />} text={t.why.pills[1]} />
              <UspPill icon={<UserRound className="h-4 w-4" />} text={t.why.pills[2]} />
            </div>

            {/* CTA's */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-[15px] px-[26px] font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-105"
                style={{ background: "linear-gradient(90deg, #249BF4, #20CDA9)" }}
              >
                {t.why.ctaPlan}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#pakketten"
                className="inline-flex h-[54px] items-center justify-center rounded-[15px] border-[1.5px] border-[#BFD2E2] bg-white/60 px-[26px] font-semibold text-[#174A6D] transition-all duration-300 hover:border-[#249BF4] hover:bg-white"
              >
                {t.why.ctaPackages}
              </Link>
            </div>

            {/* Trustline voor bestaande gebruikers van Moneybird, e-boekhouden.nl of Jortt */}
            <p className="mt-5 flex items-center gap-1.5 text-[13px] text-[#73869A]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#18B99C]" />
              {t.why.trustline}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-[13px] text-[#73869A]">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#18B99C]" />
              <a
                href={SOCIALS.moneybirdExperts}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#BFD2E2] underline-offset-2 transition-colors hover:text-[#249BF4]"
              >
                {t.why.expertsLine}
              </a>
            </p>
          </div>

          {/* Rechts: Moneybird samenwerking visual */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <MoneybirdVisual />
          </div>
        </div>

        {/* Onderin: de drie stappen */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <StepsDesktop />
          <StepsMobile />
        </div>
      </div>
    </section>
  );
}
