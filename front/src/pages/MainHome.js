import React, {Component, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function MainHome() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar className="calendar" onChange={onChange} value={value}/>
        </div>
    );
}

export default MainHome;