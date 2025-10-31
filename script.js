const musicas = [
    // K-Pop
    { titulo: "Guerrilla", artista: "ATEEZ", capaUrl: "https://i.scdn.co/image/ab67616d0000b273f0a0f93d03f48c8e3c5c8f4a", estilo: "K-Pop", curtida: false },
    { titulo: "Dynamite", artista: "BTS", capaUrl: "https://i.scdn.co/image/ab67616d0000b273b8fa5f1e3b8f6e1d2a0e5c3f", estilo: "K-Pop", curtida: false },

    // Sertanejo
    { titulo: "Bloqueado", artista: "Gusttavo Lima", capaUrl: "https://i.scdn.co/image/ab67616d0000b273d2a1c0b3f4e1c2f5a6b1c2d3", estilo: "Sertanejo", curtida: false },
    { titulo: "Facas", artista: "Diego & Victor Hugo", capaUrl: "https://i.scdn.co/image/ab67616d0000b273c1b2a3d4e1f0a5c6b7d8e9f", estilo: "Sertanejo", curtida: false },

    // Pop
    { titulo: "Levitating", artista: "Dua Lipa", capaUrl: "https://i.scdn.co/image/ab67616d0000b273a8b2c1f0b1a2c3d4e5f6a7b8c", estilo: "Pop", curtida: false },
    { titulo: "Blinding Lights", artista: "The Weeknd", capaUrl: "https://i.scdn.co/image/ab67616d0000b273f2a3c4d5b6e7f8g9h0i1j2k3l", estilo: "Pop", curtida: false },

    // Rock
    { titulo: "Bohemian Rhapsody", artista: "Queen", capaUrl: "https://i.scdn.co/image/ab67616d0000b273a1b2c3d4e5f6g7h8i9j0k1l2m", estilo: "Rock", curtida: false },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", capaUrl: "https://i.scdn.co/image/ab67616d0000b273b3c4d5e6f7g8h9i0j1k2l3m4n", estilo: "Rock", curtida: false },

    // Hip-Hop
    { titulo: "SICKO MODE", artista: "Travis Scott", capaUrl: "https://i.scdn.co/image/ab67616d0000b273f1g2h3i4j5k6l7m8n9o0p1q2r", estilo: "Hip-Hop", curtida: false },
    { titulo: "HUMBLE.", artista: "Kendrick Lamar", capaUrl: "https://i.scdn.co/image/ab67616d0000b273a2b3c4d5e6f7g8h9i0j1k2l3m", estilo: "Hip-Hop", curtida: false },

    // Eletrônica
    { titulo: "Titanium", artista: "David Guetta", capaUrl: "https://i.scdn.co/image/ab67616d0000b273c1d2e3f4g5h6i7j8k9l0m1n2o", estilo: "Eletrônica", curtida: false },
    { titulo: "Wake Me Up", artista: "Avicii", capaUrl: "https://i.scdn.co/image/ab67616d0000b273d1e2f3g4h5i6j7k8l9m0n1o2p", estilo: "Eletrônica", curtida: false },

    // Jazz
    { titulo: "So What", artista: "Miles Davis", capaUrl: "https://i.scdn.co/image/ab67616d0000b273a3b4c5d6e7f8g9h0i1j2k3l4m", estilo: "Jazz", curtida: false },
    { titulo: "Take Five", artista: "Dave Brubeck", capaUrl: "https://i.scdn.co/image/ab67616d0000b273b4c5d6e7f8g9h0i1j2k3l4m5n", estilo: "Jazz", curtida: false }
];

// Função para renderizar músicas com filtro
function renderMusicas(filtro) {
    const lista = document.getElementById('lista-de-musicas');
    lista.innerHTML = '';

    const filtradas = filtro && filtro !== "Todos" 
        ? musicas.filter(m => m.estilo === filtro)
        : musicas;

    filtradas.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('musica-card');
        card.innerHTML = `
            <img src="${m.capaUrl}" alt="${m.titulo}">
            <h3>${m.titulo}</h3>
            <p>${m.artista}</p>
            <p class="estilo">${m.estilo}</p>
            <div class="botoes">
                <button class="curtir-btn ${m.curtida ? 'curtido' : ''}">❤️ Curtir</button>
                <button class="tocar-btn">▶️ Tocar</button>
            </div>
        `;

        card.querySelector('.curtir-btn').addEventListener('click', () => {
            m.curtida = !m.curtida;
            card.querySelector('.curtir-btn').classList.toggle('curtido');
        });

        card.querySelector('.tocar-btn').addEventListener('click', () => {
            alert(`Tocando ${m.titulo} - ${m.artista}`);
        });

        lista.appendChild(card);
    });
}

// Função para filtrar músicas por texto
function filtrarPorTexto(termo) {
    termo = termo.toLowerCase();
    return musicas.filter(musica => 
        musica.titulo.toLowerCase().includes(termo) ||
        musica.artista.toLowerCase().includes(termo)
    );
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderMusicas(); // renderiza todas inicialmente

    // Adiciona evento de busca
    const inputBusca = document.getElementById('busca');
    const selectEstilo = document.getElementById('filtro-estilo');

    inputBusca.addEventListener('input', (e) => {
        const termo = e.target.value;
        const estilo = selectEstilo.value;
        const musicasFiltradas = musicas.filter(m => {
            const matchTexto = m.titulo.toLowerCase().includes(termo.toLowerCase()) ||
                             m.artista.toLowerCase().includes(termo.toLowerCase());
            const matchEstilo = estilo === "Todos" || m.estilo === estilo;
            return matchTexto && matchEstilo;
        });
        renderMusicas(estilo, musicasFiltradas);
    });

    selectEstilo.addEventListener('change', (e) => {
        const estilo = e.target.value;
        const termo = inputBusca.value.toLowerCase();
        const musicasFiltradas = musicas.filter(m => {
            const matchTexto = m.titulo.toLowerCase().includes(termo) ||
                             m.artista.toLowerCase().includes(termo);
            const matchEstilo = estilo === "Todos" || m.estilo === estilo;
            return matchTexto && matchEstilo;
        });
        renderMusicas(estilo, musicasFiltradas);
    });
});

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