const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const user_name = document.getElementById('user_name')
const user_location = document.getElementById('user_location')
const followers_count = document.getElementById('followers_count')
const repos_count = document.getElementById('repos_count')
const img =document.querySelector("img")

const url = 'https://restcountries.com/v3.1/name/' 

// search_btn.addEventListener("click", () =>{
//     axios.get(url + input.value)
//     .then(({ data })=>{
//         console.log(data);
//         user_name.textContent = `${data[0].altSpellings[1]},${data[0].capital} `;
//         img.src = data[0].flags.png;
//         user_location.textContent = `Area: ${data[0].area}`
//         followers_count.textContent= `lat: ${data[0].latlng[0]} lng:${data[0].latlng[1]} `;
//     })
// })





// search_btn.addEventListener("click", async () =>{
//    const {data} = await axios.get(url + input.value)
    
//         user_name.textContent = `${data[0].altSpellings[1]},${data[0].capital} `;
//         img.src = data[0].flags.png;
//         user_location.textContent = `Area: ${data[0].area}`
//         followers_count.textContent= `lat: ${data[0].latlng[0]} lng:${data[0].latlng[1]} `;
// })



search_btn.addEventListener("click", async () =>{
    const {data: [data]} = await axios.get(url + input.value)
     
         user_name.textContent = `${data.altSpellings[1]},${data.capital} `;
         img.src = data.flags.png;
         user_location.textContent = `Area: ${data.area}`
         followers_count.textContent= `lat: ${data.latlng[0]} lng:${data.latlng[1]} `;
 })