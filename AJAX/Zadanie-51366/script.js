let button = document.getElementById('get-data');


const getData = () => {

fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
.then(res => res.json())
.then(data => {

    let pName = document.createElement('p');
    let pSurname = document.createElement('p');
    let pOccupation = document.createElement('p');
    let pCompany = document.createElement('p');
    let hr = document.createElement('hr');

    pName.innerText = `Imie: ` + data.imie;
    pSurname.innerText = `Nazwisko: ${data.nazwisko}`;
    pOccupation.innerText = `Zawod: ${data.zawod}`;
    pCompany.innerText = `Firma: ${data.firma}`;

    document.body.appendChild(pName);
    document.body.appendChild(pSurname);
    document.body.appendChild(pOccupation);
    document.body.appendChild(pCompany);
    document.body.appendChild(hr);
})
.catch(error => {
    console.error(error);
})
}

button.addEventListener('click', getData);