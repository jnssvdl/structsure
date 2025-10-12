import { notFound } from "next/navigation";
import { MACHINES } from "@/data/machines";
import { BUILDINGS } from "@/data/buildings";
import { DIGITAL_REBOUND_HAMMER } from "@/data/digital-rebound-hammer";
import { ULTRASONIC_PULSE_VELOCITY } from "@/data/ultrasonic-pulse-velocity";
import { GROUND_PENETRATING_RADAR } from "@/data/ground-penetrating-radar";
import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";
import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";
import UltrasonicPulseVelocityPage from "./_components/ultrasonic-pulse-velocity/page";
import GroundPenetratingRadarPage from "./_components/ground-penetrating-radar/page";
import DigitalReboundHammerPage from "./_components/digital-rebound-hammer/page";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = [];

  for (const machine of MACHINES) {
    for (const building of BUILDINGS) {
      params.push({
        machineId: machine.id,
        buildingId: building.id,
      });
    }
  }
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ machineId: string; buildingId: string }>;
}) {
  const { machineId, buildingId } = await params;

  const data = [
    ...DIGITAL_REBOUND_HAMMER,
    ...ULTRASONIC_PULSE_VELOCITY,
    ...GROUND_PENETRATING_RADAR,
  ].find((d) => d.machineId === machineId && d.buildingId === buildingId);

  if (machineId === "digital-rebound-hammer") {
    return <DigitalReboundHammerPage data={data as DigitalReboundHammerType} />;
  }

  if (machineId === "ultrasonic-pulse-velocity") {
    return (
      <UltrasonicPulseVelocityPage data={data as UltrasonicPulseVelocityType} />
    );
  }

  if (machineId === "ground-penetrating-radar") {
    return (
      <GroundPenetratingRadarPage data={data as GroundPenetratingRadarType} />
    );
  }

  return notFound();
}
