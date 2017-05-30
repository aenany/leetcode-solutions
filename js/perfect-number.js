var checkPerfectNumber = function (num) {
    let sum = 1;
    for (let i = 2, stop = Math.sqrt(num); i <= stop; i++) {
        if (num % i === 0) sum += i + num / i;
    }
    return num > 1 && sum === num;
};