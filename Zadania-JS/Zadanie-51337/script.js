let nazwa = "Akademia 108";
console.log(nazwa)


const odwracaj = function(name) {
    let odwroconaNazwa = "";
for (let i = name.length - 1; i>=0; i--) {
    let last = name[i];
    odwroconaNazwa = odwroconaNazwa + last;
}
    console.log(odwroconaNazwa);

}

odwracaj(nazwa);
