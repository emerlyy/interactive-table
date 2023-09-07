import React, { ReactElement, useState } from "react";
import styles from './ClientPaginatiion.module.css';

interface ClientPaginationProps {
    data: any[],
    dataPerPage: number,
    children: ReactElement
}

const ClientPagination = ({ data, dataPerPage, children }: ClientPaginationProps) => {
    const [page, setPage] = useState(0);

    const maximumPage = Math.ceil(data.length / dataPerPage) - 1;

    const changePage = (offset: number) => () => {
        const nextPage = page + offset;

        if (nextPage < 0) {
            setPage(0);
            return;
        }

        if (nextPage > maximumPage) {
            setPage(maximumPage);
            return;
        }

        setPage(nextPage);
    }

    const start = dataPerPage * page;

    const currentData = data.slice(start, start + dataPerPage)

    return (
        <div className={styles.wrapper}>
            {React.cloneElement(children, { data: currentData })}
            <div className={styles.navigationWrapper}>
                <button className={styles.button} onClick={changePage(-1)}>Prev</button>
                <span className={styles.pageDisplay}>{page + 1}</span>
                <button className={styles.button} onClick={changePage(1)}>Next</button>
            </div>
        </div>
    )
}

export default ClientPagination;