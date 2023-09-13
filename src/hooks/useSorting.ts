import { useState } from "react";
import { SortingDirection, SortingValue } from "../types";

export const useSorting = () => {
  const [sortingValue, setSortingValue] = useState<SortingValue | null>(null);
  const [sortingDirection, setSortingDirection] = useState<SortingDirection | null>(null);

  const changeSorting = (value: SortingValue | null) => {
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

  return {
    sortingValue,
    sortingDirection,
    changeSorting
  };
}