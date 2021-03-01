function objectTreeToPathsObject(object) {
    const result = {};

    Object.keys(object).forEach((key) => {
        if (typeof object[key] !== 'object') {
            result[key] = String(object[key]);
        } else {
            Object.keys(object[key]).forEach((secondLevelKey) => {
                result[`${key}/${secondLevelKey}`] = object[key][secondLevelKey];
            });
        }
    });

    return result;
}

module.exports = objectTreeToPathsObject;
