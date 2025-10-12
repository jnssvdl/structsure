import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DashboardTable({
  data,
}: {
  data: { building: string; remarks: string }[];
}) {
  return (
    <Table className="text-center">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">BUILDING</TableHead>
          <TableHead className="text-center">REMARKS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="break-words whitespace-normal">
              {row.building}
            </TableCell>
            <TableCell className="break-words whitespace-normal">
              {row.remarks}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
