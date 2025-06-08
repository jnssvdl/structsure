import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OverallTable({
  data,
}: {
  data: { building: string; remarks: string }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary text-center align-middle">
            BUILDING
          </TableHead>
          <TableHead className="text-primary text-center align-middle">
            REMARKS
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="max-w-xs text-center break-words whitespace-normal">
              {row.building}
            </TableCell>
            <TableCell className="max-w-sm text-center break-words whitespace-normal">
              {row.remarks}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
