export function renderProfile(userData,userRepos, container) {

    const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <div class="repo-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || 'Não informado'}</span>
                </div>
            </div>
        </a>
        `).join('') : '<p>Este usuário não possui repositórios públicos.</p>';





    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Foto de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || "Não possui bio cadastrada 😢"}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👤 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👤 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
        
        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories-list">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}