// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const raw = response.data.articles;
    const newArray = Object.values(raw);
    console.log("this is a new array", newArray);
    newArray.forEach(item => {
      item.forEach(el => {
        accessPoint.appendChild(newCard(el));
      });
    });
  });

//entry point
const accessPoint = document.querySelector(".cards-container");

const newCard = data => {
  //build parts
  const card = document.createElement("div");
  const heads = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("img");
  const image = document.createElement("img");
  const spanner = document.createElement("span");

  card.appendChild(heads);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(image);
  author.appendChild(spanner);

  heads.textContent = data.headline;
  spanner.textContent = data.authorName;
  image.src = data.authorPhoto;

  card.classList.add("card");
  heads.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  return card;
};
