
// const user = {id: 1, name: "abdubosit"}

// const friends = [{id: 2, name: 'friends1'}, {id: 3, name: "friend2",}]

// const getUser = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(user)
//         }, 2000)
//     })
// }

// const getFriends = (userId) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(friends)
//         }, 1000)
//     })
// }
// let userId;

// --callback hell

/* getUser()
    .then((user) => {
        userId = user.id
        getFriends(userId)
            .then((friends) => {
                console.log(user)
                console.log(friends)
            })
    }) */

// --promise Chain

/* getUser()
    .then((user) => {
        return getFriends(user.id)
    })
    .then((friends) => {
        console.log(user)
        console.log(friends)
    }) */

// async||await

/* async function asyncFunction() {
    try {
        const user = await getUser()
        const friends = await getFriends()
        console.log(user, friends)
    } catch(err) {
        console.log(err)
    }
}

asyncFunction() */

// --require qilish

// const { bir, ikki } = require("./modul")
// console.log(bir(),ikki())


const slugfy = require('slugify')

console.log(slugfy("some string", "_"))
