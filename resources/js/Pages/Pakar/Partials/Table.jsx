import React from "react";
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useSortBy,
    usePagination,
} from "react-table";
import regeneratorRuntime from "regenerator-runtime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { ArrowForwardIos, LastPage, Router } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Link } from "@mui/material";
import {Link} from "@inertiajs/react"
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

// import Button from '@mui/material/Button';

//import { BeakerIcon } from '@heroicons/react/solid';
// Define a default UI for filtering

export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Button({ children, className, ...rest }) {
    return (
        <button
            type="button"
            className={classNames(
                "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

export function PageButton({ children, className, ...rest }) {
    return (
        <button
            type="button"
            className={classNames(
                "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);



    return (
        <label className="my-5 flex gap-x-2 items-baseline">
            <span className="text-gray-700">Search: </span>
            <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </label>
    );
}

export function deletePertanyaan({ id }) {
    return <></>;
}

export function ModalDelete({id,openOption, handleClose}) {
    // const [closeModalDelete,setCloseModalDelete] = useState(false)
    // const handleCloseModalDelete = () => setCloseModalDelete(true);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    console.log("Hello")
    return (
            <Modal
                open={openOption}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography>{id}</Typography>
                <Button onClick={handleClose} >Tutup</Button>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
    );
}

export default function Table({
    signature,
    columns,
    data,
    route_for_edit,
    route_for_delete,
}) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        //new
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );
    const deletePertanyaan = (id) => {};
    // Render the UI for your table
    const handleDelete = (id) =>{
        setOpenModalDelete(prevState => ({
            ...prevState,
            [id] : true
        }))
    } 

    const handleCloseModalDelete = (id) =>{
        setOpenModalDelete(prevState => ({
            ...prevState,
            [id] : false
        }));

    } 


    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
                className="my-5"
            />
            <div className="mt-8 ml-2 mr-12 flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                {...getTableProps()}
                                className="w-full divide-y divide-gray-200"
                                sx={{ minWidth: 650 }}
                            >
                                <thead className="bg-gray-50">
                                    {headerGroups.map((headerGroup) => (
                                        <tr
                                            {...headerGroup.getHeaderGroupProps()}
                                        >
                                            {headerGroup.headers.map(
                                                (column) => (
                                                    // Add the sorting props to control sorting. For this example
                                                    // we can add them into the header props
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        {...column.getHeaderProps(
                                                            column.getSortByToggleProps()
                                                        )}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                        {/* Add a sort direction indicator */}
                                                        <span>
                                                            {column.isSorted
                                                                ? column.isSortedDesc
                                                                    ? " ▼"
                                                                    : " ▲"
                                                                : ""}
                                                        </span>
                                                    </th>
                                                )
                                            )}
                                            {signature!="index"? (<>
                                            
                                                <th
                                                    colSpan={2}
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >Aksi</th>
                                            
                                            </>) : ""}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200"
                                >
                                    {page.map((row, i) => {
                                        
                                        
                                        
                                        // new
                                        // <div key={row.id}>
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                
                                                
                                                {row.cells.map((cell) => {
                                                    if (
                                                        typeof cell.value ===
                                                        "string"
                                                    ) {
                                                        if (
                                                            cell.value.length >
                                                            50
                                                        ) {
                                                            let data =
                                                                cell.value.slice(
                                                                    0,
                                                                    75
                                                                );
                                                            data += "...";
                                                            return (
                                                                <>
                                                                    
                                                                    <td
                                                                        {...cell.getCellProps()}
                                                                        className="px-6 py-4 "
                                                                    >
                                                                        <Accordion>
                                                                            <AccordionSummary
                                                                                expandIcon={
                                                                                    <ExpandMoreIcon />
                                                                                }
                                                                                aria-controls="panel1a-content"
                                                                                id="panel1a-header"
                                                                            >
                                                                                <Typography>
                                                                                    {
                                                                                        data
                                                                                    }
                                                                                </Typography>
                                                                            </AccordionSummary>
                                                                            <AccordionDetails>
                                                                                <Typography>
                                                                                    {
                                                                                        cell.value
                                                                                    }
                                                                                </Typography>
                                                                            </AccordionDetails>
                                                                        </Accordion>
                                                                    </td>
                                                                </>
                                                            );
                                                        }
                                                    }
                                                    
                                                    return (
                                                        <>
                                                            <td
                                                                {...cell.getCellProps()}
                                                                className="px-6 py-4 "
                                                            >
                                                                {cell.render(
                                                                    "Cell"
                                                                )}
                                                            </td>

                                                        </>
                                                    );
                                                })}
                                                {
                                                    signature!="index"? (
                                                    <>
                                                        <td>
                                                            <div>
                                                                <Link
                                                                    
                                                                    className="font-bold bg-[#98A8F8] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#737EDE] hover:drop-shadow-lg"
                                                                    href={route(
                                                                        route_for_edit,
                                                                        parseInt(
                                                                            row.original.id
                                                                        ) 
                                                                    )}
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="px-5">
                                                            
                                                            <Link
                                                                method="delete"
                                                                className="font-bold bg-[#98A8F8] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#737EDE] hover:drop-shadow-lg" 
                                                                href={route(
                                                                    route_for_delete,
                                                                        parseInt(
                                                                            row.original.id
                                                                        )
                                                                )}
                                                            >
                                                                Hapus
                                                            </Link>
                                                            
                                                        </td>
                                                    
                                                    
                                                    </>):""
                                                }
                                            </tr>
                                        );
                                        
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <Button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2">
                        <span className="text-sm text-gray-700">
                            Halaman{" "}
                            <span className="font-medium">
                                {state.pageIndex + 1}
                            </span>{" "}
                            dari{" "}
                            <span className="font-medium">
                                {pageOptions.length}
                            </span>
                        </span>
                    </div>
                    {/* Navigation */}
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <PageButton
                                className="rounded-l-md"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">First</span>
                                <FirstPageIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </PageButton>
                            <PageButton
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">Previous</span>
                                <ArrowBackIosIcon
                                    className="h-5 w-5"
                                    fontSize="small"
                                    aria-hidden="true"
                                />
                            </PageButton>
                            <PageButton
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Next</span>
                                <ArrowForwardIos
                                    className="h-5 w-5"
                                    fontSize="small"
                                    aria-hidden="true"
                                />
                            </PageButton>
                            <PageButton
                                className="rounded-r-md"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Last</span>
                                <LastPage
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
