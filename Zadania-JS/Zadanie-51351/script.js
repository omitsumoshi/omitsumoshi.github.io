
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');
let txtNode = document.createTextNode('Cities:');


const addCities = function(element) {

for(let i=0; i<element.length; i++){
    let liElement = document.createElement('li');
    let attrNode = document.createAttribute('class');
    attrNode.value = 'cities';
    liElement.setAttributeNode(attrNode);
    liElement.textContent = element[i];
    olElement.appendChild(liElement);
}
    document.body.appendChild(olElement);

}

addCities(cities);

