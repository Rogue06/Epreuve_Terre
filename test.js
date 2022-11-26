function timeConversion(s) {
    const ampm = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) { // 12am edge-case
            return  time.replace(s.slice(0, 2), '00');
        }
        return time;
    } else if (ampm === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        return time; // 12pm edge-case
    }
    return 'Error: AM/PM format is not valid';
}




