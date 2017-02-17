module.exports = function (string) {

    if (string.length > 2) {

        return string[0].toUpperCase() + string.substring(1);
    }

    return string.toUpperCase();
};