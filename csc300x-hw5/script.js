const DefaultApiUrl = "https://api.github.com/users/Alarman-prg/repos";

function getDefaultRepos() {
    fetch(DefaultApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response error");
            }
            return response.json();
        })
        .then((repoData) => {
            //console.log("Repo Data:", repoData);

            for (let index = 0; index < repoData.length; index++) {
                createCard(repoData[index].name, repoData[index].html_url, repoData[index].description, "Created: " + repoData[index].created_at, 
                "Updated: " + repoData[index].updated_at, "", "Languages: " + repoData[index].language, "Watchers: " + repoData[index].watchers_count);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
getDefaultRepos();

function getUsername() {
    var usernameApiUrl = "https://api.github.com/users/" + document.getElementById('userInput').value + "/repos";
    getRepos(usernameApiUrl);
}


function getRepos(usernameApiUrl) {
    fetch(usernameApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response error");
            }
            return response.json();
        })
        .then((repoData) => {
            //console.log("Repo Data:", repoData);

            for (let index = 0; index < repoData.length; index++) {
                createCard(repoData[index].name, repoData[index].html_url, repoData[index].description, "Created: " + repoData[index].created_at, repoData[index].updated_at,
                    "", repoData[index].language, repoData[index].watchers_count);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}


function createCard(title, href, desc, create, update, commits, langs, watchers) {
    // new card
    var card = document.createElement('div');
    card.classList.add('card');
    // name of repo
    var cardAnchor = document.createElement('a');
    cardAnchor.textContent = title;
    cardAnchor.href = href;
    // repo desc
    var cardDesc = document.createElement('p');
    cardDesc.textContent = desc;
    // repo creation date
    var cardCreate = document.createElement('p');
    cardCreate.textContent = create;
    // repo last update date
    var cardUpdate = document.createElement('p');
    cardUpdate.textContent = update;
    // # of commits
    var cardCommits = document.createElement('p');
    cardCommits.textContent = commits;
    // list of languages
    var cardLangs = document.createElement('p');
    cardLangs.textContent = langs;
    // list of watchers
    var cardWatchers = document.createElement('p');
    cardWatchers.textContent = watchers;

    card.appendChild(cardAnchor);
    card.appendChild(cardDesc);
    card.appendChild(cardCreate);
    card.appendChild(cardUpdate);
    card.appendChild(cardCommits);
    card.appendChild(cardLangs);
    card.appendChild(cardWatchers);

    document.getElementById('cardContainer').appendChild(card);
}

function removeRepos() {
    const cards = document.getElementsByClassName('card');
    const cardsArray = Array.from(cards);

    cardsArray.forEach(function(element) {
        element.remove();
    })
}