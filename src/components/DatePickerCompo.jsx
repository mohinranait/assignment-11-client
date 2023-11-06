import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';

const DatePickerCompo = ({setDate, currentDate }) => {
    const [startDate, setStartDate] = useState( new Date());


    useEffect(() => {
        if(currentDate){
            setStartDate(new Date(currentDate)  );
        }
    },[])
    
    useEffect(() => {
        const dateFile = startDate.toLocaleString().split(',')[0];
        setDate(dateFile)
    },[startDate, setDate])

    

    const CustomInput = ({value,onClick}) => {
        return (
            <>
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <div className='relative'>
                    <input type="text" name='date'  value={value} onClick={onClick} readOnly className="input w-full input-bordered" />
                    <span className='absolute right-0 top-2/4 -translate-y-2/4 pr-2'>
                        <FaCalendarAlt />
                    </span>
                </div>
            </>
           
        )
    }

    return (
        <>
            <DatePicker 
                selected={startDate} 
                onChange={ (date) => setStartDate(date) } 
                customInput={<CustomInput />}
                className='w-full'
            />   
        </>
    );
};

export default DatePickerCompo;