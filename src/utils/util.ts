export const calculateDifference = (date1: Date, date2: Date): string => {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    const end = date1 > date2 ? date1 : date2;
    const start = date1 < date2 ? date1 : date2;
    var timediff = end.getTime() - start.getTime();

    const hourDiff = Math.floor(timediff / hour);
    const dayDiff = Math.floor(timediff / day);
    const monthsDiff =
        date2.getFullYear() * 12 +
        date2.getMonth() -
        (date1.getFullYear() * 12 + date1.getMonth());

    let result: string;
    if (hourDiff > 0 && hourDiff < 23) {
        result =
            hourDiff == 1 ? `${hourDiff} hour ago` : `${hourDiff} hours ago`;
    } else if (dayDiff > 0 && dayDiff < 32) {
        result = dayDiff == 1 ? `${dayDiff} day ago` : `${dayDiff} days ago`;
    } else if (monthsDiff > 0 && monthsDiff < 13) {
        result =
            monthsDiff == 1
                ? `${monthsDiff} month ago`
                : `${monthsDiff} months ago`;
    } else {
        result = `${end.getFullYear() - start.getFullYear()} years ago`;
    }

    return result;
}
