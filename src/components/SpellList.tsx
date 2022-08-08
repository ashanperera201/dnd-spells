import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined';
import Add from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { addSpells } from '../redux/fav-spells/actions'

import axios from 'axios';


interface Column {
    id: 'index' | 'name' | 'action';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'index', label: 'Spell Index', minWidth: 100 },
    { id: 'name', label: 'Spell Name', minWidth: 80 },
    { id: 'action', label: 'Action' }
];

const SpellList = (props: any) => {

    const { addFavSpells } = props;

    let navigate = useNavigate();


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [spellList, setSpellList] = useState<any[]>([]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetchSpellList();
    }, [])

    const fetchSpellList = async () => {
        const result = (await axios.get('http://www.dnd5eapi.co/api/spells')).data;
        setSpellList(result.results)
    }

    const navigateToDetails = (data: any) => {
        navigate("/details", { replace: false, state: data });
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {spellList
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                        {columns.map((column) => {
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <IconButton onClick={() => navigateToDetails(row)}>
                                                            <RemoveRedEyeOutlined fontSize="inherit" />
                                                        </IconButton>
                                                        <IconButton onClick={() => addFavSpells(row)}>
                                                            <Add fontSize="inherit" />
                                                        </IconButton>
                                                    </TableCell>
                                                )
                                            } else {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={spellList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    addFavSpells: (spell: any) => dispatch(addSpells(spell)),
})

export default connect(null, mapDispatchToProps)(SpellList);