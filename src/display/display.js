const error = (msg) => {
    if (Array.isArray(msg)) {
        msg.forEach(ms => console.log(ms));
        return;
    }
    console.log(msg);
}
const Display = {
    error,
};
module.exports = Display;