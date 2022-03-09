import { baseUrl } from "./settings/api.js";

const articlesUrl = baseUrl + "articles";

(async function() {

    const container = document.querySelector(".articles-container");

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach(function(article) {
            container.innerHTML += `<div class="articles">
            <h4>${article.title}</h4>
            <p>${article.summary}</p>
            <p>${article.author}</p>
            <i class="far fa-heart"></i>
</div>`;
        });

        const favButtons = document.querySelectorAll(".articles i");

        console.log(favButtons);

        favButtons.forEach((button) => {
            button.addEvenListener("click", handleClick);
        });


        function handleClick() {
            console.log(event);
            event.target.classList.toggle("fa");
        }

    } catch (error) {
        console.log(error);


    }
})();