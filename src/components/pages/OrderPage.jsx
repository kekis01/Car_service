import React, {useState} from "react";
import './OrderPage.css';
import Select from 'react-select'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../cummon/Header/Header'
import Footer from '../cummon/Footer/Footer'
import Axios from 'axios'


import { Link } from "react-router-dom"

const options1 =[
    {
        value: '10:00',
        label: '10:00'
    },
    {
        value: '11:00',
        label: '11:00'
    },
    {
        value: '12:00',
        label: '12:00'
    },
    {
        value: '13:00',
        label: '13:00'
    },
    {
        value: '14:00',
        label: '14:00'
    },
    {
        value: '15:00',
        label: '15:00'
    }
]

const options2 =[
    {
        value: '10:00',
        label: '10:00'
    },
    {
        value: '11:00',
        label: '11:00'
    },
    {
        value: '12:00',
        label: '12:00'
    },
    {
        value: '13:00',
        label: '13:00'
    },
    {
        value: '14:00',
        label: '14:00'
    },
    {
        value: '15:00',
        label: '15:00'
    }
]

const options3 =[
    {
        value: '10:00',
        label: '10:00'
    },
    {
        value: '11:00',
        label: '11:00'
    },
    {
        value: '12:00',
        label: '12:00'
    },
    {
        value: '13:00',
        label: '13:00'
    },
    {
        value: '14:00',
        label: '14:00'
    },
    {
        value: '15:00',
        label: '15:00'
    }
]

const options4 =[
    {
        value: '10:00',
        label: '10:00'
    },
    {
        value: '11:00',
        label: '11:00'
    },
    {
        value: '12:00',
        label: '12:00'
    },
    {
        value: '13:00',
        label: '13:00'
    },
    {
        value: '14:00',
        label: '14:00'
    },
    {
        value: '15:00',
        label: '15:00'
    }
]

const options5 =[
    {
        value: '10:00',
        label: '10:00'
    },
    {
        value: '11:00',
        label: '11:00'
    },
    {
        value: '12:00',
        label: '12:00'
    },
    {
        value: '13:00',
        label: '13:00'
    },
    {
        value: '14:00',
        label: '14:00'
    },
    {
        value: '15:00',
        label: '15:00'
    }
]

const options6 =[
    {
        value: '13-15"',
        label: '13-15"'
    },
    {
        value: '16"',
        label: '16"'
    },
    {
        value: '17"',
        label: '17"'
    },
    {
        value: '18"',
        label: '18"'
    },
    {
        value: '19"',
        label: '19"'
    },
    {
        value: '20"',
        label: '20"'
    },
    {
        value: '21"',
        label: '21"'
    },
    {
        value: '22"',
        label: '22"'
    },
    {
        value: '23"',
        label: '23"'
    },
    {
        value: '24"',
        label: '24"'
    }
]

function OrderPage(){

    const [currentTime1,setCurrentTime1]= useState()
    const [currentTime2,setCurrentTime2]= useState()
    const [currentTime3,setCurrentTime3]= useState()
    const [currentTime4,setCurrentTime4]= useState()
    const [currentTime5,setCurrentTime5]= useState()
    const [currentRadius6,setCurrentRadius6]= useState()

    const getValue1 = () => {
        return currentTime1 ? options1.find(c=>c.value === currentTime1): ''
    }

    const getValue2 = () => {
        return currentTime2 ? options2.find(c=>c.value === currentTime2): ''
    }

    const getValue3 = () => {
        return currentTime3 ? options3.find(c=>c.value === currentTime3): ''
    }

    const getValue4 = () => {
        return currentTime4 ? options4.find(c=>c.value === currentTime4): ''
    }

    const getValue5 = () => {
        return currentTime5 ? options5.find(c=>c.value === currentTime5): ''
    }

    const getValue6 = () => {
        return currentRadius6 ? options6.find(c=>c.value === currentRadius6): ''
    }

    const onChange1 = (newValue:any) =>{
        setCurrentTime1(newValue.value)
    }

    const onChange2 = (newValue:any) =>{
        setCurrentTime2(newValue.value)
    }

    const onChange3 = (newValue:any) =>{
        setCurrentTime3(newValue.value)
    }

    const onChange4 = (newValue:any) =>{
        setCurrentTime4(newValue.value)
    }

    const onChange5 = (newValue:any) =>{
        setCurrentTime5(newValue.value)
    }

    const onChange6 = (newValue:any) =>{
        setCurrentRadius6(newValue.value)
    }

    const [work1,setWork1] = useState('')
    const [work2,setWork2] = useState('')
    const [work3,setWork3] = useState('')
    const [work4,setWork4] = useState('')
    const [work5,setWork5] = useState('')
    const [work6,setWork6] = useState('')
    const [work7,setWork7] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [car,setCar] = useState('')
    const [carNumber,setCarNumber] = useState('')
    const [wheels,setWheels] = useState('')
    const [tires,setTires] = useState('')


    const addEmployee = () =>{
        Axios.post('http://localhost:3001/create', {
            name:name,
            number:number,
            car:car,
            carNumber:carNumber,
            wheels:wheels,
            tires:tires,
            work1:work1,
            work2:work2,
            work3:work3,
            work4:work4,
            work5:work5,
            work6:work6,
            work7:work7,
            time1:currentTime1,
            time2:currentTime2,
            time3:currentTime3,
            time4:currentTime4,
            time5:currentTime5,
            radius:currentRadius6,
        }).then(()=>{
            console.log("success");
        })
    }


    return (
        <>
            <Header/>
            <div className="contaner_order">
                <div className="first_block_order">
                    <div className="title_order1"> Выбор места</div>
                    <div className="place_position_order">
                        <Select value={getValue1()} onChange={onChange1} options={options1} placeholder="Место №1" className="place_style"/>
                        <Select value={getValue2()} onChange={onChange2} options={options2} placeholder="Место №2" className="place_style"/>
                        <Select value={getValue3()} onChange={onChange3} options={options3} placeholder="Место №3" className="place_style"/>
                        <Select value={getValue4()} onChange={onChange4} options={options4} placeholder="Место №4" className="place_style"/>
                        <Select value={getValue5()} onChange={onChange5} options={options5} placeholder="Место №5" className="place_style"/>


                    </div>
                </div>
                <div className="second_block_order">
                    <div className="contaner_inner_order">
                        <div className="left_side_inner_order">
                            <div className="title_order2">Объем работы</div>
                            <div className="work_order_box">
                                <div className="first_work">
                                    <div className="subtitle_order">Комплекс работ</div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "wheel1"  value={"Замена шин"} onChange={(event)=>{setTires(event.target.value);}}/>
                                        <label htmlFor="wheel1"  className="work_name_order"> Замена шин </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "wheel2" value={"Замена колес"} onChange={(event)=>{setWheels(event.target.value);}}/>
                                        <label htmlFor="wheel2"  className="work_name_order"> Замена колес </label>
                                    </div>
                                </div>
                                <div className="second_work">
                                    <div className="subtitle_order">Услуги</div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service1" value={"Снятие / установка"} onChange={(event)=>{setWork1(event.target.value);}}/>
                                        <label htmlFor="service1"  className="work_name_order"> Снятие / установка </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service2" value={"Техническая мойка"} onChange={(event)=>{setWork2(event.target.value);}}/>
                                        <label htmlFor="service2"  className="work_name_order"> Техническая мойка </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service3" value={"Разборка"} onChange={(event)=>{setWork3(event.target.value);}}/>
                                        <label htmlFor="service3"  className="work_name_order"> Разборка </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service4" value={"Сборка"} onChange={(event)=>{setWork4(event.target.value);}}/>
                                        <label htmlFor="service4"  className="work_name_order"> Сборка </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service5" value={"Балансировка"} onChange={(event)=>{setWork5(event.target.value);}}/>
                                        <label htmlFor="service5"  className="work_name_order"> Балансировка </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service6" value={"Проверка давления"} onChange={(event)=>{setWork6(event.target.value);}}/>
                                        <label htmlFor="service6"  className="work_name_order"> Проверка давления </label>
                                    </div>
                                    <div className="checkbox_components">
                                        <input type="checkbox" id = "service7" value={"Правка дисков"} onChange={(event)=>{setWork7(event.target.value);}}/>
                                        <label htmlFor="service7"  className="work_name_order"> Правка дисков </label>
                                    </div>
                                </div>
                                <div className="third_work">
                                    <div className="subtitle_order">Размер колес</div>
                                    <Select value={getValue6()} onChange={onChange6} options={options6} placeholder="Выберите размер колеса" className="wheel_select"/>
                                </div>
                            </div>
                        </div>
                        <div className="right_side_inner_order">
                            <div className="title_order3">Ваши данные</div>
                            <div className="contact_order_box">
                                <div className="text-field text-field_floating-2">

                                    <input className="text-field__input" type="text" id="name" name="name" onChange={(event)=>{setName(event.target.value);}}/>
                                    <label className="text-field__label" htmlFor="name">Ваше имя</label>

                                </div>

                                <div className="text-field text-field_floating-2">

                                    <input className="text-field__input" type="text" id="phone" name="phone"onChange={(event)=>{setNumber(event.target.value);}}/>
                                    <label className="text-field__label" htmlFor="phone">Номер телефона</label>

                                </div>

                                <div className="text-field text-field_floating-2">

                                    <input className="text-field__input" type="text" id="car_name" name="car-name"onChange={(event)=>{setCar(event.target.value);}}/>
                                    <label className="text-field__label" htmlFor="car_name">Марка автомобиля</label>

                                </div>

                                <div className="text-field text-field_floating-2">

                                    <input className="text-field__input" type="text" id="number" name="number"onChange={(event)=>{setCarNumber(event.target.value);}}/>
                                    <label className="text-field__label" htmlFor="number">Гос.номер</label>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="button_accept_order">

                    <input type="checkbox" id="click"/>
                    <label htmlFor="click" className="style_button">Оформить визит <ArrowForwardIosIcon/></label>

                    <div className="popup">
                        <div className="window">
                            <div className="first_inner_window">
                                <div className="title_window1">Запись</div>
                                    <div className="first_contaner_window">
                                    <div className="left_side_contaner">
                                        <div className="subtitle_info_check">Имя: <div className="info_style">{name}</div> </div>
                                        <div className="subtitle_info_check">Номер телефона:<div className="info_style">{number}</div></div>
                                        <div className="subtitle_info_check">Марка автомобиля:<div className="info_style">{car}</div></div>
                                        <div className="subtitle_info_check">Гос. номер:<div className="info_style">{carNumber}</div></div>
                                    </div>
                                    <div className="right_side_contaner">
                                        <div className="subtitle_info_check">Место:</div>
                                        <div className="subtitle_info_check">Время:<div className="info_style">{currentTime1}{currentTime2}{currentTime3}{currentTime4}{currentTime5}</div></div>
                                    </div>
                                </div>
                                <div className="second_contaner_windo">
                                    <div className="right_side_contaner">
                                        <div className="subtitle_info_check">Комплекс работ:
                                            <div className="info_style">{tires}</div>
                                            <div className="info_style">{wheels}</div>
                                        </div>
                                        <div className="subtitle_info_check">Услуги:
                                            <div className="work_style">{work1}</div>
                                            <div className="work_style">{work2}</div>
                                            <div className="work_style">{work3}</div>
                                            <div className="work_style">{work4}</div>
                                            <div className="work_style">{work5}</div>
                                            <div className="work_style">{work6}</div>
                                            <div className="work_style">{work7}</div>
                                        </div>
                                        <div className="subtitle_info_check">Размер колес:
                                            <div className="work_style">{currentRadius6}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="second_inner_window">
                                <div className="title_window2">Чек</div>
                                <div className="right_side_contaner2">
                                    <div className="subtitle_info_check">Стоймость работ:</div>
                                    <div className="subtitle_info_check">Примерное время работы:</div>
                                </div>
                            </div>
                            <div className="button_position">
                                <label htmlFor="click" className="close"><ArrowBackIosIcon/>Вернуться к выбору</label>
                                <Link to="/" className="close" onClick={addEmployee}> Оформить визит <ArrowForwardIosIcon/> </Link>
                            </div>
                        </div>
                        <div className="blackout"></div>
                    </div>

                </div>
            </div>

            <Footer/>
        </>
    )
}



export default OrderPage;