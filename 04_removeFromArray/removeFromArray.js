const removeFromArray = function(list, num) {
    location = list.indexOf(num);
    list.splice(location, num);
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
