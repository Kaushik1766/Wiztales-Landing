'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import BgVideo from "./components/BgVideo";
import Sponsors from "./components/Sponsors";
import PoweringCommunities from "./components/PoweringCommunities";
import BringEventAlive from "./components/BringEventAlive";
import { useEffect } from "react";
import Products from "./components/Products";
import OurMission from "./components/OurMission";
import CustomerReviews from "./components/CustomerReviews";
import News from "./components/News";
import WiztalesBento from "./components/WiztalesBento";

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
      <OurMission />
      <CustomerReviews />
      <News />
      <WiztalesBento />
    </div>
  );
}
