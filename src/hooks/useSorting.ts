import { useState } from "react";
import { DataResponse, SortingDirection, SortingValue } from "../types";
import { sortData } from "../utilities";

export const useSorting = (initialData: DataResponse) => {
  const [data, setData] = useState<DataResponse>(initialData)
  const [sortingValue, setSortingValue] = useState<SortingValue>(null);
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>(null);

  const changeSorting = (value: SortingValue) => {
    if (value === null) {
      setSortingValue(null);
      setSortingDirection(null);
      return;
    }

    if (!sortingValue || !sortingValue.includes(value)) {
      setSortingValue(value);
      setSortingDirection('asc');
    } else {
      setSortingDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    }
  }

  if (sortingValue && sortingDirection) {
    const sortedData = sortData(data, sortingValue, sortingDirection);
    setData(sortedData);
  }

  return {
    data,
    sortingValue,
    sortingDirection,
    changeSorting
  };
}