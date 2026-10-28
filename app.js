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
  isPaid: false,
};
let orderTotalPrice = (order.price*order.quantity)