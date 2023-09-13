import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSorting } from '../../hooks/useSorting';
import { useToggle } from '../../hooks/useToggle';
import { DataResponse, Item } from '../../types';
import Button from '../Button/Button';
import ClientPagination from '../ClientPagination/ClientPagination';
import CreateElementForm, { FormInputs } from '../CreateElementForm/CreateElementForm';
import DataTable from '../DataTable/DataTable';
import Loading from '../Loading/Loading';
import Overlay from '../Overlay/Overlay';
import UserInfo from '../UserInfo/UserInfo';
import styles from './App.module.css';

const fetchData = async () => {
  const { data } = await axios.get('http://www.filltext.com/?rows=300&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
  return data;
}

function App() {
  const { data: response, isLoading, isError } = useQuery<DataResponse>(
    'data',
    fetchData,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );

  const { sortedData: data, sortingValue, sortingDirection, changeSorting } = useSorting(response);
  const [isFormActive, toggleForm, setToggleForm] = useToggle();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const createElement: SubmitHandler<FormInputs> = (element: Item) => {
    data?.unshift(element);
    changeSorting(null)
    setToggleForm(false);
  }

  const handleItemSelect = (item: Item) => {
    setSelectedItem(item)
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <h3>Error</h3>
  }

  if (!data) {
    return <h3>No data found</h3>
  }

  return (
    <main className={styles.app}>
      <div>
        <Button onClick={toggleForm}>Add element</Button>
        <Overlay isOpen={isFormActive}>
          <CreateElementForm onSubmit={createElement} onClose={toggleForm} />
        </Overlay>
        <ClientPagination data={data} dataPerPage={16}>
          <DataTable
            sortingValue={sortingValue}
            sortingDirection={sortingDirection}
            onSortingClick={changeSorting}
            selectedItemId={selectedItem?.phone}
            onItemSelect={handleItemSelect} />
        </ClientPagination>
      </div>
      {selectedItem && <UserInfo user={selectedItem} />}
    </main>
  )
}

export default App
