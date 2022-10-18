// 1. Using Function Keyword

function addNums(a, b){
    var c = a+b;
    console.log(c);
}
// console.log(c);

addNums(56, 98);

function checkEven(n){
    if(n%2==0){
        console.log('even');
    }else{
        console.log('odd');
    }
}

checkEven(67);

// 2. Using Function Keyword and Assignment Operator

const getFact = function(m){

    let f = 1;
    for(let i=2;i<=m;i++){
        f = f*i;
    }
    console.log(f);
}

getFact(6);

// 3. Arrow Function

const getProd = (x, y) => {
    console.log(x, y);
    console.log(x*y);
}

getProd(546, 87576);

// Create a program to find all prime number from
// 1 to 100


const getSum = (a, b, c) => {
    console.log(a+b+c);
    let s = a+b+c;

    return s;
}

let res = getSum(34, 435, 463);
console.log(res);

// 1. Whenever parameter is not specified it is passed as undefined.
// 2. If Return is not specified undefined is returned