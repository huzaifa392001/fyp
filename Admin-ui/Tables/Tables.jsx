'use client'
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ReactPaginate from 'react-paginate';
import './Tables.scss';

function Tables({ tableData, rows }) {
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = rows ? rows : 10;

    // Calculate which rows to display based on the current page
    const offset = currentPage * rowsPerPage;
    const currentRows = tableData.slice(offset, offset + rowsPerPage);
    const pageCount = Math.ceil(tableData.length / rowsPerPage);

    // Handle page change
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <Table className="recentTable">
                <TableHeader>
                    <TableRow>
                        <TableHead>S.No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Added on</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentRows?.map((tableRow, index) => (
                        <TableRow key={index}>
                            <TableCell>{tableRow.s_no}</TableCell>
                            <TableCell>{tableRow.name}</TableCell>
                            <TableCell>{tableRow.email}</TableCell>
                            <TableCell>{tableRow.added_on}</TableCell>
                            <TableCell>
                                <button className='editBtn'>Edit <i className="far fa-edit" /></button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="paginationContainer">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<i className='fas fa-arrow-left' />}
                    nextLabel={<i className='fas fa-arrow-right' />}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </>
    );
}

export default Tables;
