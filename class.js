class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    ageComparison(anotherUtent) {
        if (this.age > anotherUtent.age) {
            return `${this.firstName} é più vecchio di ${anotherUtent.firstName}`;
        } else if (this.age < anotherUtent.age) {
            return `${this.firstName} é più giovane di ${anotherUtent.firstName}`;
        } else
            return `${this.firstName} ha la stessa età di ${anotherUtent.firstName}`;
    }

}

const utent1 = new User("Maria","Benedetti",30,"Napoli");
const utent2 = new User("Francesco","Belli",40,"Roma");
const resultComparision=utent1.ageComparison(utent2)
console.log(resultComparision)
