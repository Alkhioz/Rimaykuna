const { PadNumber } = require('./format.util');

const CreateDate = (date) => {
    const {year, month, day} = date;
    return new Date(year, month - 1, day);
}

const GetStartWeek = (date) => {
    const currentDate = !date ? new Date() : CreateDate(date);
    const currentDayOfWeek = currentDate.getDay();
    const difference = currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek;
    const mondayDate = new Date(currentDate);
    mondayDate.setDate(currentDate.getDate() + difference);
    const day = PadNumber(mondayDate.getUTCDate());
    const month = PadNumber(mondayDate.getUTCMonth() + 1);
    const year = PadNumber(mondayDate.getUTCFullYear());
    return {
        day,
        month,
        year,
    }
}

const GetWeekKey = (date) => {
    const {
        day,
        month,
        year,
    } = GetStartWeek(date);
    return `${day}${month}${year}`;
}

module.exports = {
    CreateDate,
    GetStartWeek,
    GetWeekKey,
};