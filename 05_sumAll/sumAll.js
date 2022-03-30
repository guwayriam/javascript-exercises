const sumAll = function(first, second) {
    let max;
    let min;
    if(Number.isInteger(first) && Number.isInteger(second)) {
        min = Math.min(first, second);
        max = Math.max(first, second);
    }
    

    let total = 0;

    if(min >= 0){
        for (let i = min; i <= max; i++) {
            total += i;
        }
        return total;

    }

    return 'ERROR'
    
};

// Do not edit below this line
module.exports = sumAll;
