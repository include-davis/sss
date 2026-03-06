import HowCanYouJoin from '../_components/howcanyoujoin/howCanYouJoin';
import StructureWork from '../_components/structureWork/structurework';
import PastMissions from '../_components/pastMissions/pastMissions';

export default function Home() {
  return (
    <main>
        <HowCanYouJoin />
      <StructureWork />
      <PastMissions />
    </main>
  );
}