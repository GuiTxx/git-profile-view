import { fetchGitHubUser } from "./API_gitHub.js";
import { renderUserProfile } from "./profileView.js";

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector(".profile-results")

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert("Por favor, digite um nome de usuário do GitHub!");
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = "<p class='loading'>Carregando...</p>";

    try {
        const userData = await fetchGitHubUser(userName);
        renderUserProfile(userData, profileResults);
    } catch (error) {
        console.error("Erro ao buscar perfil do usuário:", error);
        alert("Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.");
        profileResults.innerHTML = "";
            
        }
});