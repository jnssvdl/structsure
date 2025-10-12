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
import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";

export default function DigitalReboundHammerTable({
  table,
}: {
  table: DigitalReboundHammerType["table"];
}) {
  return (
    <Table>
      <TableCaption>Digital Rebound Hammer (DRH)z</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={5} className="text-center"></TableHead>
          <TableHead colSpan={2} className="text-center">
            REMARKS
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="text-center align-middle">LOCATION</TableHead>
          <TableHead className="text-center align-middle">MEMBER</TableHead>
          <TableHead className="text-center align-middle">TEST POINT</TableHead>
          <TableHead className="text-center align-middle">
            AVERAGE REBOUND NUMBER
          </TableHead>
          <TableHead className="text-center align-middle">
            AVERAGE COMPRESSIVE STRENGTH (MPA)
          </TableHead>
          <TableHead className="text-center">REBOUND NUMBER</TableHead>
          <TableHead className="text-center">COMPRESSIVE STRENGTH</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.map((row, index) => (
          <TableRow key={`${index}`}>
            <TableCell className="text-center">{row.location}</TableCell>
            <TableCell className="text-center">{row.member}</TableCell>
            <TableCell className="text-center">{row.testPoint}</TableCell>
            <TableCell className="text-center">
              {row.averageReboundNumber}
            </TableCell>
            <TableCell className="text-center">
              {row.averageCompressiveStrength}
            </TableCell>
            <TableCell className="text-center">
              {row.remarks.reboundNumber}
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
