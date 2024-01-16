import BottomNavigation from '@/components/navigation/BottomNavigation';
import TopNavigation from '@/components/navigation/TopNavigation';
import Mainsection from '@/components/section/Mainsection';

export default function Home() {
  return (
    <main className="h-screen">
      <TopNavigation />
      <Mainsection />
      <BottomNavigation />
    </main>
  );
}
