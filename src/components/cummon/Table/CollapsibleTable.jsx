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

function createData(
    name: string,
    phone: string,
    time: string,
    car: string,
    car_number: string,
    place: string,
    status: string,
) {
    return {
        name,
        phone,
        time,
        car,
        car_number,
        place,
        status,
        history: [
            {
                tire_change: '+',
                wheel_change: '-',
                removal_installation: '+',
                washing: '+',
                dismantling:'-',
                assembly:'-',
                balance: '-',
                pressure: '+',
                correction:'-',
                radius: '18"'
             },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset'} }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{fontFamily: 'Exo 2', color:'#88898A' }}>
                    {row.name}
                </TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}}>{row.phone}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#88898A' }}>{row.time}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#88898A' }}>{row.car}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500' }}>{row.car_number}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#88898A' }}>{row.place}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#88898A' }}>{row.status}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0,}} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{fontFamily: 'Exo 2',color:'#00000' }}>
                                Информация о заказе
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}}>Замена шин</TableCell>
                                        <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}}>Замена колес</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Снятие / установка</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Техническая мойка</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Разборка</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Сборка</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Балансировка</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Проверка давления</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Правка дисков</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'500'}} >Радиус</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow align="center" key={historyRow.tire_change}>
                                            <TableCell align="center" component="th" scope="row"  sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>
                                                {historyRow.tire_change}
                                            </TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.wheel_change}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.removal_installation}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>
                                                {historyRow.washing}
                                            </TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.dismantling}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.assembly}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.balance}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.pressure}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.correction}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Exo 2',color:'#000000',fontWeight:'400'}}>{historyRow.radius}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Иванов Иван Иванович', '89121133665', '03.09.2022    15:01', 'ВАЗ 2110', 'В 200 КХ 196', '1','Ожидает'),
    createData('Кулибинов Сергей Федотович', '+79128866332', '03.09.2022    15:01', 'AUDI Q7', 'Е 222 КХ 196', '2','В работе'),
    createData('Семенов Сергей Сергеевич', '89121133665', '03.09.2022    15:01', 'BMW X3', 'У 300 ВК 196', '3','Готово'),
    createData('Калинин Дмитрий Антонович', '+79128866332', '03.09.2022    15:01', 'TOYOTA LC', 'А 200 АА 196', '4','В работе'),
    createData('Денисов Лука Григорьевич', '89121133665', '03.09.2022    15:01', 'MERCEDEC SLC', 'В 777 ОР 196', '5','Ожидает'),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell sx={{fontFamily: 'Exo 2' }}>Имя клиента</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Номер телефона</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Дата и время</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Автомобиль</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Гос.номер</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Место</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Exo 2' }}>Статус заказа</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}