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
      <TableCaption>Ultrasonic Pulse Velocity</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={5}></TableHead>
          <TableHead colSpan={2} className="text-center">
            REMARKS
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="text-center align-middle">LOCATION</TableHead>
          <TableHead className="text-center align-middle">MEMBER</TableHead>
          <TableHead className="text-center align-middle">
            COMPRESSIVE STRENGTH
          </TableHead>
          <TableHead className="text-center align-middle">
            VELOCITY (m/s)
          </TableHead>
          <TableHead className="text-center align-middle">METHOD</TableHead>
          <TableHead className="text-center">QUALITY</TableHead>
          <TableHead className="text-center">COMPRESSIVE STRENGTH</TableHead>
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
