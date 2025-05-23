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
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[1000px]">
        <TableCaption>Test Results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              LOCATION
            </TableHead>
            <TableHead className="max-w-[200px] text-center break-words whitespace-normal">
              LOCATION DESCRIPTION
            </TableHead>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              MEMBER
            </TableHead>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              TEST POINT
            </TableHead>
            <TableHead className="max-w-[180px] text-center break-words whitespace-normal">
              AVERAGE REBOUND NUMBER
            </TableHead>
            <TableHead className="max-w-[220px] text-center break-words whitespace-normal">
              AVERAGE COMPRESSIVE STRENGTH (MPA)
            </TableHead>
            <TableHead className="max-w-[180px] text-center break-words whitespace-normal">
              REBOUND NUMBER
            </TableHead>
            <TableHead className="max-w-[200px] text-center break-words whitespace-normal">
              COMPRESSIVE STRENGTH
            </TableHead>
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
    </div>
  );
}
