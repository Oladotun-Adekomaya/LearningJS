// while (true) {   
    // let command =prompt("What would you like to do:")
    // while (command !== "new" && command !== "delete" && command !== "list" && command!== "quit") {
    // command = prompt("Enter a valid command!")
    // }
    // const todos =[]
    // if (command === "new") {
    //     let newTodo = prompt("Enter new todo:")
    //     todos.push(newTodo)
    //     console.log(`${newTodo} added to list`)
    // }
    // else if (command === "list") {
    //     for (const todo of todos) {
    //         i = 0
    //         console.log(`${i}: ${todo}`)
    //         i++;
    //     }
    // }
    // else  if (command === "delete") {
        
    // }
// }
let input = prompt("What would you like to do:")
const todos = ["timi","dotun","you"]
while (input !== "quit" && "q") {
    if (input === "list") {
        console.log("**********")
        for (let index = 0; index < todos.length; index++){
          console.log(`${index}: ${todos[index]} `)  
        }
        console.log("**********")
    }else if (input === "delete") {
        let i = parseInt(prompt("Input the index number you want to delete"))
        todos.splice(i,1)
        console.log("Todo deleted")
    }
    else if(input === "new"){
        let newItem = prompt("Input the new todo:")
        todos.push(newItem)
    }
    input=prompt("What would you like to do")
}
console.log("You quit the app")