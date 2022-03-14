export const bgStyle = (id: string) => {
    let bgGradient = "";
    switch(id) {
        case '01d':
            bgGradient = "radial-gradient(circle, rgba(241,203,98,1) 30%, rgba(236,164,63,1) 60%, rgba(226,134,48,1) 90%)";
            break;
        case '01n':
            bgGradient = "radial-gradient(circle, rgba(53,40,199,1) 30%, rgba(33,21,166,1) 60%, rgba(20,11,124,1) 90%)";
            break;
        case '02d':
            bgGradient = "radial-gradient(circle, rgba(232,179,155,1) 30%, rgba(199,140,112,1) 60%, rgba(173,116,90,1) 90%)";
            break;
        case '02n':
            bgGradient = "radial-gradient(circle, rgba(103,114,177,1) 30%, rgba(79,90,148,1) 60%, rgba(51,60,108,1) 90%)";
            break;
        case '03d':
            bgGradient = "radial-gradient(circle, rgba(0,164,255,1) 30%, rgba(34,148,233,1) 60%, rgba(65,133,213,1) 90%)";
            break;
        case '03n':
            bgGradient = "radial-gradient(circle, rgba(54,70,235,1) 30%, rgba(41,54,195,1) 60%, rgba(24,35,150,1) 90%)";
            break;
        case '04d':
            bgGradient = "radial-gradient(circle, rgba(175,175,175,1) 30%, rgba(142,142,142,1) 60%, rgba(124,124,124,1) 90%)";
            break;
        case '04n':
            bgGradient = "radial-gradient(circle, rgba(161,124,205,1) 30%, rgba(119,92,150,1) 60%, rgba(85,65,108,1) 90%)";
            break;
        case '09d':
            bgGradient = "radial-gradient(circle, rgba(62,217,188,1) 30%, rgba(32,194,164,1) 60%, rgba(6,148,122,1) 90%)";
            break;
        case '09n':
            bgGradient = "radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%)";
            break;
        case '10d':
            bgGradient = "radial-gradient(circle, rgba(97,230,132,1) 30%, rgba(59,224,103,1) 60%, rgba(17,175,59,1) 90%)";
            break;
        case '10n':
            bgGradient = "radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%)";
            break;
        case '11d':
            bgGradient = "radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%)";
            break;
        case '11n':
            bgGradient = "radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%)";
            break;
        case '13d':
            bgGradient = "radial-gradient(circle, rgba(136,219,241,1) 30%, rgba(137,205,210,1) 60%, rgba(143,179,193,1) 90%)";
            break;
        case '13n':
            bgGradient = "radial-gradient(circle, rgba(167,142,228,1) 30%, rgba(154,130,203,1) 60%, rgba(127,80,161,1) 90%)";
            break;
        case '50d':
            bgGradient = "radial-gradient(circle, rgba(154,154,151,1) 30%, rgba(105,105,103,1) 60%, rgba(73,73,73,1) 90%)";
            break;
        case '50n':
            bgGradient = "radial-gradient(circle, rgba(110,110,110,1) 30%, rgba(65,65,65,1) 60%, rgba(29,29,29,1) 90%)";
            break;
        default:
            bgGradient = "#02A8A8;";
    }
    return bgGradient
}

export const formatTemp = (t: number) => {
    let rawTemp = Math.round(t)
    let formattedTemp = ""
    if(rawTemp > 0) {
        formattedTemp = `+${rawTemp}°`
    } else {
        formattedTemp = `${rawTemp}°`
    }
    return formattedTemp
}