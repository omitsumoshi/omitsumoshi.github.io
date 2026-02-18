// Najpierw musimy pobrac sobie button (po ID) do zmiennej

let btnGetData = document.getElementById('get-data');
console.log(btnGetData);

const getData = () => {
// Najpierw pobieramy dane metoda fetch i podajemy zrodlo
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    // Teraz ustalamy co ma sie wydarzyc jak dane juz beda(obsluga obiektu)
    // Funkcja fetch zwraca nam promise<response> i jak promise sie rozwiaze to mamy odpowiedz. Ktora ma property .json wiec mozemy przedstawic pobrane dane jako json
    .then(res => res.json())
    .then(data => {
// Tworzymy nowa zmienna, ktora oznacza utworzenie nowego elementu - paragrafu 
        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        // Dodajemy text do nowo utworzonych paragrafow i laczymy go z danymi jakie zwrocilo nam Promise, ktorym wczesniej dodalismy .json

        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.userId}`;
        pTitle.innerText = `Title : ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        // Dodajemy utworzone paragrafy z trescia do body naszego html
        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);


        
    })
    .catch(error => {
        console.error(error);
    })

}

// Potem musimy ustawic addeventlistener na buttonie, wydarzenie przy kliknieciu a druga wartosc to funkcja ktora chcemy
btnGetData.addEventListener('click', getData)