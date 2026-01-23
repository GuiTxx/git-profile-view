const base_URL = "https://api.github.com";

export async function fetchGitHubUser(username) {
    const base_URL = "https://api.github.com";
    try {
        const response = await fetch(`${base_URL}/users/${username}`);
        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Erro ao buscar perfil do usuário:", error);
        throw error;
    }
}

export async function fetchUserRepos(username) {
    try {
        const response = await fetch(`${base_URL}/users/${username}/repos?per_page=10&sort=created`); //sort = created é para ordenar os repositorios do mais recente para o mais antigo criado.
        if (!response.ok) {
            throw new Error("Repositórios não encontrados");
        }
        const reposData = await response.json();
        return reposData;
    } catch (error) {
        console.error("Erro ao buscar repositórios do usuário:", error);
        throw error;
    }
}