// Q1 implement sum(2)(3)(4)

// function getSum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(getSum(2)(3)(4))
// console.log(getSum(9)(11)(35))

//Q2 evaluate("sum")(4)(6), evaluate("mul")(4)(6)

// 

// implement infinite currying

function sum(a) {
    return function (b) {
        if (b) return sum(a + b);
        return a;
    }
}
console.log(sum(20)(1)(3)(4)(5)(6)(7)(8)());

