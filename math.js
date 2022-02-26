exports.producto = function (a, b) {
    return a * b;
};


exports.suma = function (a, b) {
    const num1 = parseInt(a);
	const num2 = parseInt(b);
	const sum = num1 + num2;
 	return sum;
};

exports.division = function (a, b) {
    return a / b;
};

exports.resta = function (a, b) {
    return a - b;
};

exports.modulo = function (a, b) {
    return a % b;
};