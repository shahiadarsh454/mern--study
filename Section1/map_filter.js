// Map
const nums = [2, 5, 7, 8, 9, 4];
// [1, 10, 14, 4, 18, 2]
// WAP to square each element of above array
// and store them in a new array.

let newArr = [];
for(let n of nums){
    newArr.push(n*n);
}
// console.log(newArr);


const newNums = nums.map( (n) => { return n*n } );
console.log(newNums);

// const newNums2 = nums.map( (n) => {
//     if(n%2==0){
//         return n/2;
//     }else{
//         return n*2;
//     }
// } )

// const newNums2 = nums.map( (n) => { return n%2==0 ? n/2 : n*2 } )
const newNums2 = nums.map( n =>  n%2==0 ? n/2 : n*2  )

console.log(newNums2);
console.log(nums);

// Filter

const filNums = nums.filter((n) => { return n%2!=0 });
console.log(filNums);

const prices = [300, 2400, 199, 599, 497, 200, 600];
// Only keep prices greater than 500.

const filPrices =  prices.filter( (p) => { return p>500 } );
console.log(filPrices);