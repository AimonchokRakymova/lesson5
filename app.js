var htmlTag = ['li', 'div', 'li', 'li', 'li', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagObject = {}
for (var i = 0; i < htmlTag.length; i++) {
    if (tagObject.hasOwnProperty(htmlTag[i])) {
        tagObject[htmlTag[i]] += 1
    } else {
        tagObject[htmlTag[i]] = 1
    }
}
console.log(tagObject)

//sort
console.log(Object.keys(tagObject).sort(function (tag1, tag2) {
    return tagObject[tag2] - tagObject[tag1]
}))

// var num = [1,4,33,2]
// console.log(num.sort())

//filter
var fruits = ['apple', 'pineapple', 'cherry', 'banana', 'orange']
var fruitsForFilter = fruits.filter(fruit => fruit.length >= 6)
console.log(fruitsForFilter)

var users = [
    {name: 'Adam', age: 45},
    {name: 'Jack', age: 12},
    {name: 'Oliver', age: 17},
    {name: 'John', age: 34},
    {name: 'Bob', age: 15},
    {name: 'Emil', age: 23},
    {name: 'Aku', age: 18},
]

var resultAge = users.filter(i => i.age <= 18)
console.log(resultAge)
var resultName = users.filter(user => user.name.toLowerCase().includes('o'))
console.log(resultName)

//map
var numbers = [2, 3, 4, 5, 6]
var newNumbers = numbers.map(i => i * 2)
console.log(newNumbers)

var som = [230000, 450000, 9000000]
var dollars = som.map(i => i / 89)
var fixDollars = dollars.map(i => i.toFixed(1))
console.log(fixDollars)

// console.log(hello)

//forEach
var numbers2 = [3, 4, 5, 6, 7, 8]
numbers2.forEach(i => console.log(i * 4))

var arrayNum = [23, 23, 34, 45, 4, 45, 5, 56, 67, 65, 65, 67, 7, 7]
var newArray = new Set(arrayNum)
var array = Array.from(newArray)
console.log(array)

//методы массива
var fruit = ['banana', 'apple']
//1) push
fruit.push('melon')
// 2) concat
var concatArr = fruit.concat(['lemon'])
// console.log(concatArr)
//3) unshift
// var unshiftArr = fruit.unshift('orange')
// console.log(unshiftArr)
// 4) pop
// var popArr = fruit.pop()
// console.log(popArr)
//5) shift
// var shiftArr = fruit.shift()
// console.log(shiftArr)
//splice
var spliceArr = fruit.splice(1, 0, 'cherry')
console.log(fruit)
console.log(spliceArr)

// console.log(hello2)

//ES6+
var hello = 'hello' //hoisting
let hello2 = 'hello2'
hello2 = 90
console.log(hello2)
const example = []
example.push(9)
console.log(example)


//шаблонные строки
console.log(`bvdfvbdf bvdfhbvhd djfnvkdjfv ${hello2} dcsc vdfv`)

//rest-параметры
function convertUSD(usd, ...soms) {
    console.log(usd, soms)
    return soms.map(i => i / usd)
}

console.log(convertUSD(89, 65656565, 67677777, 90000000))







