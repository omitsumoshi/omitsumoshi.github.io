document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})
// Przy kliknieciu w mobile hamburger otworzy sie menu ktore domyslnie ma display:none

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})


const createAppointment = (appointment) => {
    console.log(appointment);

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    }).then(res => res.json())
    .then(resJSON =>{
        appointmentMessage.classList.add('send');
        appointmentMessage.innerText = `Dziekujemy ${resJSON.name}, Twoja wizyta zostala umowiona!`;
    })
}


document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('appointment-form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        message: document.getElementById('appointment-message').value,
    
    }



    for (let i=0; i<formFields.length; i++) {
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        } 

        }
    if(allFields) {
       createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('erroe');
        appointmentMessage.innerText = 'Wypelnij wymagane pola';
    }
})