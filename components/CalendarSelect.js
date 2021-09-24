import {useState} from "react";
import {Box} from "@chakra-ui/react";
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


export default function CalendarSelect({date = new Date()}) {
    const [value, onChange] = useState(date);
    return <Box>
        <DatePicker
            onChange={onChange}
            value={value}
            maxDate={new Date()}
            minDate={new Date('1995-06-17')}
            className={'calendar'}
            clearIcon={null}
            calendarIcon={null}
        />
        <style jsx>{`
        `}</style>
    </Box>
}
