const set = function setValue(object, key, value) {
    if (typeof(key) == "string") {
        key = key.split('.');
        key.shift();
    }

    if (key.length == 1) {
        if (!isNaN(key[0])) {
            object[parseInt(key[0])] = value;
        }
        object[key[0]] = value;
    } else {
        var currentKey;
        currentKey = key.shift();
        if (!Array.isArray(object[currentKey])) {
            object[currentKey] = {};
        }
        setValue(object[currentKey], key, value);
    }
    return object
}

