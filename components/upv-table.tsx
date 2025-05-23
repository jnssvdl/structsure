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
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[1000px]">
        <TableCaption>Test Results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              Location
            </TableHead>
            <TableHead className="max-w-[200px] text-center break-words whitespace-normal">
              Location Description
            </TableHead>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              Member
            </TableHead>
            <TableHead className="max-w-[150px] text-center break-words whitespace-normal">
              Compressive Strength
            </TableHead>
            <TableHead className="max-w-[180px] text-center break-words whitespace-normal">
              Velocity (m/s)
            </TableHead>
            <TableHead className="max-w-[220px] text-center break-words whitespace-normal">
              METHOD
            </TableHead>
            <TableHead className="max-w-[180px] text-center break-words whitespace-normal">
              Concrete Quality
            </TableHead>
            <TableHead className="max-w-[200px] text-center break-words whitespace-normal">
              Compressive Strength
            </TableHead>
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
    </div>
  );
}
