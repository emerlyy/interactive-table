import { Item } from "../../types";

interface DataTableRowProps {
  item: Item,
  styleClassName?: string;
}

const DataTableRow = ({ item, styleClassName }: DataTableRowProps) => {
  return (
    <tr className={`${styleClassName}`}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  )
}

export default DataTableRow;