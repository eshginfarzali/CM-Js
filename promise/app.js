const url = `https://jsonplaceholder.typicode.com/users`


// fetch(url)
// .then((resp)=>resp.json()
// .then((data)=> {
//     data.forEach(user => {
//         document.write(`<p>${user.id} ${user.name}</p>`) 
//     });
  
// })
// )

fetch(url)
.then((resp)=>resp.json()
.then((data)=> {
    data.forEach((user) => {
        document.write(`<p>${user.id} ${user.name}</p>`) 
    });
  
})
)