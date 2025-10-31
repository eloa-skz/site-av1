const musicas = [
    {
        titulo: "Dreamland",
        artista: "Luna Silva",
        capaUrl: "https://picsum.photos/200/200?random=1",
        curtida: false
    },
    {
        titulo: "Noite Estrelada",
        artista: "Os Místicos",
        capaUrl: "https://picsum.photos/200/200?random=2",
        curtida: false
    },
    {
        titulo: "Ondas do Mar",
        artista: "Maria Blue",
        capaUrl: "https://picsum.photos/200/200?random=3",
        curtida: false
    },
    {
        titulo: "Melodia do Sol",
        artista: "João Luz",
        capaUrl: "https://picsum.photos/200/200?random=4",
        curtida: false
    },
    {
        titulo: "Vento Suave",
        artista: "Brisa Band",
        capaUrl: "https://picsum.photos/200/200?random=5",
        curtida: false
    },
    {
        titulo: "Natureza Viva",
        artista: "Eco Group",
        capaUrl: "https://picsum.photos/200/200?random=6",
        curtida: false
    }
];

// Função para criar um card de música
function criarCardMusica(musica, index) {
    const corCoracao = musica.curtida ? 'red' : 'gray';
    return `
        <div class="musica-card">
            <img src="${musica.capaUrl}" alt="Capa de ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
            <div class="botoes">
                <button class="curtir-btn" data-index="${index}" style="color: ${corCoracao}">
                    ❤️ ${musica.curtida ? 'Curtido' : 'Curtir'}
                </button>
                <button class="tocar-btn" data-index="${index}">
                    ▶️ Tocar
                </button>
            </div>
        </div>
    `;
}

// Função para renderizar músicas filtradas
function renderizarMusicas(musicasFiltradas = musicas) {
    const containerMusicas = document.getElementById('lista-de-musicas');
    const cardsHTML = musicasFiltradas.map((musica, index) => 
        criarCardMusica(musica, index)
    ).join('');
    containerMusicas.innerHTML = cardsHTML;

    // Adiciona eventos aos botões
    adicionarEventosBotoes();
}

// Função para filtrar músicas
function filtrarMusicas(termo) {
    termo = termo.toLowerCase();
    return musicas.filter(musica => 
        musica.titulo.toLowerCase().includes(termo) ||
        musica.artista.toLowerCase().includes(termo)
    );
}

// Função para curtir música
function curtirMusica(index) {
    musicas[index].curtida = !musicas[index].curtida;
    renderizarMusicas();
}

// Função para tocar música
function tocarMusica(index) {
    const musica = musicas[index];
    alert(`Tocando ${musica.titulo} - ${musica.artista}`);
}

// Função para adicionar eventos aos botões
function adicionarEventosBotoes() {
    // Eventos dos botões de curtir
    document.querySelectorAll('.curtir-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            curtirMusica(index);
        });
    });

    // Eventos dos botões de tocar
    document.querySelectorAll('.tocar-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            tocarMusica(index);
        });
    });
}

// Inicialização quando o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    renderizarMusicas();

    // Adiciona evento de busca
    const inputBusca = document.getElementById('busca');
    inputBusca.addEventListener('input', (e) => {
        const termo = e.target.value;
        const musicasFiltradas = filtrarMusicas(termo);
        renderizarMusicas(musicasFiltradas);
    });
});