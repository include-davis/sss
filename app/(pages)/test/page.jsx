import Navbar from "../../_components/Navbar/Nav.jsx";
export default function Page() {
    return (
      <main>
        <Navbar
        logoSrc="/favicon.png"
        logoAlt="Space and Satellite Systems"
        pages={[
          { label: "Home", href: "/" },
          { label: "Missions", href: "/missions" },
          { label: "Teams", href: "/teams" },
          { label: "Sponsor Us", href: "/sponsor" },
          { label: "Join Us", href: "/join" },
        ]}
        />
      </main>
    );
  }
import HowCanYouJoin from "../_components/HowCanYouJoin/howCanYouJoin.jsx";
import StructureWork from "../_components/StructureWork/structurework.jsx";
import PastMissions from "../_components/PastMissions/pastMissions.jsx";

// leave this page and all conflicts on here shouldn't really matter, we'll delete this when all prs are merged

export default function Home() {
  return (
    <main>
      <HowCanYouJoin />
      <StructureWork />
      <PastMissions />
    </main>
  );
}
