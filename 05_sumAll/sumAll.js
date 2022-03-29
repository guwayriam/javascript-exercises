const sumAll = function(first, second) {
    let min = Math.min(first, second);
    let max = Math.max(first, second);

    let total = 0;

    if(min >= 0){
        for (let i = min; i <= max; i++) {
            total += i;
        }
        return total;

    }else{
        return 'ERROR'
    }

    

    
};

// Do not edit below this line
module.exports = sumAll;
