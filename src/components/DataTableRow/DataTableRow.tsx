import { Item } from "../../types";

interface DataTableRowProps {
    item: Item;
}

const DataTableRow = ({ item }: DataTableRowProps) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    )
}

export default DataTableRow;