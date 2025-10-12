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
          <TableHead className="text-center align-middle">SCAN ID</TableHead>
          <TableHead className="text-center align-middle">LOCATION</TableHead>
          <TableHead className="text-center align-middle">MEMBER</TableHead>
          <TableHead className="text-center align-middle">LAYER</TableHead>
          <TableHead className="text-center align-middle">
            MATERIAL GUESS
          </TableHead>
          <TableHead className="text-center align-middle">
            REBAR SPACING (mm)
          </TableHead>
          <TableHead className="text-center">SIGNAL CLARITY</TableHead>
          <TableHead className="text-center">REBAR CONDITION</TableHead>
          <TableHead className="text-center align-middle">REMARKS</TableHead>
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
            <TableCell className="text-center break-words whitespace-normal">
              {row.remarks}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
