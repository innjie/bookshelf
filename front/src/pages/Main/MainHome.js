import React, { Component, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MainHome() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="main-contents">
            <div className="div-calendar">
                <Calendar className="calendar" onChange={onChange} value={value}
                    formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })} />
            </div>
            <div className="div-list">
                {/* list  */}
                <table className="sample-table">
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default MainHome;