# 🔍 GitHub Profile View

Aplicação web para buscar e visualizar perfis de usuários do GitHub, exibindo informações de perfil, estatísticas e repositórios de forma clara e responsiva.

## ✨ Funcionalidades

- 🔎 **Busca de Usuários**: Procure qualquer usuário do GitHub pelo nome de usuário
- 👤 **Visualização de Perfil**: Exiba avatar, nome e bio do usuário
- 📊 **Estatísticas**: Mostre quantidade de seguidores e seguindo
- 📚 **Repositórios**: Lista de repositórios do usuário com informações
- ⌨️ **Busca por Enter**: Realize buscas pressionando a tecla Enter
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- 🎨 **Interface Atraente**: Gradiente colorido e animações suaves

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e animações
- **JavaScript (ES6+)**: Lógica e manipulação do DOM com módulos
- **GitHub API**: Consumo de dados públicos de usuários
- **Responsive Design**: Mobile-first approach

## 📁 Estrutura do Projeto

```
git-profile-view/
├── index.html                 # Arquivo principal HTML
├── README.md                  # Este arquivo
├── src/
│   ├── css/
│   │   ├── reset.css         # Reset de estilos padrão
│   │   ├── styles.css        # Estilos principais
│   │   ├── animations.css    # Animações
│   │   └── responsive.css    # Media queries
│   └── js/
│       ├── index.js          # Arquivo principal com event listeners
│       ├── API_gitHub.js     # Funções para consumir a API
│       └── profileView.js    # Funções para renderizar o perfil
```

## 🚀 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/git-profile-view.git
```

2. Navegue até a pasta do projeto:
```bash
cd git-profile-view
```

3. Abra o arquivo `index.html` em seu navegador

### Uso

1. Digite o nome de usuário do GitHub no campo de busca
2. Clique no botão "Buscar" **ou** pressione **Enter**
3. Visualize as informações do perfil, estatísticas e repositórios

## 📋 API Endpoints Utilizados

- `GET /users/{username}` - Dados do perfil do usuário
- `GET /users/{username}/repos` - Lista de repositórios

## 🎨 Personalização

### Cores (CSS Variables)

As cores podem ser personalizadas no arquivo `src/css/styles.css`:

```css
:root {
  --primary: hsl(222.2, 47.4%, 11.2%);
  --ring: hsl(262, 100%, 76%);
  --border: hsl(214.3, 31.8%, 91.4%);
  /* ... outras variáveis */
}
```

### Espaçamento e Tipografia

Todos os tamanhos de fonte, espaçamento e sombras são definidos como variáveis CSS para fácil manutenção.

## 📝 Módulos JavaScript

### `API_gitHub.js`
- `fetchGitHubUser(username)` - Busca dados do usuário
- `fetchUserRepos(username)` - Busca repositórios do usuário

### `profileView.js`
- `renderProfile(userData, userRepos, container)` - Renderiza o perfil na tela

### `index.js`
- Gerencia event listeners
- Coordena as chamadas às funções de API e renderização

## 🔄 Fluxo da Aplicação

1. Usuário digita nome de usuário no input
2. Clica no botão ou pressiona Enter
3. Função `handleSearch()` é acionada
4. Requisições são feitas para a GitHub API
5. Dados são renderizados na tela
6. Erros são tratados e alertas são exibidos ao usuário

## ⚠️ Tratamento de Erros

- Validação de input vazio
- Verificação de resposta da API
- Alertas amigáveis ao usuário
- Logs de erro no console para debugging

## 💡 Boas Práticas Implementadas

- ✅ Modularização de código (módulos ES6)
- ✅ Separação de responsabilidades
- ✅ Variáveis CSS reutilizáveis
- ✅ Design responsivo
- ✅ Tratamento de erros
- ✅ Nomes descritivos em português
- ✅ Código limpo e bem organizado

## 📱 Suporte a Dispositivos

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou enviar pull requests com melhorias.

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.