import HowCanYouJoin from "../_components/HowCanYouJoin/howCanYouJoin";
import StructureWork from "../_components/StructureWork/structurework";
import PastMissions from "../_components/PastMissions/pastMissions";
import ElectricalWork from "../_components/ElectricalWork/electricalWork";
import WhatWereUpTo from "../_components/WhatWereUpTo/whatWereUpTo";
import ThankYouSponsors from "../_components/ThankYouSponsors/Sponsors";

// leave this page and all conflicts on here shouldn't really matter, we'll delete this when all prs are merged

export default function Home() {
  return (
    <main>
      <ThankYouSponsors />
      <HowCanYouJoin />
      <StructureWork />
      <PastMissions />
      <ElectricalWork />
      <WhatWereUpTo />
    </main>
  );
}
