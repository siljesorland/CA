import { baseUrl } from "./settings/api.js";
import { getExistingFavs } from "./utils/favFunction.js";

const container = document.querySelector(".articles-container");

const articlesUrl = baseUrl + "articles";

const favourites = getExistingFavs();

(async function() {

    const container = document.querySelector(".articles-container");

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach((article) => {
            let cssClass = "far";

            const doesObjectExist = favourites.find(function(fav) {
                console.log(fav);

                return parseInt(fav.id) === article.id;
            });

            console.log(doesObjectExist);

            if (doesObjectExist) {
                cssClass = "fa";
            }

            container.innerHTML += `<div class="articles">
            <h4>${article.title}</h4>
            <p>${article.summary}</p>
            <p>${article.author}</p>
            <i class="far fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
</div>`;
        });
        const favButtons = document.querySelectorAll(".articles i");

        favButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });

        function handleClick() {
            this.classList.toggle("fa");
            this.classList.toggle("far");

            const id = this.dataset.id;
            const title = this.dataset.title;

            getExistingFavs();

            const currentFavs = getExistingFavs();
            console.log(currentFavs);

            const articleExists = currentFavs.find(function(fav) {
                return fav.id === id;
            });

            if (articleExists === undefined) {
                const product = { id: id, title: title };
                currentFavs.push(product);
                saveFavs(currentFavs);
            } else {
                const newFavs = currentFavs.filter((fav) => fav.id !== id);
                saveFavs(newFavs);
            }
        }

        function saveFavs(favs) {
            localStorage.setItem("favourites", JSON.stringify(favs));
        };






    } catch (error) {
        console.log(error);
    }
})();