import firebase from './config'

const users = firebase.firestore().collection("users")

const userDetails = {
    firstName: '500',
    lastName: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/96086444_3074405019284321_4089069952558956544_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEUiS-K3uuKA2rd1s985VvgagRxe8gwwf9qBHF7yDDB_2XeNvmB39p5I_SqSqbMUTG_VSuFN6M4MFY1tGJKnaeF&_nc_ohc=bkus9vQUDBcAX_ZN8hp&_nc_ht=scontent.fmnl4-6.fna&oh=698abda6882fe0da57aa61fcd02ad5e1&oe=6144C140',
    email: 'In-Kind',
    password: 'Cash',
    contactNumber: 'Cash',
}

export const addUser = (id, userDetails) => {
    
    users.doc(id).set({ ...userDetails, id: id })
        .then(
            doc => console.log('Added')
        )
        .catch(
            err => console.log('Failed to Add')
        )
}

export const updateUser = (id, newUser) => {
    users.doc(id).update(newUser)
        .then(
            console.log('Updated')
        )
        .catch(
            console.log('Failed to Update')
        )
}

export const fetchAllUsers = () => {
    return (users.get()
        .then(snapshot => {
            let userList = []
            snapshot.forEach(doc => {
                userList.push(doc.data())
            })
            return userList
        })
        .catch(
            err => console.log(err)
        )
    )
}

export const removeUser = (id) => {
    users.doc(id).delete()
        .then(
            console.log('Deleted')
        )
        .catch(
            err => console.log(err)
        )
}