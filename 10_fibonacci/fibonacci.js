const fibonacci = function(num) {
    let sequence = [];
    for (let i = 1; i < num; i++) {
        if (sequence.length < 2){
            sequence.push(1);
        }else{
            let add = sequence[i-2] + sequence[i-1]
            sequence.push(add);
        }
    }

    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
