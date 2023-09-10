import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { SortingDirection, SortingValue } from '../../types';
import { sortData } from '../../utilities';
import AddElementForm, { FormInputs } from '../AddElementForm/AddElementForm';
import ClientPagination from '../ClientPagination/ClientPagination';
import DataTable from '../DataTable/DataTable';
import Loading from '../Loading/Loading';
import styles from './App.module.css';


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

  const [sortingValue, setSortingValue] = useState<SortingValue | null>(null);
  const [sortingDirection, setSortingDirection] = useState<SortingDirection | null>(null);

  const changeSorting = (value: SortingValue) => {
    if (!sortingValue || !sortingValue.includes(value)) {
      setSortingValue(value);
      setSortingDirection('asc');
    } else {
      setSortingDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    }
  }

  const addElement: SubmitHandler<FormInputs> = (element) => {
    response.unshift(element);
    setSortingValue(null);
    setSortingDirection(null);
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <h3>Error</h3>
  }

  if (!response) {
    return <h3>No data found</h3>
  }

  let showingData = response

  if (sortingValue && sortingDirection) {
    showingData = sortData(response, sortingValue, sortingDirection);
  }

  return (
    <main className={styles.app}>
      <AddElementForm onSubmit={addElement} />
      <ClientPagination data={showingData} dataPerPage={50}>
        <DataTable
          onSortingClick={changeSorting}
          sortingValue={sortingValue ?? undefined}
          sortingDirection={sortingDirection ?? undefined} />
      </ClientPagination>
    </main>
  )
}

export default App
