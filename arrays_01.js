const arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 43, 54]

const arr1 = new Array(1, 2, 3, 4)



// console.log(arr[0])
// console.log(arr.length)


arr.push(100)
arr.push(50)

arr.unshift(300)
arr.shift()

arr.pop()

// console.log(arr)

const newArr = arr.join()

// console.log(typeof arr)

console.log('A ', arr)

const myArr1 = arr.slice(1, 3)
console.log(myArr1)
console.log('B ', arr)

const myArr2 = arr.splice(1, 3)
console.log(myArr2)
console.log('C ', arr)
 


