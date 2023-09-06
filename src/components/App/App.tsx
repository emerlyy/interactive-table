import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { SortingDirection, SortingValue } from '../../types';
import { sortData } from '../../utilities';
import ClientPagination from '../ClientPagination/ClientPagination';
import DataTable from '../DataTable/DataTable';
import './App.css';

const fetchData = async () => {
  const { data } = await axios.get('http://www.filltext.com/?rows=300&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
  return data;
}

function App() {
  const { data: response, isLoading, isError } = useQuery(
    'data',
    fetchData,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );

  const [sortingValue, setSortingValue] = useState<SortingValue | 'none'>('none');
  const [sortingDirection, setSortingDirection] = useState<SortingDirection | 'none'>('none');

  const changeSorting = (value: SortingValue) => {
    if (!sortingValue.includes(value)) {
      setSortingValue(value);
      setSortingDirection('asc');
    } else {
      setSortingDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    }
  }

  if (isLoading) {
    return <h3>Loading..</h3>
  }

  if (isError) {
    return <h3>Error</h3>
  }

  if (!response) {
    return <h3>No data found</h3>
  }

  let showingData = response

  if (sortingValue !== 'none' && sortingDirection !== 'none') {
    showingData = sortData(response, sortingValue, sortingDirection);
  }

  return (
    <main>
      <ClientPagination data={showingData} dataPerPage={50}>
        <DataTable onSortingClick={changeSorting} />
      </ClientPagination>
    </main>
  )
}

export default App
