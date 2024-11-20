const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character'
let characters = []

function getCharacters(url) {
fetch(url)
.then (response => {
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`)
        
    }
    return response.json()
})
.then ( data => {
    console.log(data);
    characters = data.results;
    showCharacters(characters);
})
.catch (error => {
    console.log("Ocurrió un error:", error);
});

};


function showCharacters (array) {
 let containerCharacters = document.getElementById("containerCharacters");
 containerCharacters.innerHTML = "";
array.forEach(character => { 
    containerCharacters.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-2">
                <div class="card" style="width: 18rem;">
                    <img src="${character.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Status: ${character.status}</li>
                        <li class="list-group-item">Species: ${character.species}</li>
                        <li class="list-group-item">Location: ${character.location.name}</li>
                    </ul>
                </div>
            </div>
    `
});
}





document.addEventListener("DOMContentLoaded", () => {
    getCharacters(URL_CHARACTERS)

})
