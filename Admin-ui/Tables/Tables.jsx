'use client';
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

function Tables({ tableData, rows = 10, customer, pending, rejected }) {
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * rows;
    const currentRows = tableData.slice(offset, offset + rows);
    const pageCount = Math.ceil(tableData.length / rows);

    const handlePageClick = ({ selected }) => setCurrentPage(selected);

    const renderStatusCell = (status) => (
        <TableCell>
            <span className={status === 0 ? 'active' : ''}>
                {status === 0 ? 'Active' : 'In-Active'}
            </span>
        </TableCell>
    );

    return (
        <>
            <Table className="recentTable">
                <TableHeader>
                    <TableRow>
                        <TableHead>S.No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        {!customer && <TableHead>Status</TableHead>}
                        {!customer && !pending && (
                            <>
                                <TableHead>Balance</TableHead>
                                <TableHead>Last Deposit Date</TableHead>
                            </>
                        )}
                        {!customer && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentRows.map((tableRow, index) => (
                        <TableRow key={index}>
                            <TableCell>{offset + index + 1}</TableCell>
                            <TableCell>{tableRow?.name || 'Name Not Available'}</TableCell>
                            <TableCell>{tableRow?.email || 'Email Not Available'}</TableCell>
                            <TableCell>{tableRow?.phone_number || 'Phone Number Not Available'}</TableCell>
                            {!customer && !pending && !rejected && renderStatusCell(tableRow?.status)}
                            {pending && <TableCell>Pending</TableCell>}
                            {rejected && <TableCell><span>Rejected</span></TableCell>}
                            {!customer && !pending && (
                                <>
                                    <TableCell>{tableRow?.deposit_due || 'Balance Not Available'}</TableCell>
                                    <TableCell>{tableRow?.last_deposit_date || 'Date Not Available'}</TableCell>
                                </>
                            )}
                            {!customer && (
                                <TableCell>
                                    <button className='editBtn'>
                                        Edit <i className="far fa-edit" />
                                    </button>
                                </TableCell>
                            )}
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
                    containerClassName="pagination"
                    previousLinkClassName="pagination__link"
                    nextLinkClassName="pagination__link"
                    disabledClassName="pagination__link--disabled"
                    activeClassName="pagination__link--active"
                />
            </div>
        </>
    );
}

export default Tables;
