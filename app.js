//exercise 1
const menuItems=['Tea','Coffee','Sandwich','Cookie']
console.log(menuItems[0])
console.log(menuItems[2])
console.log(menuItems.length)
console.log(menuItems[menuItems.length-1])
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
console.log(waitingCustomers.length)
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
console.log(`Total price: ${totalPrice}`)
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
drink.isAvailable=true
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
console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`)
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
        console.log(`${element.name} needs to finish the homework.`)
    }
})
console.log(`completed homework: ${completedCount}`)
//////////////////////
//exercise 11
function calculateTotal(itemPrices){
    let total=0
    itemPrices.forEach((element)=>{
        total=total+element
        
    })
    return total
}
console.log(calculateTotal([2, 5, 3])); // 10
console.log(calculateTotal([4, 4]));    // 8
console.log(calculateTotal([7]));       // 7
console.log(calculateTotal([]));        // 0
///////////////////////////////////////////////////
//exercise 12
const bill = {
  customerName: 'Noor',
  items: [
    { name: 'Tea', price: 2, quantity: 2 },
    { name: 'Sandwich', price: 4, quantity: 1 },
    { name: 'Cookie', price: 1, quantity: 3 },
  ],
  getTotal() {
    let total=0
    bill.items.forEach((element)=>{
        total= total+(element.price*element.quantity)
    })
    return total  
  }
}
console.log(bill.getTotal()); // 11
bill.items.push({
  name: 'Water',
  price: 1,
  quantity: 2,
});

console.log(bill.getTotal()); // 13



