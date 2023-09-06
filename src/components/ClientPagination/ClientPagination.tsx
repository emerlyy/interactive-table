import React, { ReactElement, useState } from "react";

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
        <>
            {React.cloneElement(children, { data: currentData })}
            <button onClick={changePage(-1)}>Prev</button>
            <span>{page}</span>
            <button onClick={changePage(1)}>Next</button>
        </>
    )
}

export default ClientPagination;