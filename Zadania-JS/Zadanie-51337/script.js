let nazwa = "Akademia 108";
console.log(nazwa)

let odwroconaNazwa = ""


for (let i = nazwa.length - 1; i>=0; i--) {
    let last = nazwa[i]
    odwroconaNazwa = odwroconaNazwa + last
}

console.log(odwroconaNazwa)
