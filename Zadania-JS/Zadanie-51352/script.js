

let button = document.getElementsByTagName('button')[0];

const addNewLi = () => {
    let newLi = document.createElement('li');
    let attrNode = document.createAttribute('class');
    attrNode.value = 'item';
    newLi.setAttributeNode(attrNode);
    let list = document.getElementById('items');
    newLi.textContent = 'Item ' + (list.childElementCount + 1);
    list.appendChild(newLi);

}

button.addEventListener('click', addNewLi);


