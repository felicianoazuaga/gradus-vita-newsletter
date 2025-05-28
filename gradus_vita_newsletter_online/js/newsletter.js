// JavaScript para facilitar a edição da newsletter online da Gradus Vita

// Função para atualizar o mês e ano da newsletter
function atualizarMesAno(mes, ano) {
    // Atualiza o título da página
    document.title = `Gradus Vita em Foco - ${mes} ${ano}`;
    
    // Atualiza o texto do banner
    const bannerText = document.querySelector('.banner-content p');
    if (bannerText) {
        bannerText.textContent = `${mes} ${ano} - Escola Gradus Vita – Educação Infantil e Ensino Fundamental Anos Iniciais | "Um mundo de conhecimento!"`;
    }
    
    // Atualiza o título do calendário
    const calendarioTitle = document.querySelector('.section-title[style*="color: var(--preto)"]');
    if (calendarioTitle) {
        calendarioTitle.textContent = `Calendário de ${mes}`;
    }
}

// Função para adicionar um novo evento
function adicionarEvento(data, mes, tipo, titulo, horario, descricao, corFundo) {
    // Criar elemento de evento
    const eventoHTML = `
        <div class="event-card" style="background-color: var(--${corFundo});">
            <div class="event-date">${data}</div>
            <div class="event-month">${mes}</div>
            <div class="event-type">${tipo}</div>
            <h3 class="event-title">${titulo}</h3>
            <div class="event-time">${horario}</div>
            <p>${descricao}</p>
        </div>
    `;
    
    // Adicionar à lista de eventos
    const eventosContainer = document.querySelector('.events-container');
    if (eventosContainer) {
        eventosContainer.innerHTML += eventoHTML;
    }
}

// Função para adicionar um novo aniversariante
function adicionarAniversariante(data, nome) {
    // Criar elemento de aniversariante
    const aniversarianteHTML = `
        <div class="card card-red">
            <div class="card-content">
                <span class="category-tag">${data}</span>
                <h3 class="card-title">🎂 ${nome}</h3>
            </div>
        </div>
    `;
    
    // Adicionar à lista de aniversariantes
    const aniversariantesContainer = document.querySelector('.section:nth-of-type(7) .cards-container');
    if (aniversariantesContainer) {
        aniversariantesContainer.innerHTML += aniversarianteHTML;
    }
}

// Função para atualizar o calendário
function atualizarCalendario(diasDoMes, diasComEventos) {
    // Esta função seria implementada para gerar dinamicamente o calendário
    // com base no número de dias do mês e marcar os dias com eventos
    console.log("Função para atualizar o calendário será implementada conforme necessidade");
}

// Exemplo de uso:
// atualizarMesAno('Junho', '2025');
// adicionarEvento('15', 'JUN', 'PRESENCIAL', '🎭 Festival de Teatro', 'Sábado', 'Apresentação dos alunos do 5º ano.', 'azul-insper');
// adicionarAniversariante('15 de Junho', 'Maria Silva');

// Nota: Este arquivo contém funções de exemplo que podem ser utilizadas
// para facilitar a edição da newsletter. Elas podem ser adaptadas conforme
// as necessidades específicas da equipe da Gradus Vita.
