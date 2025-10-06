import { UPVRecord } from "@/types/ultrasonic-pulse-velocity";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UPVTable({ UPVRecords }: { UPVRecords: UPVRecord[] }) {
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
        {UPVRecords.map((test, index) => (
          <TableRow key={`${test.location}-${test.method}-${index}`}>
            <TableCell className="text-center">{test.location}</TableCell>
            <TableCell className="text-center">{test.member}</TableCell>
            <TableCell className="text-center">
              {test.compressiveStrengthMpa}
            </TableCell>
            <TableCell className="text-center">{test.velocityMs}</TableCell>
            <TableCell className="text-center">{test.method}</TableCell>
            <TableCell className="text-center">
              {test.concreteQualityRemarks}
            </TableCell>
            <TableCell className="text-center">
              {test.compressiveStrengthRemarks}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
