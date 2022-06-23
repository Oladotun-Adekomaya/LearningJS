function singSong() {
    console.log("I just want to say");
    console.log("Baba ooo");
    console.log("E she ee ee ee ee");
    console.log("I just want to say");
    console.log("Baba ooo");
    console.log("E she");
}
function greet(firstName,lastName) {
    console.log(`Hey there ${firstName} ${lastName[0]}.`)    
}
function repeat(input,times) {
    let str = ""
    for (let index = 0; index < times; index++) {
        str += input;   
    }
    console.log(str)
}
function sumArray(array) {
    result = 0
    for (const num of array) {
        result += num
    }
    return result   
}
function returnDay(x) {
    const days={
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    while (x>0 && x<8) {
        return days[x]
    }
    return null
}

//      FUNCTION EXPRESSION
let square = function (x){
    return x**2
}

//      HIGHER ORDER FUNCTIONS

function callTwice(func) {
    func()
    func()
}
function rollDie() {
    let die = Math.floor(Math.random()*6)+1
    console.log(die)
}
function makeBetween(min,max) {
    return function isbetween (x) {
        return x >= min && x<= max
    }
}

//      METHODS
const myMaths ={
    pi : 3.142,
    square : function (num) {
        return num**2
    },
    cube: function (num) {
        return num**3
    }
}

// const square ={
//     area(side){
//         return side**2
//     },
//     perimeter(side){
//         return side*4
//     }
// }
const hen ={
    name:"helen",
    eggCount:0,
    layAnEgg(){
        this.eggCount++;
        console.log("EGG")
    }
}

//          ARROW FUNCTIONS
const addup = (x,y) =>{
    return x+y
}

const squareup = num => {
    num**2
}
const greetings= ()=>{
    return "HELLO"
}

//         DEFAULT PARAMS
function roll(sides = 6){
    return Math.floor(Math.random()*sides)+1
    
}
function greet(name,msg="Hey there", p = "!") {
    console.log(`${msg},${name}${p}`)
}

//          SPREAD IN FUNCTION CALLS
const nums =[1,2,3,4,5,6,7,8,9,10]
console.log(...nums)

//          SPREAD WITH ARRAY LITERALS
const dogs=["freddy","rocksy","nolly"]
const cats=["ryan","bryan"]
const allPets =[...dogs,...cats]

//          REST PARAMS & DESTRUCTURING ARRAYS
const runners=["John","James","Joshua","Daniel"]
const [gold,silver,bronze] = runners
const[fastest,...everyoneElse] = runners
function sum(...num) {
    return num.reduce((total,el) => total + el`` )
}
allPets.filter
