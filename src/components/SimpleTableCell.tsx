import React from "react";

export interface ISimpleTableCellProps {
  value: string
}

const TableCell = React.memo(({ value }: ISimpleTableCellProps) => {
  return (
    <td>{value}</td>
  );
});

export default TableCell;