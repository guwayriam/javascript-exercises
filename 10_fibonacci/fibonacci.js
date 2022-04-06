const fibonacci = function(n) {
    let sequence = [0,1];
    
    if(n < 0){
        return 'OOPS'

    }else if(n === 1){
        return sequence[0];

    }else if(n === 2){
        return sequence[1];

    }else{
        for(let i = 2; i <= n; i++){
            //console.log(sequence)
            let add = sequence[sequence.length-1] + sequence[sequence.length-2]
            //console.log(add)
            sequence.push(add);
        }

    }
    let num = parseInt(n);
    return sequence[num];
};

//console.log(fibonacci('3'));
// Do not edit below this line
module.exports = fibonacci;
