const url = `https://jsonplaceholder.typicode.com/users`

// fetch(url)
// .then((resp)=>resp.json()
// .then((data)=> {
//     data.forEach(user => {
//         document.write(`<p>${user.id} ${user.name}</p>`) 
//     });
  
// })
// )

// fetch(url)
// .then((resp)=>resp.json()
// .then((data)=> {
//     data.forEach((user) => {
//         document.write(`<p>${user.id} ${user.name}</p>`) 
//     });
  
// })
// )


//async await

const BASE_URL = `https://jsonplaceholder.typicode.com`

async function getData(_url){
    const {data} = await axios.get(_url)
    return data
}

async function writeUsers(){
    const users = await getData(BASE_URL+`/users`)
    users.forEach((user)=>{
        document.write(`<p>${user.name}</p>`)
    })
}
writeUsers()