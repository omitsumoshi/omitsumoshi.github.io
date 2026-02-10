
const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    let colors = ["red", "yellow", "green", "purple", "orange", "brown", "blue"];

    // p1.style.backgroundColor = colors[Math.floor(Math.random()* colors.length)];
    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

let btnSetBackground = document.getElementById('setbackground');

btnSetBackground.addEventListener('click', setBackground);

// jak dodamy nawiasy przy setBackground() to uruchomi sie ona od razu przy ladowaniu strony

