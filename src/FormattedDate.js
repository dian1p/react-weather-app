import React from 'react';

function FormattedDate(props) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    if (date < 10) date = `0${date}`;
    let months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    let hours = props.date.getHours();
    if (hours < 10) hours = `0${hours}`;
    let minutes = props.date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return(
        <div className="date">
            <p>{day}, {date}-{month}-{year}</p>
            <span>{hours}:{minutes} {ampm}</span>
        </div>
    )
}

export default FormattedDate;