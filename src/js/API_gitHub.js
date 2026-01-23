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