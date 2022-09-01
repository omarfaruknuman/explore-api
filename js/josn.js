const user = {id: 1, name: 'Amir Gorib', job: 'Actor'};
// JavaScript Object Notation (JSON)
const stringied = JSON.stringify(user);

console.log(user);
console.log(stringied);
/**
{ id: 1, name: 'Amir Gorib', job: 'Actor' }
{"id":1,"name":"Amir Gorib","job":"Actor"}
 */

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ronbir',
        country: 'Bangladesh'
    },
    products: ['laptop','mic','monitor','keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
// console.log(shop);
// const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);

// const shopObject = JSON.parse(shopJSON);
// console.log(shopObject);


// Object
const card = {
    name: 'Master',
    adderess: {
        no: '1',
        value: 'None',
        city: 'Ctg'
        },
        products:['Laptop','Mobile','Tab'],
        price: 352627,
        isNew: true
}

// console.log(card);
const cardSt = JSON.stringify(card);
console.log(cardSt);
const cardOb = JSON.parse(cardSt);
console.log(cardOb);