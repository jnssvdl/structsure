import { DRH } from "@/types";
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

export default function DRHTable({ drhData }: { drhData: DRH[] }) {
  return (
    <Table>
      <TableCaption>Digital Rebound Hammer (DRH)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={2} className="text-center align-middle">
            LOCATION
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            LOCATION DESCRIPTION
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            MEMBER
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            TEST POINT
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            AVERAGE REBOUND NUMBER
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            AVERAGE COMPRESSIVE STRENGTH (MPA)
          </TableHead>
          <TableHead colSpan={2} className="text-center">
            REMARKS
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="text-center">REBOUND NUMBER</TableHead>
          <TableHead className="text-center">COMPRESSIVE STRENGTH</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drhData.map((test, index) => (
          <TableRow key={`${test.location}-${test.testPoint}-${index}`}>
            <TableCell className="text-center">{test.location}</TableCell>
            <TableCell className="text-center">
              {test.locationDescription}
            </TableCell>
            <TableCell className="text-center">{test.member}</TableCell>
            <TableCell className="text-center">{test.testPoint}</TableCell>
            <TableCell className="text-center">
              {test.averageReboundNumber}
            </TableCell>
            <TableCell className="text-center">
              {test.averageCompressiveStrengthMpa}
            </TableCell>
            <TableCell className="text-center">{test.remarks}</TableCell>
            <TableCell className="text-center">
              {test.compressiveStrength}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
