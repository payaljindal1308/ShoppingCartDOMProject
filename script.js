
let UserInfo = {};

 
class ShoppingCart {

    constructor(user){
        this.userName = user;
        this.cart= document.querySelector('#'+user);
        this.purchasedItems = document.querySelector('#purchase'+user);
    }

    addItem = () => {
        const item = textbox.value;

        const li = document.createElement('li');
        li.textContent = item;
        li.setAttribute('class','cart'+this.userName);
        this.cart.append(li);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('class','checks'+this.userName);
        li.append(checkbox);

        const btn = document.createElement('button');
        btn.setAttribute('type','input');
        btn.setAttribute('class', 'deletebtn'+this.userName);
        btn.textContent = " Delete Item";
        btn.setAttribute('style', 'height: 40px;width: 100px; font-weight: Bold');
        li.append(btn);
    }

    deleteItem(item){
    item.parentNode.remove();
    }

    purchaseItem = () => {
        const cartItems = document.querySelectorAll('.cart'+this.userName);
        const checkboxes = document.querySelectorAll('.checks'+this.userName);
        checkboxes.forEach((item, index) => {
        if(item.checked === true){
                console.log(item);
                const li = document.createElement('li');
                li.setAttribute('class','purchased');
                li.textContent = cartItems[index].textContent.split(' ')[0];
                this.purchasedItems.append(li);
            }
        })
    }
}

// Header and background
document.body.style.backgroundColor = "lightgray";
const header = document.createElement('h2');
header.textContent = "Shopping Cart";
header.style.color = "hsl(237, 63%, 64%)";
document.body.append(header);

// Drop Down Menu
const menu = document.createElement('select');
const option = document.createElement('option');
menu.setAttribute('class','style');
document.body.append(menu);
option.textContent = "Choose User";
menu.append(option);

// Input Textbox
const textbox = document.createElement('input');
textbox.setAttribute('type','text');
textbox.setAttribute('class','style');
document.body.append(textbox);

// Add Button
const addButton = document.createElement("button");
document.body.append(addButton);
addButton.setAttribute('class','style');
addButton.textContent = 'Add Item';
addButton.style.fontWeight = "Bold";


// Purchase Button
const purchaseButton = document.createElement("button");
document.body.append(purchaseButton);
purchaseButton.setAttribute('class', 'style');
purchaseButton.textContent = 'Purchase Item';

const warning = document.createElement('h5');
warning.textContent = "Please Enter an item!! Entered Nothing!!";
document.body.append(warning);
warning.style.display = "none";

// Setting styles
const setStyle = document.querySelectorAll('.style');
setStyle.forEach(item =>{
    item.style.fontWeight = "Bold";
    item.style.margin = '5px';
    item.style.height = '40px';
    item.style.width = '100px';
    item.style.backgroundColor = "#9e9e9eed";
})


const createUsers = users => {
    users.forEach( userName => {

        UserInfo[userName] = {};

        // Defining divs for user's cart and purchased items
        let mainDiv = document.createElement('div');
        let cartDiv = document.createElement('div');
        let purchaseDiv = document.createElement('div');
        mainDiv.setAttribute('id','main'+userName);
        cartDiv.setAttribute("id","cartDiv"+userName);
        purchaseDiv.setAttribute("id","purchaseDiv"+userName);
        cartDiv.textContent= "Cart Items";
        purchaseDiv.textContent = "Purchased Items";
        document.body.append(mainDiv);
        mainDiv.style.display = "none";
        mainDiv.style.justifyContent = "space-around";
        mainDiv.append(cartDiv);
        mainDiv.append(purchaseDiv);       

        // User Cart Items List
        const userlist = document.createElement('ul');
        userlist.setAttribute('id', userName);
        document.body.append(userlist);
        userlist.style.display = "inline";

        // User Purchase Items List
        const userpurchaselist = document.createElement('ul');
        userpurchaselist.setAttribute('id', 'purchase'+userName);
        document.body.append(userpurchaselist);
        userpurchaselist.style.display = "inline";

        // Adding user to drop down menu
        const option = document.createElement('option');
        option.textContent = userName;
        menu.append(option);
        cartDiv.append(userlist);
        purchaseDiv.append(userpurchaselist);

});
}

// Event Handlers
let user;
menu.addEventListener('change', () => {
    UserInfo[menu.value] = new ShoppingCart(menu.value);
    console.log(UserInfo);
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.display = "none";
    })
    user = menu.value;
    const mainDiv = document.querySelector('#main'+user);
    const cartDiv = document.querySelector('#cartDiv'+user);
    const purchaseDiv = document.querySelector('#purchaseDiv'+user);
    mainDiv.style.display = 'flex';
    cartDiv.style.display = "inline";
    purchaseDiv.style.display = "inline";
});


addButton.addEventListener('click', ()=>{
    if(textbox.value === ''){
        warning.style.display = "flex";
    }
    else{
        warning.style.display = "none";
        UserInfo[user].addItem();
        textbox.value = "";
        const deletebtns = document.querySelectorAll('.deletebtn'+UserInfo[user].userName);
        deletebtns.forEach(item => {
        item.addEventListener('click', ()=> {
        UserInfo[user].deleteItem(item);
        });
        });
    }
});


purchaseButton.addEventListener('click', () => {
    UserInfo[user].purchaseItem();
    })
    
createUsers(['Alice','Bob','Charles','David'])
