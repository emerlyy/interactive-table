import { DataResponse, SortingDirection, SortingValue } from "../../types"

export const sortData = (data: DataResponse, sortingValue: NonNullable<SortingValue>, sortingDirection: NonNullable<SortingDirection>) => {
  if (sortingDirection === 'asc') {
    return data.sort((a, b) => {
      if (typeof a[sortingValue] === 'number') {
        return +a[sortingValue] - +b[sortingValue]
      } else return a[sortingValue].toString().localeCompare(b[sortingValue].toString())
    })
  }
  else {
    return data.sort((a, b) => {
      if (typeof a[sortingValue] === 'number') {
        return +b[sortingValue] - +a[sortingValue]
      } else return -1 * a[sortingValue].toString().localeCompare(b[sortingValue].toString())
    })
  }
}