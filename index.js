const updateTime = () => {
    const currentdate = new Date(); 
    var time = currentdate.toLocaleString('es-mx', { hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true })

    const month = currentdate.toLocaleString('es-mx', { month: 'long' });
    const dayStr = currentdate.toLocaleString('es-mx', {weekday: 'long'});
    const dayNum = currentdate.toLocaleString('es-mx', {day: 'numeric'});
    const year = currentdate.toLocaleString('es-mx', {year: 'numeric'});

    const dateString = `${dayStr}, ${dayNum} de ${month} del ${year}`.trim();

    document.getElementById('hora').innerHTML = time;
    document.getElementById('fecha').innerHTML = dateString;
}

updateTime();
setInterval(updateTime, 1000);