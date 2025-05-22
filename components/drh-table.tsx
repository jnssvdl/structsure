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
      <TableCaption>Test Results</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>LOCATION</TableHead>
          <TableHead>LOCATION DESCRIPTION</TableHead>
          <TableHead>MEMBER</TableHead>
          <TableHead>TEST POINT</TableHead>
          <TableHead className="text-right">AVERAGE REBOUND NUMBER</TableHead>
          <TableHead className="text-right">
            AVERAGE COMPRESSIVE STRENGTH (MPA)
          </TableHead>
          <TableHead>REBOUND NUMBER</TableHead>
          <TableHead>COMPRESSIVE STRENGTH</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drhData.map((test, index) => (
          <TableRow key={`${test.location}-${test.testPoint}-${index}`}>
            <TableCell className="font-medium">{test.location}</TableCell>
            <TableCell>{test.locationDescription}</TableCell>
            <TableCell>{test.member}</TableCell>
            <TableCell>{test.testPoint}</TableCell>
            <TableCell className="text-right">
              {test.averageReboundNumber}
            </TableCell>
            <TableCell className="text-right">
              {test.averageCompressiveStrengthMpa}
            </TableCell>
            <TableCell>{test.remarks}</TableCell>
            <TableCell>{test.compressiveStrength}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
