let actors;
let filter = "all";
const actorData = "actors.json";
const header = document.querySelector("h1");
// Colored bg depending on the movie. ChatGPT helped me with this one
const movieColors = {
  Goodfellas: "color_goodfellas",
  "Pulp Fiction": "color_pulp_fiction",
  Inception: "color_inception",
  "Fight Club": "color_fight_club",
};

// Click event on nav which runs filterActors function when clicked
const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filterActors));

// When #popup is clicked it doesn't display
document.querySelector(".close").addEventListener("click", () => (popup.style.display = "none"));

// Filters the actors and removes the class from the element and adds it to the new clicked element
function filterActors() {
  filter = this.dataset.movie;
  document.querySelector(".clicked").classList.remove("clicked");
  this.classList.add("clicked");
  header.textContent = this.textContent;
  showActors(actors);
  console.log("Actors filtered");
}

// This retrieves the data from the json file
async function getActorData() {
  console.log(actorData);
  const response = await fetch(actorData);
  actors = await response.json();
  console.log("Actors shown");
  showActors(actors);
}

// runs the showActors function from the getActorData function
function showActors(actors) {
  const container = document.querySelector("main");
  const template = document.querySelector("template").content;
  container.textContent = "";
  console.log("content removed");
  actors.forEach((actor) => {
    if (filter == actor.movie || filter == "all") {
      console.log("Actor data");
      const clone = template.cloneNode(true);
      clone.querySelector(".actor_name").textContent = actor.fullname;
      clone.querySelector(".movie_name").textContent = actor.movie;
      clone.querySelector("article").addEventListener("click", () => showActorDetails(actor));
      // Colored bg depending on the movie. ChatGPT helped me with this one
      clone.querySelector("article").classList.add(movieColors[actor.movie]);
      container.appendChild(clone);
      console.log("New actors");
    }
  });
}

function showActorDetails(actor) {
  console.log(actor);
  popup.style.display = "block";
  document.querySelector(".details_actor_name").textContent = actor.fullname;
  document.querySelector(".details_movie_name").textContent = actor.movie;
}

getActorData();
