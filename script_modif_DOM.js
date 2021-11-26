changeTitles = () => {
    let title = document.getElementsByClassName("jumbotron-heading")[0].textContent = "Ce que j'ai appris à THP"
    //console.log(title)

    let subtitle = document.getElementsByClassName("lead text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
    //console.log(subtitle)
};

changeCallToAction = () => {
    let mainButton = document.getElementsByClassName("btn btn-primary my-2")[0]
    mainButton.textContent = "OK je veux tester !"
    mainButton.href = "http://www.thehackingproject.org"

    let otherButton = document.getElementsByClassName("btn btn-secondary my-2")[0]
    otherButton.textContent = "Non merci"
    otherButton.href = "https://www.pole-emploi.fr/accueil/"
}

changeLogoName = () => {
    let navbarContent = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0]
    navbarContent.textContent = "The THP Experience"
    navbarContent.style.fontSize = "2em"
    //console.log(navbarContent)
}

populateImages = () => {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    
    let thumbnailArray = Array.from(document.getElementsByClassName('card-img-top'));
    
    
    console.log(thumbnailArray)


}

populateImages();
changeLogoName();
changeCallToAction();
changeTitles();