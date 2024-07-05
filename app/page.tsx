import Image from "next/image";
import Navbar from "./components/Navbar";
import BgVideo from "./components/BgVideo";
import Sponsors from "./components/Sponsors";
import PoweringCommunities from "./components/PoweringCommunities";
import BringEventAlive from "./components/BringEventAlive";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BgVideo />
      <Sponsors />
      <PoweringCommunities />
      <BringEventAlive />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

    </div>
  );
}
