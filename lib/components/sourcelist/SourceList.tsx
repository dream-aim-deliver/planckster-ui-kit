import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface SourceData {
  id: string;
  name: string;
  protocol: string;
  lfn: string;
  dateCreated: string;
}

interface SourceListProps {
  sources: SourceData[];
  title: string;
  enableSelection?: boolean;
  onSelectionChange?: (selectedIds: Record<string, boolean>) => void;
}

const SourceList: React.FC<SourceListProps> = ({
  sources,
  title,
  enableSelection = false,
  onSelectionChange,
}) => {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [globalFilter, setGlobalFilter] = useState("");

  const data = useMemo(() => sources, [sources]);

  const columns = useMemo(() => {
    const baseColumns: ColumnDef<SourceData>[] = [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "protocol",
        header: "Protocol",
      },
      {
        accessorKey: "lfn",
        header: "LFN",
      },
      {
        accessorKey: "dateCreated",
        header: "Date Created",
      },
    ];

    if (enableSelection) {
      return [
        {
          id: "selection",
          header: ({ table }) => (
            <input
              type="checkbox"
              checked={
                table.getPreFilteredRowModel().rows.length > 0 &&
                table
                  .getPreFilteredRowModel()
                  .rows.every((row) => selectedRows[row.id])
              }
              onChange={(e) => {
                const isChecked = e.target.checked;
                const newSelectedRows: Record<string, boolean> = {};
                table.getPreFilteredRowModel().rows.forEach((row) => {
                  newSelectedRows[row.id] = isChecked;
                });
                setSelectedRows(newSelectedRows);
                onSelectionChange && onSelectionChange(newSelectedRows);
              }}
            />
          ),
          cell: ({ row }) => (
            <input
              type="checkbox"
              checked={!!selectedRows[row.id]}
              onChange={() => {
                const newSelectedRows = {
                  ...selectedRows,
                  [row.id]: !selectedRows[row.id],
                };
                setSelectedRows(newSelectedRows);
                onSelectionChange && onSelectionChange(newSelectedRows);
              }}
            />
          ),
          size: 40,
        },
        ...baseColumns,
      ];
    }

    return baseColumns;
  }, [selectedRows, enableSelection, onSelectionChange]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="text-center font-bold text-[#003366] bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3">
          {title}
        </div>
        <div className="flex justify-end mb-2">
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Sources"
              className="block p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SourceList;
