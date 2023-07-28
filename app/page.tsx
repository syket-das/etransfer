import Banner from '@/components/project/Banner';
import LiveRate from '@/components/project/LiveRate';
import TrackConvertion from '@/components/project/track-convertion/TrackConvertion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="px-8">
      <Banner />

      <div className="mt-12">
        <TrackConvertion />
      </div>

      <div className="my-12">
        <LiveRate />
      </div>
    </main>
  );
}
