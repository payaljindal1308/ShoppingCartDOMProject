
let UserInfo = {};
const createUser = users => {
    users.forEach( userName => {
    const userlist = document.createElement('ul');
       userlist.setAttribute('id', userName);
       document.body.append(userlist);
       userlist.style.display = "none";
       const option = document.createElement('option');
       option.textContent = userName;
       menu.append(option);
       UserInfo[userName] = {};
});
}

// Header and background
document.body.style.backgroundColor = "hsl(237, 63%, 64%)";
const header = document.createElement('h2');
header.textContent = "Shopping Cart";
header.style.color = "#00ffdff2";
document.body.append(header);

// Drop Down Menu
const menu = document.createElement('select');
const option = document.createElement('option');
menu.setAttribute('class','style');
document.body.append(menu);
option.textContent = "Choose a user:";
menu.append(option);

// Input Textbox
const textbox = document.createElement('input');
textbox.setAttribute('type','text');
textbox.setAttribute('class','style');
document.body.append(textbox);

// Add Item Button
const addButton = document.createElement("button");
document.body.append(addButton);
addButton.setAttribute('class','style');
addButton.textContent = 'Add Item';
addButton.style.fontWeight = "Bold";

// Setting styles
const setStyle = document.querySelectorAll('.style');
setStyle.forEach(item =>{
    item.style.fontWeight = "Bold";
    item.style.margin = '5px';
    item.style.height = '40px';
    item.style.width = '100px';
    item.style.backgroundColor = "#9e9e9eed";
})


const purchaseButton = document.createElement("button");
document.body.append(purchaseButton);
purchaseButton.style.fontWeight = "Bold";
purchaseButton.style.marginTop = '5px';
purchaseButton.style.height = '40px';
purchaseButton.style.width = '130px';
purchaseButton.style.backgroundColor = "#9e9e9eed";
purchaseButton.textContent = 'Purchase Item';
 
class ShoppingCart {
    constructor(user){
        this.userName = user;
        this.list = document.querySelector('#'+this.userName);
    }
    addItem = () => {
        const item = textbox.value;
        const li = document.createElement('li');
        li.textContent = item;
        this.list.append(li);
        li.setAttribute('class','list'+this.userName);
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('class','checks'+this.userName);
        li.append(checkbox);
        const btn = document.createElement('button');
        btn.setAttribute('type','input');
        btn.setAttribute('class', 'deletebtn'+this.userName);
        btn.textContent = "Delete Item";
        btn.setAttribute('style', 'height: 40px;width: 100px');
        li.append(btn);
    }

    deleteItem(item){
    //const list = document.querySelectorAll('.list'+this.userName);
    item.parentNode.remove();
    }

    purchaseItem = () => {
        const userName = menu.value;
        UserInfo[userName].push(item);
        const list = document.querySelector('#'+userName);
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
        li.setAttribute('class','list'+userName);
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('class','checks'+userName);
        li.append(checkbox);
        console.log(list);
    }
}


menu.addEventListener('change', () => {
    UserInfo[menu.value] = new ShoppingCart(menu.value);
    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        list.style.display = "none";
    })
    const user = menu.value;
    const list = document.querySelector('#'+user);
    list.style.display = "inline";
});
addButton.addEventListener('click', ()=>{
    UserInfo[menu.value].addItem();
    const deletebtns = document.querySelectorAll('.deletebtn'+UserInfo[menu.value].userName);
    deletebtns.forEach(item => {
    item.addEventListener('click', ()=> {
    UserInfo[menu.value].deleteItem(item);
    })
    });
    });
createUser(['Alice','Bob','Charles'])
