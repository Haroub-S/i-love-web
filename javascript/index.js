(function displayData() {
    fetch("../data/data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
           let sortedData = data.sort((a, b) => b.sort - a.sort);

            sortedData.forEach((article) => {
                buildArticle(article);
            });
        })
        .catch((error) => {
            console.error(
                "There has been a problem with your fetch operation: ",
                error
            );
        });
})();

function buildArticle(data) {
    let articleWrapperSection = document.getElementById("articles-sect");

    let article = document.createElement("article");

    let date = document.createElement("h3");
    date.textContent = `Date: ${data.date}`;
    article.append(date);

    data.accordion.forEach(accordion => {

        let accordionButton = document.createElement("button");
        let accordionTextnode = document.createTextNode(`${accordion.accordionTitle}`);
        accordionButton.setAttribute("class", "accordion");
        accordionButton.append(accordionTextnode);
        article.append(accordionButton);


        let panelDiv = document.createElement("div");
        panelDiv.setAttribute("class", "panel");

        let ulItem = document.createElement("ul");

        accordion.accordionItems.forEach(item => {
            let liItem = document.createElement("li");
            let textNode = document.createTextNode(`${item.item}`);
            liItem.appendChild(textNode);
            ulItem.append(liItem);
        });

        panelDiv.append(ulItem);
        article.append(panelDiv);
    });

    articleWrapperSection.append(article);
}


function addEvents() {
    let accordion = document.getElementsByClassName("accordion");

    for (let a = 0; a < accordion.length; a++) {
        accordion[a].addEventListener("click", function () {
            let isActive = this.classList.contains("active");

            for (let b = 0; b < accordion.length; b++) {
                accordion[b].classList.remove("active");
                accordion[b].nextElementSibling.style.display = "none";
            }

            if (!isActive) {
                this.classList.add("active");
                this.nextElementSibling.style.display = "block";
            }
        });
    }
}


// timeout 1 second waiting for Dom to finish loading the page
setTimeout(addEvents, 1000);
