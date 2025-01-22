//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Variável que armazenará os nomes dos amigos.
let amigos = [];

// Função para adicionar um amigo à lista.
function adicionarAmigo() {

    let input = document.getElementById('amigo'); // Obtém o input pelo ID.
    let nome = input.value.trim(); // Remove espaços

    if (nome && /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) { // Valida o nome com a expressão regular.
        amigos.push(nome); // Adiciona o nome a lista, removendo espaços extras.
        atualizarLista(); // Atualiza a exibição da lista no HTML
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Função para atualizar a lista de amigos no HTML.
function atualizarLista() {
    let ul = document.getElementById('listaAmigos'); // Obtém a lista pelo ID.
    ul.innerHTML = ''; // Limpa a lista atual.

    // Adiciona cada amigo como um item na lista.
    amigos.forEach((amigo) => {
        let li = document.createElement('li'); // Cria um novo elemento <li>.
        li.textContent = amigo; // Define o texto do item.
        ul.appendChild(li); // Adiciona o item à lista.
    });
}

// Função para sortear o amigo.
function sortearAmigo() {
    let resultado = document.getElementById('resultado'); // Obtém o elemento onde o resultado será exibido.
    let ulListaAmigos = document.getElementById('listaAmigos'); // Elemento da lista de amigos.
    resultado.innerHTML = ''; // Limpa qualquer resultado anterior.

    // Verifica se há amigos disponíveis no array.
    if (amigos.length === 0) {
        alert('Nenhum amigo disponível para o sorteio. Adicione pelo menos um amigo.')
        return;
    }

    // Gera um índice aleatório.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado.
    let amigoSorteado = amigos[indiceAleatorio];

    // Limpa a exibição da lista de amigos.
    ulListaAmigos.innerHTML = '';

    // Exibe o resultado no elemento de resultado.
    resultado.innerHTML = `<li> O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}