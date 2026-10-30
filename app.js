//exercise 1
const menuItems=['Tea','Coffee','Sandwich','Cookie']

menuItems.forEach((element) =>{console.log(element)})
/*
Tea
Sandwich
4
Cookie

*/
///////////////////////
//exercise 2
const waitingCustomers = ['Aisha', 'Omar', 'Noor'];
waitingCustomers[1]='Ali'
waitingCustomers.push('Dana')
let waitListLength = waitingCustomers.length
let removedCustomer = waitingCustomers.pop()
console.log(removedCustomer)
console.log(waitingCustomers)
/////////////////////
//exercise 3
const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];
drinks.forEach((element,index)=>{
    console.log(`${index+1}. ${element}`)
})
//////////////////////////////
//exercise 4
const prices = [2, 5, 3, 6, 4];
let totalPrice=0
let expansiveItemCount=0
prices.forEach((element)=>{
    totalPrice += element
    if(element>=4){
        expansiveItemCount++
    }
})
console.log(`Total price ${totalPrice}`)
console.log(`Items costing 4 or more: ${expansiveItemCount}`)
/////////////////////////////
//exercise 5
const cafe ={
    name: 'Campus Café',
    location: 'Building A',
    seats: 24,
    isOpen: true
}
console.log(`${cafe.name} is located in ${cafe.location}`)
console.log(`Available seats: ${cafe.seats}`)
/////////////////////
//exercise 6
const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
};
drink.size='large'
drink.price= drink.price+1
drink.iasAvailable=true
delete drink.temporaryCode
console.log(drink)
///////////////////////
//exercise 7
const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: true,
};
order.orderTotal = (order.price*order.quantity)
console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items`)
console.log(`Order total: ${order.orderTotal}`)
if (order.isPaid){
    console.log("Ready to prepare")
}
else{
    console.log('Waiting for payment')
}
///////////////////////////
//exercise 8
const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
};
console.log(studySession.topics[0])
studySession.topics.push('Objects')
console.log(studySession.topics.length)
studySession.topics.forEach((element)=>{
    console.log(element)
})
studySession.room='Lab 3'
console.log(`${studySession.title} will take place in ${studySession.room}.`)
console.log(studySession.topics)
////////////////////
//exercise 9
const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
];
console.log(products[1].name)
products[1].price=5
products.push({name: 'juice', price:3})
products.forEach((element,index)=>{
    //displaying two ways the info within the array of objects can be called, (BD)
    console.log(`${products[index].name} costs ${element.price} BD.`)
})
///////////////////////////////////////
//exercise 10
const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};
console.log(studyGroup.name)
console.log(studyGroup.members.length)
let completedCount=0
studyGroup.members.forEach((element)=>{
    if(element.completedHomework){
        completedCount++
    }
    else{
        console.log(`${element.name} needs to finish the homework`)
    }
})
console.log(`completed homework: ${completedCount}`)
