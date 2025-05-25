import { UPV } from "@/types";
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

export default function UPVTable({ upvData }: { upvData: UPV[] }) {
  return (
    <Table>
      <TableCaption>Test Results</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={2} className="text-center align-middle">
            Location
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Location Description
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
        {upvData.map((test, index) => (
          <TableRow key={`${test.location}-${test.method}-${index}`}>
            <TableCell className="text-center">{test.location}</TableCell>
            <TableCell className="text-center">
              {test.locationDescription}
            </TableCell>
            <TableCell className="text-center">{test.member}</TableCell>
            <TableCell className="text-center">
              {test.compressiveStrength}
            </TableCell>
            <TableCell className="text-center">{test.velocity}</TableCell>
            <TableCell className="text-center">{test.method}</TableCell>
            <TableCell className="text-center">
              {test.concreteQuality}
            </TableCell>
            <TableCell className="text-center">{test.remarks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
