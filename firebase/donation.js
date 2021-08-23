import firebase from './config'

const donations = firebase.firestore().collection("donations")

const donationDetails = {
    amount: '500',
    imageUrl: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/96086444_3074405019284321_4089069952558956544_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEUiS-K3uuKA2rd1s985VvgagRxe8gwwf9qBHF7yDDB_2XeNvmB39p5I_SqSqbMUTG_VSuFN6M4MFY1tGJKnaeF&_nc_ohc=bkus9vQUDBcAX_ZN8hp&_nc_ht=scontent.fmnl4-6.fna&oh=698abda6882fe0da57aa61fcd02ad5e1&oe=6144C140',
    type: 'In-Kind',
    name: 'Cash'
}

export const addDonation = () => {
    const id = Math.random().toString(36).substring(7)
    donations.doc(id).set({...donationDetails, id:id})
        .then(
            doc => console.log('Added')
        )
        .catch(
            err => console.log('Failed to Add')
        )
}

export const updatePet = (id, newDonation) => {
    donations.doc(id).update(newDonation)
    .then(
        console.log('Updated')
    )
    .catch(
        console.log('Failed to Update')
    )
}

export const fetchAllDonations = () => {
    return (donations.get()
        .then(snapshot => {
            let donationList = []
            snapshot.forEach(doc => {
                donationList.push(doc.data())
            })
            return donationList
        })
        .catch(
            err => console.log(err)
        )
    )
}

export const removeDonation = (id) => {
    donations.doc(id).delete()
    .then(
        console.log('Deleted')
    )
    .catch(
        err => console.log(err)
    )
}