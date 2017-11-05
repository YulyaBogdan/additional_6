module.exports = function zeros(expression) {
    var parts = expression.split('*');
    var counter2 = 0;
    var counter5 = 0;
    for (var i = 0; i < parts.length; i++){
        counter2 += countNum(parts[i], 2);
        counter5 += countNum(parts[i], 5);
    }
    return Math.min(counter2, counter5);
}

function factorial(expression) {
    var arr = [];
    var temp = 0;
    if (expression.slice(-2) !== '!!') {
        expression = expression.slice(0,-1);
        temp = +expression;
        while(temp > 0){
            arr.push(temp);
            temp--;
        }
    }
    else {
        expression = expression.slice(0,-2);
        temp = +expression;
        while(temp > 0){
            arr.push(temp);
            temp -= 2;
        }
    }
    return arr;
}

function countNum (expression, num) {
    var count = 0;
    var fact = factorial(expression);
    for (var i = 0; i < fact.length; i++) {
        while(fact[i]%num === 0) {
            count++;
            fact[i] /= num;
        }
    }
    return count;
}
