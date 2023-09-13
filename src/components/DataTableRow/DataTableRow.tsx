import { MouseEventHandler } from "react";
import { Item } from "../../types";

interface DataTableRowProps {
  item: Item,
  styleClassName?: string,
  onSelect: MouseEventHandler<HTMLTableRowElement>
}

const DataTableRow = ({ item, styleClassName, onSelect }: DataTableRowProps) => {
  return (
    <tr className={styleClassName} onClick={onSelect}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  )
}

export default DataTableRow;