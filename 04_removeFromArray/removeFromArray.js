const removeFromArray = function(list) {

    let remove = Array.from(arguments);
    remove.shift();

    for(let i = 0; i < remove.length; i++) {
        let element = remove[i];
        let location = list.indexOf(element);
        if(location > -1){
            list.splice(location, 1);
        }
        
    }
    return list;
    
};

// Do not edit below this line
module.exports = removeFromArray;


/*
  for(let i = 0; i < num.length; i++) {
        let element = num[i];
        location = list.indexOf(element);
        list.splice(location, 1);
    }
   /* let location = list.indexOf(num);
    list.splice(location, 1);*/
    //return list;
