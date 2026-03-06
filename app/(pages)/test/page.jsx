import HowCanYouJoin from "../_components/howCanYouJoin/howCanYouJoin";
import StructureWork from "../_components/structureWork/structurework";
import PastMissions from "../_components/pastMissions/pastMissions";

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
