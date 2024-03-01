const PadNumber = (number, digits = 2) => {
    const numberAsString = number.toString();
    const paddedNumber = numberAsString.padStart(digits, '0');
    return paddedNumber;
}
module.exports = {
    PadNumber
};