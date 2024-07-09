'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import BgVideo from "./components/BgVideo";
import Sponsors from "./components/Sponsors";
import PoweringCommunities from "./components/PoweringCommunities";
import BringEventAlive from "./components/BringEventAlive";
import { useEffect } from "react";
import Products from "./components/Products";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll()
      }

    )()
  }, [])
  return (
    <div>
      <Navbar />
      <BgVideo />
      <Sponsors />
      <PoweringCommunities />
      <BringEventAlive />
      <Products />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

    </div>
  );
}
