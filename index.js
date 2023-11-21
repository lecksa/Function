// function checkName(name){
//     if(name[0] === 'A' || name[0] === 'a'){
//         console.log(name + ' ' + 'Good');
//     }else{
//         console.log(name + ' ' + 'Bad');
//     }
// }

// checkName('Alex')
// checkName('Billy')

//1-1
let your_age = prompt('Enter your age')

function ages(age) {
    if (age >= 18) {
        alert('You can come in')
    } else if (age < 18 && age > 0) {
        alert('You are not allowed')
    } else {
        alert('Your are Debil')
    }
}

ages(your_age)



//2-2
let a = +prompt('a')
let b = +prompt('b')

function number(num, num2) {
    let result = alert(`
    ${num} + ${num2} = ${num + num2}
    ${num} - ${num2} = ${num - num2}
    ${num} * ${num2} = ${num * num2}
    ${num} / ${num2} = ${num / num2}
    ${num} ** ${num2} = ${num ** num2}
    ${num} % ${num2} = ${num % num2}
    `)
}

number(a, b)



//3-3
function max_name(name, name2, name3) {
    let ind = Math.max(max_name.length)
    let result = max_name[ind - 1]
    console.log(ind);
    console.log(result);
}

max_name('Alex', 'George', 'Michael')



//5-5
let total = +prompt('Number of total')
let broken = +prompt('Number of broken')

function proportions(num, num2) {
    let proportion = alert(`Percentage of broken ${(num2 * 100) / num}%`)
}

proportions(total, broken)



//4-4
function min(num, num2) {
    let number = Math.min(num, num2)
    console.log(number);
}

min(1, 2)
// min([1, 2])
// min({a: 1, b: 2})
// min({a: 1, b: 2}, {a: 11, b: 12})