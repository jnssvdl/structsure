import { Header } from "@/components/header";
import { OverallChart } from "@/components/overall-chart";
import { OverallTable } from "@/components/overall-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DRHOverallRemarks,
  overallAverageCompressiveStrength,
  overallAverageCompressiveStrengthUPV,
  overallAverageReboudNumber,
  overallAverageVelocity,
  UPVOverallRemarks,
} from "@/data/overall";

export default function OverallPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Overall Analysis
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive view of all measurement metrics and their averages
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                Digital Rebound Hammer (DRH)
              </h2>

              <Card>
                <CardHeader>
                  <CardTitle>Rebound Number Analysis</CardTitle>
                  <CardDescription>
                    Average rebound number measurements across all buildings
                    using Digital Rebound Hammer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallChart data={overallAverageReboudNumber} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compressive Strength Analysis</CardTitle>
                  <CardDescription>
                    Average compressive strength measurements across all
                    buildings using Digital Rebound Hammer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallChart data={overallAverageCompressiveStrength} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Building Remarks</CardTitle>
                  <CardDescription>
                    Overview of remarks for each building in the DRH
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallTable data={DRHOverallRemarks} />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                Ultrasonic Pulse Velocity (UPV)
              </h2>

              <Card>
                <CardHeader>
                  <CardTitle>Velocity Analysis</CardTitle>
                  <CardDescription>
                    Average velocity measurements across all buildings using
                    Ultrasonic Pulse Velocity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallChart data={overallAverageVelocity} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compressive Strength Analysis</CardTitle>
                  <CardDescription>
                    Average compressive strength measurements across all
                    buildings using Ultrasonic Pulse Velocity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallChart data={overallAverageCompressiveStrengthUPV} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Building Remarks</CardTitle>
                  <CardDescription>
                    Overview of remarks for each building in the UPV
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OverallTable data={UPVOverallRemarks} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
