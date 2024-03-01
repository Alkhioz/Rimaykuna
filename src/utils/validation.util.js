const CheckEmpty = (data) => {
    if (!data) return true;
    if (typeof data === 'boolean') return false;
    if (typeof data === 'function') return true;
    if (typeof data === 'object' && !Array.isArray(data)) return Object.keys(data).length === 0;
    if (Array.isArray(data)) return data.length === 0;
    if (typeof data === 'string' && data.replace(/\s/g, "") === '') return true;
    return false;
}

const ErrorObjectKey = (obj, key) => {
    if (CheckEmpty(obj)) return true;
    if (!key) return false;
    if (!(key in obj)) return true;
    return CheckEmpty(obj[key]);
}

const CheckTypeMismatch = (data, type) => {
    if (CheckEmpty(data)) return true;
    return !(typeof data === type);
}

const CheckInvalidDate = (value) => {
    return !(value instanceof Date);
}

module.exports = {
    CheckEmpty,
    ErrorObjectKey,
    CheckTypeMismatch,
    CheckInvalidDate,
};