# Guia de Edição da Newsletter Online Gradus Vita

Este documento contém instruções detalhadas sobre como editar e atualizar a newsletter online da Escola Gradus Vita para futuras edições mensais.

## Visão Geral

A newsletter online da Gradus Vita foi desenvolvida com base no design do site do Insper, utilizando HTML, CSS e JavaScript para criar um layout moderno, responsivo e facilmente editável. O template está estruturado em seções claramente definidas, permitindo atualizações simples do conteúdo sem necessidade de conhecimentos avançados em programação.

## Estrutura de Arquivos

- **index.html**: Arquivo principal contendo a estrutura da newsletter
- **css/styles.css**: Estilos visuais baseados no design do Insper
- **js/newsletter.js**: Funções JavaScript para facilitar edições
- **images/**: Pasta contendo todas as imagens utilizadas na newsletter

## Como Editar o Conteúdo

### 1. Atualizar Mês e Ano

Para atualizar o mês e ano da newsletter, você pode:

**Método Manual (HTML):**
1. Abra o arquivo `index.html` em um editor de texto
2. Localize a tag `<title>` e altere para o mês e ano desejados
3. No banner principal, localize o parágrafo dentro de `.banner-content` e atualize o mês e ano
4. Na seção de calendário, atualize o título para refletir o novo mês

**Método com JavaScript:**
1. Abra o arquivo `js/newsletter.js`
2. Descomente a linha `// atualizarMesAno('Junho', '2025');` no final do arquivo
3. Substitua 'Junho' e '2025' pelo mês e ano desejados
4. Salve o arquivo

### 2. Atualizar o Editorial

1. Abra o arquivo `index.html`
2. Localize a seção com o título "Editorial" (aproximadamente linha 60)
3. Modifique o texto dentro das tags `<p class="card-text">` para atualizar o conteúdo
4. Você pode adicionar ou remover parágrafos conforme necessário

### 3. Atualizar Destaques do Mês

1. Localize a seção "Destaques do Mês" (aproximadamente linha 75)
2. Cada destaque está dentro de um elemento `<div class="card card-red">` ou similar
3. Para cada destaque, você pode atualizar:
   - A imagem: altere o atributo `src` da tag `<img>`
   - A categoria: modifique o texto dentro de `<span class="category-tag">`
   - O título: altere o texto dentro de `<h3 class="card-title">`
   - A descrição: atualize o texto dentro de `<p class="card-text">`
   - O botão: modifique o texto e link do elemento `<a href="#" class="btn">`

Para adicionar um novo destaque, copie todo o bloco de um card existente e cole-o dentro do `<div class="cards-container">`, alterando o conteúdo conforme necessário.

### 4. Atualizar Próximos Eventos

**Método Manual (HTML):**
1. Localize a seção "Próximos Eventos" (aproximadamente linha 100)
2. Cada evento está dentro de um elemento `<div class="event-card">`
3. Para cada evento, atualize:
   - A data: modifique o número dentro de `<div class="event-date">`
   - O mês: altere a abreviação dentro de `<div class="event-month">`
   - O tipo: atualize o texto dentro de `<div class="event-type">`
   - O título: modifique o texto dentro de `<h3 class="event-title">`
   - O dia da semana: altere o texto dentro de `<div class="event-time">`
   - A descrição: atualize o parágrafo dentro da tag `<p>`

**Método com JavaScript:**
1. Abra o arquivo `js/newsletter.js`
2. Descomente a linha `// adicionarEvento('15', 'JUN', 'PRESENCIAL', '🎭 Festival de Teatro', 'Sábado', 'Apresentação dos alunos do 5º ano.', 'azul-insper');`
3. Modifique os parâmetros conforme necessário para o novo evento
4. Você pode adicionar múltiplas chamadas desta função para incluir vários eventos

### 5. Atualizar Comunicados Importantes

1. Localize a seção "Comunicados Importantes" (aproximadamente linha 130)
2. Atualize os itens da lista dentro das tags `<ul>` e `<li>`
3. Você pode adicionar ou remover itens conforme necessário

### 6. Atualizar Equipe em Destaque

1. Localize a seção "Equipe em Destaque" (aproximadamente linha 145)
2. Atualize a imagem alterando o atributo `src` da tag `<img>`
3. Modifique o título e texto conforme necessário

### 7. Atualizar Aniversariantes do Mês

**Método Manual (HTML):**
1. Localize a seção "Aniversariantes do Mês" (aproximadamente linha 160)
2. Cada aniversariante está dentro de um elemento `<div class="card card-red">`
3. Atualize a data dentro de `<span class="category-tag">`
4. Modifique o nome dentro de `<h3 class="card-title">`

**Método com JavaScript:**
1. Abra o arquivo `js/newsletter.js`
2. Descomente a linha `// adicionarAniversariante('15 de Junho', 'Maria Silva');`
3. Modifique os parâmetros para a data e nome do aniversariante
4. Adicione múltiplas chamadas desta função para incluir vários aniversariantes

### 8. Atualizar Calendário

1. Localize a seção "Calendário" (aproximadamente linha 180)
2. O calendário é uma tabela HTML com células para cada dia do mês
3. Atualize os números dos dias conforme o mês desejado
4. Para destacar dias com eventos, adicione o estilo de fundo colorido às células correspondentes

## Personalização Visual

### Cores

As cores principais do template estão definidas como variáveis CSS no arquivo `css/styles.css`:

```css
:root {
  --amarelo-insper: #FFCC00;
  --vermelho-insper: #E30613;
  --azul-insper: #0047BB;
  --verde-insper: #00A651;
  --rosa-insper: #F5A9B8;
  --lilas-insper: #9B59B6;
  /* outras cores... */
}
```

Para alterar qualquer cor, modifique o valor hexadecimal correspondente.

### Fontes

O template utiliza as fontes Georgia (para títulos) e Open Sans (para textos), carregadas do Google Fonts. Para alterar as fontes:

1. Modifique a tag `<link>` do Google Fonts no cabeçalho do HTML
2. Atualize as referências às fontes no arquivo CSS

## Publicação da Newsletter

Para publicar a newsletter online:

1. Faça upload de todos os arquivos (HTML, CSS, JS e imagens) para o servidor web da escola
2. Mantenha a estrutura de pastas intacta
3. A newsletter estará acessível através do arquivo index.html

## Dicas para Edições Futuras

1. **Faça backup**: Antes de editar, salve uma cópia da versão atual
2. **Teste localmente**: Abra o arquivo HTML em um navegador para verificar as alterações antes de publicar
3. **Otimize imagens**: Redimensione e comprima as imagens antes de adicioná-las à pasta `images/`
4. **Mantenha a consistência**: Use as mesmas cores, fontes e estilos em toda a newsletter
5. **Verifique em dispositivos móveis**: Teste a visualização em diferentes tamanhos de tela

## Solução de Problemas Comuns

- **Imagens não aparecem**: Verifique se o caminho está correto e se a imagem foi adicionada à pasta `images/`
- **Formatação quebrada**: Certifique-se de que todas as tags HTML estão corretamente fechadas
- **JavaScript não funciona**: Verifique se há erros no console do navegador (F12 > Console)
- **Problemas de responsividade**: Teste em diferentes dispositivos e ajuste o CSS conforme necessário

## Suporte

Para dúvidas ou problemas técnicos, entre em contato com o departamento de TI da escola ou com o desenvolvedor responsável pela implementação inicial da newsletter online.
