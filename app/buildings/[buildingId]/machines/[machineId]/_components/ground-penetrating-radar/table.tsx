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
import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";

export default function GroundPenetratingRadarTable({
  table,
}: {
  table: GroundPenetratingRadarType["table"];
}) {
  return (
    <Table>
      <TableCaption>Ground Penetrating Radar</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center align-middle">Scan ID</TableHead>
          <TableHead className="text-center align-middle">Location</TableHead>
          <TableHead className="text-center align-middle">Member</TableHead>
          <TableHead className="text-center align-middle">Layer</TableHead>
          <TableHead className="text-center align-middle">
            Material Guess
          </TableHead>
          <TableHead className="text-center align-middle">
            Rebar Spacing (mm)
          </TableHead>
          <TableHead className="text-center">Signal Clarity</TableHead>
          <TableHead className="text-center">Rebar Condition</TableHead>
          <TableHead className="text-center align-middle">Remarks</TableHead>
        </TableRow>
        <TableRow></TableRow>
      </TableHeader>
      <TableBody>
        {table.map((row, index) => (
          <TableRow key={`${index}`}>
            <TableCell className="text-center">
              {row.scanId === 0 ? "none" : row.scanId}
            </TableCell>
            <TableCell className="text-center">{row.location}</TableCell>
            <TableCell className="text-center">{row.member}</TableCell>
            <TableCell className="text-center">{row.layer}</TableCell>
            <TableCell className="text-center">{row.materialGuess}</TableCell>
            <TableCell className="text-center">{row.rebarSpacing}</TableCell>
            <TableCell className="text-center">{row.signalClarity}</TableCell>
            <TableCell className="text-center">{row.rebarCondition}</TableCell>
            <TableCell className="text-center">{row.remarks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
