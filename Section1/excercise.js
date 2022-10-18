const smartphone = {
    brand : 'OnePlus',
    model : '9T',
    price : 56999,
    colors : ['black', 'white', 'grey']
}

console.log(smartphone.price);
console.log(smartphone.colors[1]);

const orders = [
    {id : 45678, name : 'Laptop', price : 56787},
    {id : 98345, name : 'Monitor', price : 9000},
    {id : 99583, name : 'Desk', price : 5000, color : ['red', 'green', 'yellow']},
]

// 3rd order product name
console.log(orders[2].name);
console.log(orders[2].color[2]);

// WAP to filter order with price less than 10000;
const filOrders = orders.filter( (ord) => { return ord.price < 10000 } );
console.log(filOrders);

// 1. Write syntax to change the third email
const user = {
    name : 'Raju',
    emails : ['raju@mail.com', 'abcd@mail.com', 'xyz@mail.com'],
    password : '12345'
};

// 2. WAP to filter users from lucknow
const userList = [
    {name : 'user1', email : 'user1@mail.com', address : 'lucknow'},
    {name : 'user2', email : 'user2@mail.com', address : 'lucknow'},
    {name : 'user3', email : 'user3@mail.com', address : 'delhi'},
    {name : 'user4', email : 'user4@mail.com', address : 'lucknow'},
    {name : 'user5', email : 'user5@mail.com', address : 'allahabad'},
]

// 3. WAP to calculate avg rating of all products
const products = [
    {name : 'Laptop', price : 23000, rating : 4.3},
    {name : 'Smartphone', price : 33000, rating : 2.1},
    {name : 'Tablet', price : 13500, rating : 3.4},
    {name : 'Monitor', price : 12000, rating : 4.3},
    {name : 'CPU', price : 30000, rating : 3.4},
]
