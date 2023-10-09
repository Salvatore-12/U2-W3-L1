
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

const pets = []

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

}



const renderList = function () {

    const petList = document.querySelector('ul')

    petList.innerHTML = ''

    pets.forEach((pet) => {

        const newLi = document.createElement('li')

        newLi.innerText = `${pet.petName} ${pet.ownerName} - ${pet.species} ${pet.breed}`;

        petList.appendChild(newLi)
    })
}

const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e) {
    e.preventDefault()
    const newPet = new Pet(
        petName.value,
        ownerName.value,
        species.value,
        breed.value
    )

    console.log('ANIMALE CREATO', newPet)

    pets.push(newPet)

    petName.value = ''
    ownerName.value = ''
    species.value = ''
    breed.value = ""

    renderList()
})