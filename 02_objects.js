const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Gurjashan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const user = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName : "Gurjashan",
            lastName : "Singh"
        }
    }
}

console.log(user.fullName.userFullName.firstName)

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = {
//     obj1, obj2
// }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)



const course = {
    name : "JavaScript",
    price : 999,
    courseInstructor : "Gurjashan"
}

const {courseInstructor : ci} = course;

console.log(ci)