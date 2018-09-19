function _setValue(object, key, value) {
    if (key.length == 1) {
        const currentKey = key[0];
        const isCurrentKeyANumber = !isNaN(currentKey);

        if (isCurrentKeyANumber) {
            const currentKeyAsNumber = parseInt(currentKey, 10);
            object[currentKeyAsNumber] = value;
            return object; 
        } else {
            object[currentKey] = value;
        }
    } else {
        const currentKey = key.shift();
        if (!Array.isArray(object[currentKey])) {
            object[currentKey] = {};
        }
        _setValue(object[currentKey], key, value);
    }
    return object;
}

function set(object, key, value) {
    if (typeof(key) !== "string") {
        throw TypeError;
    }

    const keyAsArr = key.split('.').slice(1);

    return _setValue(object, keyAsArr, value);
}