import { DataResponse, SortingValue } from "../../types";
import DataTableRow from "../DataTableRow/DataTableRow";

interface DataTableProps {
    data?: DataResponse,
    onSortingClick: (sortingValue: SortingValue) => void
}

const columns: SortingValue[] = ['id', 'firstName', 'lastName', 'email', 'phone'];

const DataTable = ({ data, onSortingClick }: DataTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(item => <th key={item}>
                        <button onClick={() => onSortingClick(item)}>
                            {item}
                        </button>
                    </th>)}
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data?.map(item => <DataTableRow key={item.phone} item={item} />)}
            </tbody>
        </table>
    )
}

export default DataTable;