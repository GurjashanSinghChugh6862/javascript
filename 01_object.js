// singleton.      Object.create()

// Object literals

const symb = Symbol("key1")

const user = {
    name : "Gurjashan",
    "full name" : "Gurjashan Singh",
    [symb] : "My Symbol",
    age : 19,
    city : "Abohar",
    email : "gurjashansinghchugh@gmail.com",
    lastLoggedInDays : ["Mon", "Wed", "Thrus"]
}

// console.log(user.lastLoggedInDays)
// console.log(user["email"])

// console.log(user["full name"])

// console.log(user.symb)

// console.log(user[symb])

// user.email = "gurjashan@gmail.com"
// console.log(user)
// Object.freeze(user)
// user.email = "changed@gmail.com"
// console.log(user)


user.greeting = function(){
    console.log("Hello")
}

console.log(user.greeting())


