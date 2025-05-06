
const addButton = document.getElementById('add-button'); //create "Add" button
const saveButton = document.createElement('button'); //create "Save" button
saveButton.textContent = 'Save'; //name the button name as "Save"
const itemList = document.getElementById('list'); //get the id of <ul> element from index.html

let itemTitle = false;

//Execute when the user clicks the "Add" button
addButton.addEventListener('click', () => {
    
    const input = document.getElementById('item-name').value; //Get the value from the item-name text field.

    if(!itemTitle && input !== "") { //To display the title for list of items if the user enter the item name and click Add.
        const title = document.createElement('h4'); //create element <h4> to display the title
        title.textContent = 'Item List';
        itemList.appendChild(title); // append the <h4> to <ul>
        itemTitle = true;
    }

    if (input !== "") { // create li element if the item name is entered by the user

        //Get the item-name and display it in list.
        const li = document.createElement('li');       
        const itemName = document.createTextNode(input);
        li.appendChild(itemName);
        li.className = 'list-class';
        itemList.appendChild(li);

        //create Remove button and appned it to <li>
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        li.appendChild(removeButton);

        //create edit button and appned it to <li>
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        li.appendChild(editButton);


        //executes when the user clicks the remove button and it removes the item name.
        removeButton.addEventListener('click', () => {
            li.remove();
            removeButton.remove();
            editButton.remove();
        });

        //executes when the user clicks the edit button
        editButton.addEventListener('click', () => {
           
           editButton.remove();
           const editItem = document.createElement('input'); //create input field , so that user edit the item
           editItem.setAttribute('hidden', true);
           editItem.value = li.firstChild.nodeValue; //get the value of particular <li> 
           
           
           li.textContent = '';  // remove the value of li
           editItem.hidden =false; 
           li.appendChild(editItem); //Add input field
           li.appendChild(saveButton); //Add Save button
           li.appendChild(removeButton); //Add Remove Button

       
            //excutes the when th user click the save button
            saveButton.addEventListener('click', () => {
                let editValue  = document.createTextNode(editItem.value); //get the edited value from the input field
                editItem.hidden = true; //hide the input field, after the clicking save button.
                saveButton.remove(); //remove save button
                li.appendChild(editValue); 
                li.appendChild(removeButton); //Add Remove Button
                li.appendChild(editButton); //Add Edit Button

            });
        });
    }

document.getElementById('item-name').value = "";

});

