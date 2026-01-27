let nazwa = "Akademia 108";

const sorting = function(name){
    let sortedNazwa = nazwa.split('').sort().join('');
    return sortedNazwa;
}

sorting(nazwa);
console.log(sorting(nazwa));



