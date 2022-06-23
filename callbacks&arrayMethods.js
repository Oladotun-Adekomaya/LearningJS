const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let newNum = num.map(function (x) {
    return x*2;
})
const movies = [
    {
        title:"film 1",
        score:85
    },
    {
        title:"stand by me",
        score:90
    },
    {
        title:"alien",
        score:75
    },
    {
        title:"Parasite",
        score:98
    }
]
movies.map(function (movies) {
    return movies.title;
})
//                          FILTER METHOD
const username = ["hannah","stacey12345","adekomaya_oladotun","Odefenwa","nolly","tobe12345633"]
// const validUsername = (array) =>{
//     array.filter( name => {
//         return name.length() < 10})
// }
const validUserNames = (array) => (array.filter(name => name.length < 10))



//                          REDUCE METHOD

