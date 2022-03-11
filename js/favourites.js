import { getExistingFavs } from "./utils/favFunction.js";
import clearButton from "./components/clearButton.js";

const favourites = getExistingFavs();
clearButton();

const container = document.querySelector(".articles-container");

function getFavourite() {

    container.innerHTML = "";

    if (favourites.length === 0) {
        container.innerHTML = "No favourites yet";
    }

    favourites.forEach((article => {
        container.innerHTML += `<div class="articles">
                                    <h4>${article.title}</h4>
                                    <i class="fa fa-heart"></i>
                                </div>`;
    }));
}

getFavourite();