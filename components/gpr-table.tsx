import { GPRRecord } from "@/types/ultrasonic-pulse-velocity";
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

export default function GPRTable({ GPRRecords }: { GPRRecords: GPRRecord[] }) {
  return (
    <Table>
      <TableCaption>Ground Penetrating Radar (GPR)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={2} className="text-center align-middle">
            Scan ID
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Location
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Member
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Layer
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Material Guess
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Rebar Spacing (mm)
          </TableHead>
          <TableHead colSpan={1} className="text-center">
            Signal Clarity
          </TableHead>
          <TableHead colSpan={1} className="text-center">
            Rebar Condition
          </TableHead>
          <TableHead rowSpan={2} className="text-center align-middle">
            Remarks
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="text-xs">
            1 – Very Poor <br />
            2 – Poor <br />
            2 – Fair/Moderate <br />
            4 – Good <br />
            5 – Excellent <br />
          </TableHead>
          <TableHead className="text-xs">
            1 – Very Poor <br />
            2 – Poor <br />
            2 – Fair/Moderate <br />
            4 – Good <br />
            5 – Excellent <br />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {GPRRecords.map((record, index) => (
          <TableRow key={`${record.scanId}-${index}`}>
            <TableCell className="text-center">
              {record.scanId === 0 ? "none" : record.scanId}
            </TableCell>
            <TableCell className="text-center">{record.location}</TableCell>
            <TableCell className="text-center">{record.member}</TableCell>
            <TableCell className="text-center">{record.layer}</TableCell>
            <TableCell className="text-center">
              {record.materialGuess}
            </TableCell>
            <TableCell className="text-center">
              {record.rebarSpacingMm}
            </TableCell>
            <TableCell className="text-center">
              {record.signalClarity}
            </TableCell>
            <TableCell className="text-center">
              {record.rebarCondition}
            </TableCell>
            <TableCell className="text-center">{record.remarks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
