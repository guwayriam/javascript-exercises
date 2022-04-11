const getTheTitles = function(books) {
    let tital = books.map(function(element){
       // console.log(element.title)
        return element.title;
    })
    //console.log(tital)
    return tital;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
