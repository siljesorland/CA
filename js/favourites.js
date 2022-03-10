import { getExistingFavs } from "./utils/favFunction.js";

const favourites = getExistingFavs();

const container = document.querySelector(".articles-container");

if (favourites.length === 0) {
    container.innerHTML = "No favourites yet";
}

favourites.forEach((article => {
            container.innerHTML += `<div class="article">
                                    <h4>${article.title}</h4>
                                    <i class="fa fa-heart"></i>
                                </div>`;
        });