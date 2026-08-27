"use client";

import { useState } from "react";
import {
  ArrowRight,
  FileText,
  Globe2,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/lib/i18n";
import { PackageOrderModal } from "@/components/PackageOrderModal";

// Iconen per dienst, in dezelfde volgorde als t.privateTax.items
const SERVICE_ICONS: LucideIcon[] = [FileText, Users, Plane, Globe2];

export function PrivateTaxCards() {
  const t = useT();
  const p = t.privateTax;
  const [orderService, setOrderService] = useState<string | null>(null);

  return (
    <div className="mt-20 md:mt-24">
      {/* Kop */}
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#7FD8C6]">
          {p.badge}
        </span>
        <h3 className="text-2xl font-bold text-white md:text-3xl">{p.title}</h3>
        <p className="mt-3 text-lg text-white/70">{p.subtitle}</p>
      </div>

      {/* Diensten */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((service, index) => {
          const Icon = SERVICE_ICONS[index] ?? FileText;
          return (
            <div
              key={service.name}
              className="group flex flex-col rounded-[24px] border border-[#14375A]/[0.07] bg-white px-6 py-7 text-center shadow-[0_18px_50px_rgba(10,42,75,0.10),0_3px_10px_rgba(10,42,75,0.04)]"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-[16px] border"
                style={{
                  background: "linear-gradient(135deg, #F0F7FF 0%, #E8F4FF 100%)",
                  borderColor: "rgba(30, 130, 200, 0.08)",
                }}
              >
                <Icon
                  className="h-[22px] w-[22px] text-[#237EDC]"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h4 className="mt-4 text-[17px] font-extrabold leading-snug tracking-[-0.01em] text-[#102D4F]">
                {service.name}
              </h4>

              <p className="mx-auto mt-2 text-[13.5px] leading-[1.55] text-[#718095]">
                {service.description}
              </p>

              <div className="mt-5 text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#102B52]">
                €{service.price}
              </div>
              <div className="mt-1 text-[13px] font-semibold text-[#738196]">
                {p.period}
              </div>

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setOrderService(service.name)}
                  className="flex h-[46px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#E9F3FA] text-[14px] font-bold text-[#163C69] transition-colors hover:bg-[#DCEDF9] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#2598EB]/25"
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-white/55">{p.note}</p>

      <PackageOrderModal
        open={orderService !== null}
        onOpenChange={(open) => {
          if (!open) setOrderService(null);
        }}
        packageName={orderService ?? ""}
        titlePrefix={p.orderTitlePrefix}
        titleSuffix={p.orderTitleSuffix}
        waRequestLine={p.waRequestLine}
        waDirectMessage={p.waDirectMessage}
      />
    </div>
  );
}
