import { DataResponse, Item, SortingDirection, SortingValue } from "../../types";
import DataTableRow from "../DataTableRow/DataTableRow";
import SortingButton from "../SortingButton/SortingButton";
import styles from './DataTable.module.css';

interface DataTableProps {
  data?: DataResponse,
  sortingValue: SortingValue,
  sortingDirection: SortingDirection,
  onSortingClick: (sortingValue: SortingValue) => void,
  selectedItemId?: string,
  onItemSelect: (item: Item) => void
}

type Column = {
  label: string,
  value: SortingValue
}

const columns: Column[] = [
  {
    label: 'Id',
    value: 'id'
  },
  {
    label: 'First Name',
    value: 'firstName'
  },
  {
    label: 'Last Name',
    value: 'lastName'
  },
  {
    label: 'Email',
    value: 'email'
  },
  {
    label: "Phone",
    value: 'phone'
  },
]

const DataTable = ({ data, sortingValue = null, sortingDirection = null, onSortingClick, selectedItemId, onItemSelect }: DataTableProps) => {
  return (
    <table className={styles.dataTable}>
      <thead>
        <tr>
          {
            columns.map(
              item => {
                const isActive = item.value === sortingValue;
                return (
                  <th key={item.value} >
                    <SortingButton
                      label={item.label}
                      onButtonClick={() => onSortingClick(item.value)}
                      direction={isActive ? sortingDirection : null} />
                  </th>
                )
              }
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data?.map(item => {
            const isSelected = item.phone === selectedItemId;
            return (
              <DataTableRow
                key={item.phone}
                item={item}
                onSelect={() => onItemSelect(item)}
                styleClassName={isSelected ? styles.selected : undefined}
              />
            )
          })
        }
      </tbody>
    </table>
  )
}

export default DataTable;