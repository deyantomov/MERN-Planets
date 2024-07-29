/* eslint-disable @typescript-eslint/no-explicit-any */

interface Column {
  key: string;
  title: string;
  thStyle: string;
  tdStyle: string;
  tdStyleAlt: string;
  render?: (value: any, row: any) => JSX.Element;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <table className="w-full table-auto">
      <thead className="text-center bg-primary">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className={col.thStyle}>
              {col.title.search("surface temperature") === -1 ? col.title : col.title + " °C"}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key} className={index % 2 !== 0 ? col.tdStyle : col.tdStyleAlt}>
                {col.render ? col.render(row[col.key], row) : row[col.key] !== undefined ? row[col.key].toString() : "N/A"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}