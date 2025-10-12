import DigitalReboundHammer from "./_components/digital-rebound-hammer";
import UltrasonicPulseVelocity from "./_components/ultrasonic-pulse-velocity";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col items-center py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard Analysis
        </h1>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Comprehensive view of all measurement metrics and their averages.
        </p>
      </div>
      <DigitalReboundHammer />
      <UltrasonicPulseVelocity />
    </>
  );
}
