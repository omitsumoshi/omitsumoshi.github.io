let employeesList = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

// let i=0
// for (let pracownik of employeesList.pracownicy) {
//     console.log(pracownik.firstName + pracownik.lastName + i);
//     i++
// }

const employeesFunction = function(object) {
    object.pracownicy.forEach (function (element, index) {
    console.log(index + " " + element.firstName + " " + element.lastName)
})
}

employeesFunction(employeesList);