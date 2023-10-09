
const petName = document.getElementById("petName").value;
const ownerName = document.getElementById("ownerName").value;
const species = document.getElementById("species").value;
const breed = document.getElementById("breed").value;

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

    petList.forEach((pet) => {

        const newLi = document.createElement('li')

        newLi.innerText = `${pet.petName} ${pet.ownerName} - ${pet.species} ${pet.breed}`;

        contactsList.appendChild(newLi)
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

    contacts.push(new Pet)

    petName.value = ''
    ownerName.value = ''
    species.value = ''
    breed.value = ""

    renderList()
})