import dateFormat, { masks } from "dateformat";
// const now = new Date();

export function formatDate( date, format) {
    // format - dddd, mmmm dS, yyyy, h:MM:ss TT
    const formated = dateFormat(date, format);
    return formated;
}