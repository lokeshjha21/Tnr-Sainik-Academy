import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Academy Photos & Training",
  description:
    "Browse TNR Sainik Academy's photo gallery — physical training, classroom sessions, parade practice, events and campus life at Bahadurpally, Hyderabad.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
