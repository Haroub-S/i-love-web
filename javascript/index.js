let dataArray = [
  {
    sort: 4,
    hasCode: true,
    date: "2024-09-17",
    accordion: [
      {
        accordionTitle: "Wat ik heb gedaan?",
        accordionItems: [
          {
            item: "bezig zijn met squad page ",
          },
          {
            item: "overleggen met mijn team over de squad page",
          },
          {
            item: "Bezig met javascript DOM manipulatie.",
          },
        ],
      },
      {
        accordionTitle: "Wat ga ik doen?",
        accordionItems: [
          {
            item: "Ik ga verder bezig met @media-Queries css",
          },
          {
            item: "Ook mijn I love web online zetten in Github pages",
          },
        ],
      },
      {
        accordionTitle: "3 Studie vragen.",
        accordionItems: [
          {
            item: "Wat is het verschil tussen de min-width en max-width eigenschappen in mediaquery's, en hoe kunnen ze worden gecombineerd?",
          },
          {
            item: "Hoe kun je specifieke schermgroottes of apparaattype targeten met CSS-mediaquery's?",
          },
          {
            item: "Wat is het doel van CSS-mediaquery's en hoe helpen ze bij het creëren van responsieve webontwerpen?",
          },
        ],
      },
    ],
  },
  {
    sort: 3,
    hasCode: false,
    date: "2024-09-12",
    accordion: [
      {
        accordionTitle: "Wat ik heb gedaan?",
        accordionItems: [
          {
            item: "schetsen gemaakt voor de squad page",
          },
          {
            item: "overleggen met mijn team over de squad page",
          },
          {
            item: "Bezig met javascript DOM manipulatie.",
          },
        ],
      },
      {
        accordionTitle: "Wat ga ik doen?",
        accordionItems: [
          {
            item: "Ik ga verder bezig met @media-Queries css",
          },
          {
            item: "Ook mijn I love web online zetten in Github pages",
          },
        ],
      },
      {
        accordionTitle: "3 Studie vragen.",
        accordionItems: [
          {
            item: "Wat is het verschil tussen de min-width en max-width eigenschappen in mediaquery's, en hoe kunnen ze worden gecombineerd?",
          },
          {
            item: "Hoe kun je specifieke schermgroottes of apparaattype targeten met CSS-mediaquery's?",
          },
          {
            item: "Wat is het doel van CSS-mediaquery's en hoe helpen ze bij het creëren van responsieve webontwerpen?",
          },
        ],
      },
    ],
  },
  {
    sort: 2,
    hasCode: false,
    date: "2024-09-11",
    accordion: [
      {
        accordionTitle: "Wat ik heb gedaan?",
        accordionItems: [
          {
            item: "Ik heb CSS Grid oefeningen gedaan in codepen.io",
          },
        ],
      },
      {
        accordionTitle: "Wat ga ik doen?",
        accordionItems: [
          {
            item: "Ik ga verder oefnen met css grid thuis",
          },
        ],
      },
      {
        accordionTitle: "3 studievragen",
        accordionItems: [
          {
            item: "Wat is CSS Grid en hoe verschilt het van andere lay-outmethoden zoals Flexbox?",
          },
          {
            item: "Hoe definieer je rijen en kolommen in een CSS Grid-container en wat is het verschil tussen de eigenschappen grid-template-rows en grid-template-columns?",
          },
          {
            item: "Hoe kun je CSS Grid gebruiken om een lay-out te maken die flexibel blijft bij het schalen van het scherm?",
          },
        ],
      },
      {
        accordionTitle: "linkjes",
        accordionItems: [
          {
            item: "Item 3.1",
          },
          {
            item: "Item 3.2",
          },
          {
            item: "Item 3.2",
          },
        ],
      },
    ],
  },
  {
    sort: 1,
    hasCode: false,
    date: "2024-09-10",
    accordion: [
      {
        accordionTitle: "Wat ik heb gedaan?",
        accordionItems: [
          {
            item: "bezig met I ❤️ Web website klaarzetten",
          },
          {
            item: "Oefenen met javascript dom manipulatie",
          },
        ],
      },
      {
        accordionTitle: "Wat ga ik doen?",
        accordionItems: [
          {
            item: "Schets maken voor mijn I ❤️ Web Website",
          },
          {
            item: "Website op GitHub zetten",
          },
        ],
      },
      {
        accordionTitle: "Studievragen",
        accordionItems: [
          {
            item: "Waarom is het belangrijk dat je aan dev life cycle moet aanhouden?",
          },
        ],
      },
    ],
  },
  {
    sort: 0,
    hasCode: false,
    date: "2024-09-09",
    accordion: [
      {
        accordionTitle: "Wat ik heb gedaan?",
        accordionItems: [
          {
            item: "CSS bug fixes in mijn visitekaartje website",
            code: "function test() {\n\tconsole.log('testing my might');\n}",
            language: "javascript",
          },
          {
            item: "leren objecten in javascript", 
          },
        ],
      },
      {
        accordionTitle: "Wat ga ik doen?",
        accordionItems: [
          {
            item: "verder met javascript objecten leren.",
            code: "const name = (firstName, lastName) {\n\t\treturn firstName + LastName;\n\t}",
            language: "javascript"
          },
          {
            item: "html styles aanpassen met behulp va javascript.",
          },
          
        ],
      },
      {
        accordionTitle: "Studie Vragen",
        accordionItems: [
          {
            item: "Wat is javascript?",
          },
          {
            item: "Wat kun je met javascript?",
          },
        ],
      },
    ],
  },
];

(function displayData() {
  let sortedData = dataArray.sort((a, b) => b.sort - a.sort);

  sortedData.forEach((article) => {
    buildArticle(article);
  });
})();

function buildArticle(data) {
  let articleWrapperSection = document.getElementById("articles-sect");

  let article = document.createElement("article");

  let date = document.createElement("h3");
  date.textContent = `Date: ${data.date}`;
  article.append(date);

  data.accordion.forEach((accordion) => {
    let accordionButton = document.createElement("button");
    let accordionTextnode = document.createTextNode(
      `${accordion.accordionTitle}`
    );
    accordionButton.setAttribute("class", "accordion");
    accordionButton.append(accordionTextnode);
    article.append(accordionButton);

    let panelDiv = document.createElement("div");
    panelDiv.setAttribute("class", "panel");

    let ulItem = document.createElement("ul");

    accordion.accordionItems.forEach((item) => {
      let liItem = document.createElement("li");
      let textNode = document.createTextNode(`${item.item}`);
      liItem.appendChild(textNode);

      let preTag = document.createElement("pre");

      if (item.code) {
        let codeTag = document.createElement("code");
        codeTag.setAttribute("class", `language-${item.language}`);
        let codeTextNode = document.createTextNode(`${item?.code}`);
        codeTag.appendChild(codeTextNode);
        preTag.appendChild(codeTag);
      }

      ulItem.appendChild(preTag);
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
