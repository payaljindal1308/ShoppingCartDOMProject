/*
    Write a DOM application from scratch. (empty body)

    Shopping Cart -
        - It shows list of items that user wants to purchase.

        Tasks:
        1. Take input from user using input element.
        2. Add the taken input to the list.
        3. Provide a delete button to delete items from the list.
        4. Provide a way to let the user tick mark an item in the list. (Tick implies item is purchased.)
        5. Provide a way to let the user to untick an already ticked mark item. 


        Add the above abilities for bunch of users.
        Hint: 
            - Add a dropdown to select a particular user and see their shoppinglist.
            - You need to use closure or class to implement this behaviour. Feel free to use either of that.

        Also, Try to make input element controlled. (Not compulsory)

*/

// Dropdown Created
const UsersDropDown = document.createElement('select');
const option = document.createElement('option');
option.textContent = "Select User";
document.body.append(UsersDropDown);

// User Input
const textBox = document.createElement('input');
textBox.setAttribute('type','text');
document.body.append(textBox);

// Add Button
const addButton = document.createElement('button');
addButton.textContent = "Add Item";
document.body.append(addButton);

// Delete Button
const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete Item";
document.body.append(deleteButton);

// Cart Items List
const cart = document.createElement('div');
const cartItems = document.createElement('ul');
document.body.append(cart);
cart.append(cartItems);


let UsersInfo = {};

// Add users
const createPerson = UsersArray => {
 UsersArray.forEach(element => {
     UsersInfo[element] = [];
     const option = document.createElement('option');
     option.textContent = element;
     UsersDropDown.append(option);
     console.log(option);
 });
}

//Add Item 
const addItem = itemName => {
    return {
        name : itemName,
        checked: false
    }
}


// Add item to user
const addItemToUserCart = () => {
    const user = UsersDropDown.value;
    const item = textBox.textContent;
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    li.append(checkbox);
    li.textContent = item;
    cartItems.append(li);
    UsersInfo[user].push(item);
    console.log(UsersInfo);
}

createPerson(["Alice","Bob","Charles"]);
addButton.addEventListener('click',addItemToUserCart);



