let pArray = document.getElementsByTagName("p")
console.log("nombre de tag html <p> :", pArray.length)

let coucou = document.getElementById("coucou").textContent
console.log("texte de coucou :", coucou)

let thirdA = document.getElementsByTagName("a")[2]
console.log("URL 3è tag <a> :", thirdA )

let countMe = document.getElementsByClassName("compte-moi").length
console.log("nombre de tags compte-moi :", countMe)

let countLi = document.querySelectorAll("li.compte-moi").length
console.log("nombre de tags li compte-moi :", countLi)

let countOlLi = document.querySelectorAll("ol li.compte-moi").length
console.log("nombre de tags li compte-moi dans ol :" , countOlLi)

let hiddenItem = document.querySelectorAll("div ul")[1].firstElementChild.textContent
console.log(hiddenItem)