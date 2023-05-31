const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const user_name = document.getElementById('user_name')
const user_location = document.getElementById('user_location')
const followers_count = document.getElementById('followers_count')
const repos_count = document.getElementById('repos_count')
const img =document.querySelector("img")

const url = 'https://api.github.com/users/' 

search_btn.addEventListener("click", () =>{
    axios.get(url + input.value)
    .then(({ data })=>{
        console.log(data);
        user_name.textContent = `Name: ${data.name}`;
        img.src = data.avatar_url;
        user_location.textContent = `Location ${data.user_location}`
        followers_count.textContent= `Followers count: ${data.followers}`;
        repos_count.textContent = `Repo count ${data.public_repos}`;



    })
})