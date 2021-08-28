import firebase from './config'

const pets = firebase.firestore().collection("pets")

const pet = {
    name: 'Denver Allam',
    imageUrl: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/96086444_3074405019284321_4089069952558956544_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEUiS-K3uuKA2rd1s985VvgagRxe8gwwf9qBHF7yDDB_2XeNvmB39p5I_SqSqbMUTG_VSuFN6M4MFY1tGJKnaeF&_nc_ohc=bkus9vQUDBcAX_ZN8hp&_nc_ht=scontent.fmnl4-6.fna&oh=698abda6882fe0da57aa61fcd02ad5e1&oe=6144C140',
    breed: 'Aspin',
    size: 'Small',
    status: 'Healhty',
    sex: 'Male',
    age: '2'
}

export const addPet = (pet) => {
    const id = Math.random().toString(36).substring(7)
    pets.doc(id).set({...pet, id:id})
        .then(
            doc => console.log('Added')
        )
        .catch(
            err => console.log('Failed to Add')
        )
}

export const updatePet = (id, newPet) => {
    pets.doc(id).update(newPet)
    .then(
        console.log('Updated')
    )
    .catch(
        console.log('Failed to Update')
    )

}

export const fetchAllPets = () => {
    return (
        pets.get()
        .then(snapshot => {
            let petList = []
            snapshot.forEach(doc => {
                petList.push(doc.data())
            })
            return petList
        })
        .catch(
            err => console.log(err)
        )
    )
}

export const removePet = (id) => {
    pets.doc(id).delete()
    .then(
        console.log('Deleted')
    )
    .catch(
        err => console.log(err)
    )
}



// if(firebase.apps.length === 0){
//     firebase.initializeApp(firebaseConfig)
//   }

// const animalRef = firebase.database().ref("animal");

// // export const addAnimal = animal => {
// //     animalRef.push(animal)
// // }


// // export const fetchAnimals = () => {
// //     let animals 
// //     let animalList = []
// //     animalRef.on("value", (snapshot) => {
// //         animals = snapshot.val()
// //         for(let id in animals) {
// //             animalList.push({id, ...animals[id]})
// //         }
// //     })
// //     return animalList
// // }

// // export const deleteAnimal = (id) => {
// //     let ref = animalRef.child(id);
// //     animalRef.remove()
// // }

// // export const updateAnimal = (id, animal) => {
// //     let ref = animalRef.child(id)
// //     var key = ref.push().key
// //     var updates = {}
// //     updates['/animal/' + key] = animal
// //     firebase.database().ref().update(updates)
// // }