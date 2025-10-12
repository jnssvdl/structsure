import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  //   TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import React from "react";

export default function UltrasonicPulseVelocityTable({
  table,
}: {
  table: UltrasonicPulseVelocityType["table"];
}) {
  return (
    <Table>
      <TableCaption>Ultrasonic Pulse Velocity (UPV)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={2} className="text-center align-middle">
            Location
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Member
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Compressive Strength
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Velocity (m/s)
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            METHOD
          </TableHead>
          <TableHead colSpan={2} className="text-center">
            Remarks
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="text-center">Quality</TableHead>
          <TableHead className="text-center">Compressive Strength</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.map((row, index) => (
          <TableRow key={`${row.location}-${row.method}-${index}`}>
            <TableCell className="text-center">{row.location}</TableCell>
            <TableCell className="text-center">{row.member}</TableCell>
            <TableCell className="text-center">
              {row.compressiveStrength}
            </TableCell>
            <TableCell className="text-center">{row.velocity}</TableCell>
            <TableCell className="text-center">{row.method}</TableCell>
            <TableCell className="text-center">
              {row.remarks.concreteQuality}
            </TableCell>
            <TableCell className="text-center">
              {row.remarks.compressiveStrength}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
