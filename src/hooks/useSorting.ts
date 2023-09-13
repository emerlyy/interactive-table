import { useState } from "react";
import { DataResponse, SortingDirection, SortingValue } from "../types";
import { sortData } from "../utilities";

export const useSorting = (data: DataResponse | undefined) => {
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

  let sortedData = data;
  if (data && sortingValue && sortingDirection) {
    sortedData = sortData(data, sortingValue, sortingDirection);
  }

  return {
    sortedData,
    sortingValue,
    sortingDirection,
    changeSorting
  };
}