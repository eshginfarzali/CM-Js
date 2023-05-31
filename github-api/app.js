const form = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('usernameInput').value;
  if (username) {
    getUserProfile(username);
    getUserRepos(username);
  }
});

function getUserProfile(username) {
  const apiUrl = `https://api.github.com/users/${username}`;
  
  axios.get(apiUrl)
  .then((response) => {
    const profileData = response.data;
    const avatarUrl = profileData.avatar_url;
    displayAvatar(avatarUrl);
    // const nameUrl =profileData.name;
      // displayName( profileName);
    })
    .catch((error) => {
      displayError(error.message);
    });
}

function displayAvatar(avatarUrl) {
  resultDiv.innerHTML = `<img src="${avatarUrl}" alt="Profile photo">`;
}

function getUserRepos(username) {
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&per_page=10`;
  
  axios.get(apiUrl)
    .then((response) => {
      const repos = response.data;
      displayRepos(repos);
    })
    .catch((error) => {
      displayError(error.message);
    });
}

function displayRepos(repos) {
  const repoList = repos.map(repo => `<li><span class="repo">${repo.name}</span></li>`).join('');
  resultDiv.innerHTML += `<ul>${repoList}</ul>`;
}

function displayError(errorMessage) {
  resultDiv.innerHTML = `<p>Error: ${errorMessage}</p>`;
}