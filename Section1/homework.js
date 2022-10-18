let a = 0;
let b = 1;
let c = a+b;
console.log(a);
console.log(b);
for(let i=0;i<7;i++){
    console.log(c);
    [a, b] = [b, c]
    // a = b
    // b = c
    c = a+b
}

let num = 29;

let prime = true;
for(let i=2 ; i<num/2 ;i++){
    if(num % i === 0){
        console.log('not prime');
        prime = false;
        break;
    }
}
if(prime){
    console.log('prime number');
}


let count = 0;
for(let i=1;i<=1000;i++){
    if(Number.isInteger(i** 0.5)){
        console.log(i);
        count++;
    }
}

console.log(count);


// 1. WAP to filter numbers less than 100 - [ 234, 243546, 2343, 5,2, 23,35, 42 ]
let nums1 = [ 234, 243546, 2343, 5,2, 23,35, 42 ];

const res1 = nums1.map( (n) => { return n<100 } );
console.log(res1);


// 2. WAP add '₹' before every price in array - [ 23000, 45000, 12000 ];  [ '₹23000', '₹45000', '12000' ]
let prices = [ 23000, 45000, 12000 ];

const pricesRes = prices.map((p) => { return '₹'+p })
console.log(pricesRes);
// console.log(typeof(54678+''));

// 3. WAP to Generate an array of sqrt of numbers in following array : [ 16, 25, 49, 100, 144 ];
nums2 = [ 16, 25, 49, 100, 144 ];

const roots = nums2.map((n) => { return Math.sqrt(n) })
console.log(roots);