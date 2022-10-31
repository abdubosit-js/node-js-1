const user = {id: 1, name: "abdubosit"}

const friends = [{id: 2, name: 'friends1'}, {id: 3, name: "friend2",}]

const getUser = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(user)
        }, 2000)
    })
}

const getFriends = (userId) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(friends)
        }, 1000)
    })
}

// callback hell

let userId;
getUser().then((user) => {
    userId = user.id
    getFriends(userId).then((friends) => {
        console.log(user)
        console.log(friends)
    })
})

// -- promise Chain

