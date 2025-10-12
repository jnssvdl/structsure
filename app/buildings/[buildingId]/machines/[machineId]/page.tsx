import { notFound } from "next/navigation";
import { MACHINES } from "@/data/machines";
import { BUILDINGS } from "@/data/buildings";
import { DIGITAL_REBOUND_HAMMER } from "@/data/digital-rebound-hammer";
import { ULTRASONIC_PULSE_VELOCITY } from "@/data/ultrasonic-pulse-velocity";
import { GROUND_PENETRATING_RADAR } from "@/data/ground-penetrating-radar";
import UltrasonicPulseVelocityView from "./_components/ultrasonic-pulse-velocity/ultrasonic-pulse-velocity-view";
import GroundPenetratingRadarView from "./_components/ground-penetrating-radar/ground-penetrating-radar-view";
import DigitalReboundHammerView from "./_components/digital-rebound-hammer/digital-rebound-hammer-view";

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

export default async function BuildingMachinePage({
  params,
}: {
  params: Promise<{ machineId: string; buildingId: string }>;
}) {
  const { machineId, buildingId } = await params;

  if (machineId === "digital-rebound-hammer") {
    const data = DIGITAL_REBOUND_HAMMER.find(
      (d) => d.buildingId === buildingId,
    )!;
    return <DigitalReboundHammerView data={data} />;
  }

  if (machineId === "ultrasonic-pulse-velocity") {
    const data = ULTRASONIC_PULSE_VELOCITY.find(
      (d) => d.buildingId === buildingId,
    )!;
    return <UltrasonicPulseVelocityView data={data} />;
  }

  if (machineId === "ground-penetrating-radar") {
    const data = GROUND_PENETRATING_RADAR.find(
      (d) => d.buildingId === buildingId,
    )!;
    return <GroundPenetratingRadarView data={data} />;
  }

  return notFound();
}
