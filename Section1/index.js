console.log('Hello JavaScript');

a = 667;

console.log(a);
console.log( typeof(a) );

myname = "Mubassir";
console.log(myname);

age = 16;

if(age >= 18){
    console.log('you are eligible for DL');
}else{
    console.log('you are not eligible');
}

// WAP to check if a number is divisible by 7 and 11.
num = 675;

if(num%7 == 0){
    console.log('divisible by 7');
}else if(num % 11 == 0){
    console.log('divisible by 11');
}else if(num%7 == 0 && num % 11 == 0){
    console.log('divisible by 7 as well as 11');
}

// WAP to check if a number is perfect square
console.log( 3 ** 4 );

// Math.sqrt()
nums2 = 35;
console.log(nums2 ** 0.5);
console.log(Number.isInteger(nums2** 0.5));
if(Number.isInteger(nums2** 0.5)){
    console.log('perfect square');
}
console.log('\n-----Truthy Values-------');
// truthy values
console.log(Boolean(-65));
console.log(Boolean('sh'));
console.log(Boolean(' '));

console.log('\n-----Falsy Values-------');
// falsy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Keywords
// Scope

if(true){
    m = 'Nice';
    var x = 'This only works in function';
    let y = "This should be local";
    const z = "This is local and constant";
    // z = "new value";
    // console.log(y);
}

console.log(m);
console.log(x);
// console.log(y);
// console.log(z);