import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-basin-80045.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, You Want to delete?');
        if (proceed) {
            const url = `https://secret-basin-80045.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                    }
                })
        }
    }
    return (
        <div>
            <div className="inventory pb-5">
                <div className="container">
                    {/* <!-- section title --> */}
                    <div className="row mb-5">
                        <div className="">
                            <h1 className="">All Orders</h1>
                        </div>
                    </div>
                    {/* <!-- section title end --> */}

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Product Name</TableCell>
                                    <TableCell align="left">Product Price</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">Delete</TableCell>
                                    <TableCell align="left">Confirm</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.userName}
                                        </TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.price}</TableCell>
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left"><button onClick={() => handleDeleteProduct(row._id)} className="btn btn-danger mb-3">Delete</button></TableCell>
                                        <TableCell align="left"><button className="btn btn-info text-black mb-3">{row.status}</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        </div>
    );
};

export default ManageOrders;