
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


//import axios from "axios";
const githubInfo  = axios.get("https://api.github.com/users/sirakisaias");

const entryPoint = document.querySelector('.cards');

axios
.get('https://api.github.com/users/sirakisaias')
.then((res) => {
  const githubFile = githubMaker(res.data);
  entryPoint.appendChild(githubFile);
})
.catch((err) => {
  console.log(err);
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
console.log(githubInfo);

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// githubFile.forEach(element => {
//   const newGit = githubMaker();
//   entryPoint.appendChild(newGit);
// });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function githubMaker (obj){
  const cardDiv = document.createElement('div');
  const imageSrc = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameh3 = document.createElement('h3');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const follower = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //add class list
  cardDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  nameh3.classList.add('name');
  paragraph1.classList.add('username');

  //text content
  imageSrc.setAttribute('src', obj.avatar_url);
  nameh3.textContent = obj.name;
  paragraph1.textContent = 'Location: ' + obj.location;
  profile.textContent = "Profil: " + obj.html_url;
  follower.textContent = "Followers: " + obj.followers;
  following.textContent = 'Following: ' + obj.following;
  bio.textContent = 'Bio: ' + obj.bio;

  //append
  cardDiv.appendChild(imageSrc);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(nameh3);
  cardInfo.appendChild(paragraph1);
  cardInfo.appendChild(paragraph2);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(follower);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(anchor);

  return cardDiv;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
