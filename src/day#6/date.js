function getDayName(dateString) {
    let dayName;

    let date = new Date(dateString);
    dateString = date.toString();

    switch (dateString[0] + dateString[1] + dateString[2]) {
        case 'Sun':
            dayName = 'Sunday';
            break;
    
        case 'Mon':
            dayName = 'Monday';
            break;

        case 'Tue':
            dayName = 'Tuesday ';
            break;

        case 'Wed':
            dayName = 'Wednesday ';
            break;
    
        case 'Thu':
            dayName = 'Thursday ';
            break;

        case 'Fri':
            dayName = 'Friday ';
            break;

        case 'Sat':
            dayName = 'Saturday ';
            break;

        default:
            break;
    }
    
    return dayName;
}
