

document.body.style.backgroundColor = "hsl(237, 63%, 64%)";
const header = document.createElement('h2');
header.textContent = "Shopping Cart";
header.style.color = "#00ffdff2";
document.body.append(header);

const menu = document.createElement('select');
const option = document.createElement('option');
menu.style.margin = "3px";
menu.style.height = '40px';
menu.style.width = '120px';
menu.style.backgroundColor = "#9e9e9eed";
menu.style.fontWeight = "Bold";
document.body.append(menu);
option.textContent = "Choose a user:";
menu.append(option);


const textbox = document.createElement('input');
textbox.setAttribute('type','text');
textbox.style.margin = '5px';
textbox.style.width = '100px';
textbox.style.height = '35px';
textbox.style.backgroundColor = "Lightgray";
document.body.append(textbox);


const addButton = document.createElement("button");
document.body.append(addButton);
addButton.style.margin = "5px";
addButton.style.height = '40px';
addButton.style.width = '100px';
addButton.style.backgroundColor = "#9e9e9eed";
addButton.textContent = 'Add Item';
addButton.style.fontWeight = "Bold";


const deleteButton = document.createElement("button");
document.body.append(deleteButton);
deleteButton.style.fontWeight = "Bold";
deleteButton.style.margin = '5px';
deleteButton.style.height = '40px';
deleteButton.style.width = '100px';
deleteButton.style.backgroundColor = "#9e9e9eed";
deleteButton.textContent = 'Delete Item';


// const purchaseButton = document.createElement("button");
// document.body.append(purchaseButton);
// purchaseButton.style.fontWeight = "Bold";
// purchaseButton.style.marginTop = '5px';
// purchaseButton.style.height = '40px';
// purchaseButton.style.width = '130px';
// purchaseButton.style.backgroundColor = "#9e9e9eed";
// purchaseButton.textContent = 'Purchase Item';


 const createUser = (Users) =>{
    Users.forEach(user => {
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        div1.style.fontWeight = "Bold";
        div2.style.fontWeight = "Bold";
        div1.textContent= "Cart Items";
        div2.textContent = "Purchased Items";
        div1.setAttribute("id","div1");
        div2.setAttribute("id","div2");
        document.body.append(div);
        div.style.display = "flex";
        div.style.justifyContent = "space-around";
        div.append(div1);
        div.append(div2);       
        const userlist = document.createElement('ul');
        userlist.setAttribute('id', user);
        document.body.append(userlist);
        userlist.style.display = "none";
        const option = document.createElement('option');
        option.textContent = user;
        menu.append(option);
        div1.append(List);
        div2.append(purchasedItems);
        div2.style.alignItems= "center";
    });
}

const addItem = () => {
    const userName = menu.value;
    const item = textbox.value;
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

const deleteItem = () => {
    const user = menu.value;
    const checkboxes = document.querySelectorAll('.checks'+user);
    const list = document.querySelectorAll('.list'+user);
    console.log(checkboxes);
    checkboxes.forEach((item, index) => {
        if(item.checked === true){
            item.parentNode.removeChild(item);
            list[index].parentNode.removeChild(list[index]);
        }
    })
}


const purchaseItem = () => {
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

menu.addEventListener('change', () => {
    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        list.style.display = "none";
    })
    const user = menu.value;
    const item = textbox.value;
    const list = document.querySelector('#'+user);
    list.style.display = "inline";
});


addButton.addEventListener('click', ()=>{
    addItem();
});
deleteButton.addEventListener('click', () => {
    deleteItem();
})

createUser(['Alice','Bob','Charles']);