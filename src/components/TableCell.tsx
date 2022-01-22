import React, { useRef } from "react";
import useAnimate from "../hooks/useAnimations";

export interface ITableCellProps {
  value: number
}

const TableCell = React.memo(({ value }: ITableCellProps) => {
  const prevRef = useRef(value);
  const animate = useAnimate(prevRef.current > value ? 'animate-red' : 'animate-green', 2500, [value]);

  return (
    <td className={animate}>{value.toFixed(8)}</td>
  );
});

export default TableCell;