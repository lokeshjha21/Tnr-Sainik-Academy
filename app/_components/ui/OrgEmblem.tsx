import React from "react";
import Image from "next/image";

interface OrgEmblemProps {
  slug: string;
  size?: number;
}

const logoMap: Record<string, string> = {
  "indian-army": "/images/logos/indian-army.png",
  "indian-air-force": "/images/logos/indian-air-force.png",
  "indian-navy": "/images/logos/indian-navy.png",
  "nda-na": "/images/logos/nda-na.png",
  "telangana-police": "/images/logos/telangana-police.png",
  "ssc-gd": "/images/logos/ssc.png",
  "crpf": "/images/logos/crpf.png",
  "bsf": "/images/logos/bsf.png",
  "cisf": "/images/logos/cisf.png",
  "ssc-cgl": "/images/logos/ssc.png",
  "ssc-chsl": "/images/logos/ssc.png",
  "ssc-mts": "/images/logos/ssc.png",
  "rrb-group-d": "/images/logos/indian-railways.png",
  "rrb-ntpc": "/images/logos/indian-railways.png",
  "tspsc": "/images/logos/tspsc.png",
  "fire-fighter": "/images/logos/telangana-police.png",
  "warder": "/images/logos/tspsc.png",
  "spf-armed-reserve": "/images/logos/telangana-police.png",
  "security-guard": "/images/logos/cisf.png",
};

export default function OrgEmblem({ slug, size = 56 }: OrgEmblemProps) {
  const imgSrc = logoMap[slug] || "/images/logos/indian-army.png";

  return (
    <div
      style={{ width: size, height: size }}
      className="relative mx-auto flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
    >
      <Image
        src={imgSrc}
        alt={`${slug} emblem`}
        fill
        loading="lazy"
        quality={80}
        className="object-contain"
        sizes={`${size}px`}
      />
    </div>
  );
}
