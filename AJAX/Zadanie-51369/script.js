let endOfPage = 0;

let preloading = false;

// Zmieniamy display preloadera, w css ma display: none, dzieki temu loader bedzie tlko pokazany na koncu strony

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
     preloading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloading = false;
}

const getData = () => {

    if(!preloading) {
        showPreloader();


    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {

        let body = document.body;
        let hr = document.createElement('hr');
        body.appendChild(hr);


        for (let user of data) {
            let pId = document.createElement('p'); 
            let pName = document.createElement('p'); 
            let pWebsite = document.createElement('p'); 

            pId.innerText = `User ID: ${user.id}`;
            pName.innerText = `User ID: ${user.name}`;
            pWebsite.innerHTML = `User ID: ${user.pWebsite} <br /> ----------`;

            body.appendChild(pId);
            body.appendChild(pName);
            body.appendChild(pWebsite);

        }
        hidePreloader();
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}}

const scrollToEndPage = () => {

    let d = document.documentElement;

    // height of the whole element content (webpage) including not visible content on the screen
    let scrollHeight = d.scrollHeight;
// number of pixels that we scrolled since the top (vertically)
    let scrollTop = d.scrollTop;
// inner height of the element in pixels(visible clients window??)
    let clientHeight = d.clientHeight;

    let sumOfScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);


// Zaokraglamy sobie wynik do gory 
    if(sumOfScrollTopClientHeight >= scrollHeight) {
// dodajemy "licznik" tego ile razy dojechalismy do konca
        endOfPage += 1;

        showPreloader();

        getData();

    }
}

window.addEventListener('scroll', scrollToEndPage);

