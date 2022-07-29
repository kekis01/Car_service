import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import './table.css';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.car}</TableCell>
                <TableCell align="center">{row.carNumber}</TableCell>
                <TableCell align="center"> <button className="order_button_table"> Начать заказ </button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Объем работы
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Замена шин</TableCell>
                                        <TableCell align="center">Замена колес</TableCell>
                                        <TableCell align="center">Снятие / установка</TableCell>
                                        <TableCell align="center">Техническая мойка</TableCell>
                                        <TableCell align="center">Разборка</TableCell>
                                        <TableCell align="center">Сборка</TableCell>
                                        <TableCell align="center">Балансировка</TableCell>
                                        <TableCell align="center">Проверка давления</TableCell>
                                        <TableCell align="center">Правка дисков</TableCell>
                                        <TableCell align="center">Радиус</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row" align="center">
                                                <div className="table_style_status"> {row.tires}</div>
                                            </TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.wheels}</div> </TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work1}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work2}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work3}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work4}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work5}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work6}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.work7}</div></TableCell>
                                            <TableCell align="center"> <div className="table_style_status"> {row.radius}</div></TableCell>
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



export default function CollapsibleTable() {

    const [employeeList,setEmployeeList] = useState([])

    const getFetch = async () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
            setEmployeeList(response.data)
        })
    };

    useEffect(()  => {
            getFetch()
        }
    );

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Имя клиента</TableCell>
                        <TableCell align="center">Номер телефона</TableCell>
                        <TableCell align="center">Автомобиль</TableCell>
                        <TableCell align="center">Гос. номер</TableCell>
                        <TableCell align="center">Изменить статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeList.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

