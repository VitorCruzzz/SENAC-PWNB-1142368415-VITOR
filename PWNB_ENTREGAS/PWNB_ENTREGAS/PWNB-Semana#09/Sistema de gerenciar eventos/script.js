


var db = {};

// Uma função para mostrar o formulário de login e ocultar o formulário de cadastro
function showLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
}

// Uma função para mostrar o formulário de cadastro e ocultar o formulário de login
function showRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

// Uma função para validar o formulário de login e redirecionar para a página inicial se for bem-sucedido
function login() {
  
  // Obtenha o nome de usuário e a senha dos campos de entrada
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Obtenha o elemento de mensagem para exibir erros
  var message = document.getElementById("login-message");

  // Verifique se o nome de usuário e a senha são válidos
  if (username in db && db[username] == password) {

    // Se for válido, redirecione para a página inicial
    window.location.href = "home.html";

    // Retorne false para evitar o envio padrão do formulário
    return false;

  } else {

    // Se for inválido, exiba uma mensagem de erro
    message.innerHTML = "Nome de usuário ou senha inválidos";

    // Retorne false para evitar o envio padrão do formulário
    return false;

   }
  
}

// Uma função para validar o formulário de cadastro e adicionar o usuário ao banco de dados se for bem-sucedido
function register() {

   // Obtenha o nome de usuário e a senha dos campos de entrada
   var username = document.getElementById("new-username").value;
   var password = document.getElementById("new-password").value;
   var confirm = document.getElementById("confirm-password").value;

   // Obtenha o elemento de mensagem para exibir erros
   var message = document.getElementById("register-message");

   // Verifique se o nome de usuário já está em uso
   if (username in db) {

     // Se já estiver em uso, exiba uma mensagem de erro
     message.innerHTML = "Nome de usuário já existe";

     // Retorne false para evitar o envio padrão do formulário
     return false;

   } else {

     // Verifique se a senha e a confirmação de senha coincidem
     if (password == confirm) {

       // Se coincidirem, adicione o usuário ao banco de dados
       db[username] = password;

       // Exiba uma mensagem de sucesso
       message.innerHTML = "Cadastro realizado com sucesso";

       // Retorne false para evitar o envio padrão do formulário
       return false;

     } else {

       // Se não coincidirem, exiba uma mensagem de erro
       message.innerHTML = "As senhas não coincidem";

       // Retorne false para evitar o envio padrão do formulário
       return false;

     }

   }

}









document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar números aleatórios entre um mínimo e um máximo
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Gerar informações aleatórias
    const numerosIngressosComprados = getRandomNumber(100, 1000);
    const numerosPessoasEventos = getRandomNumber(50, 500);
    const lucroEventos = getRandomNumber(10000, 50000);
    const despesaEventos = getRandomNumber(5000, 20000);

    // Preencher os elementos HTML com as informações aleatórias
    document.getElementById('Numeros de ingressos comprados').textContent = numerosIngressosComprados;
    document.getElementById('Numeros de pessoas que foram nos eventos').textContent = numerosPessoasEventos;
    document.getElementById('Lucro dos eventos').textContent = "R$" + lucroEventos.toFixed(2);
    document.getElementById('Despesa dos eventos').textContent = "R$" + despesaEventos.toFixed(2);


    document.getElementById('voltar-button').addEventListener('click', function() {
        // Redirecione para a página anterior (por exemplo, a página inicial)
        window.location.href = 'home.html'; // Altere 'home.html' para a página desejada
    });

});










document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('event-form');
    const voltarButtonCriar = document.getElementById('voltar-criar');
    const informacoesCriacao = document.getElementById('informacoes-criacao'); // Elemento para exibir informações

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtenha os valores dos campos do formulário
        const empresa = document.getElementById('empresa').value;
        const nomeEvento = document.getElementById('nome-evento').value;
        const responsavel = document.getElementById('responsavel').value;
        const dataInicio = document.getElementById('data-inicio').value;
        const dataTermino = document.getElementById('data-termino').value;
        const horaInicio = document.getElementById('hora-inicio').value;
        const horaTermino = document.getElementById('hora-termino').value;
        const valorIngresso = document.getElementById('valor-ingresso').value;

        // Crie um objeto com as informações do evento
        const evento = {
            empresa,
            nomeEvento,
            responsavel,
            dataInicio,
            dataTermino,
            horaInicio,
            horaTermino,
            valorIngresso
        };

        // Atualize o conteúdo do elemento com as informações do evento
        informacoesCriacao.innerHTML = `
            <h3>Informações do Evento Criado:</h3>
            <p><strong>Nome da Empresa:</strong> ${evento.empresa}</p>
            <p><strong>Nome do Evento:</strong> ${evento.nomeEvento}</p>
            <p><strong>Nome do Responsável:</strong> ${evento.responsavel}</p>
            <p><strong>Data de Início:</strong> ${evento.dataInicio}</p>
            <p><strong>Data de Término:</strong> ${evento.dataTermino}</p>
            <p><strong>Hora de Início:</strong> ${evento.horaInicio}</p>
            <p><strong>Hora de Término:</strong> ${evento.horaTermino}</p>
            <p><strong>Valor do Ingresso (R$):</strong> ${evento.valorIngresso}</p>
        `;

        eventForm.reset();
    });

});








// No seu arquivo "script.js"
document.addEventListener('DOMContentLoaded', function() {
    const voltarButtonCriar = document.getElementById('voltar-criar');

    // Adicione um ouvinte de evento de clique ao botão "Voltar"
    voltarButtonCriar.addEventListener('click', function() {
        // Redirecione para a página home (ou outra página desejada)
        window.location.href = 'home.html'; // Altere 'home.html' para a página desejada
    });
});









document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar um comentário aleatório
    function gerarComentarioAleatorio() {
        const nomes = ['Lucas C', 'Bruno T', 'Talita F', 'Bruna B', 'Lais L', 'Nalia S', 'José', 'Pedro', 'Paulo', 'Antônio', 'Carlos', 'Francisco', 'Joaquim', 'Manoel', 'Miguel'];
        const notas = [0, 1, 2, 3, 4, 5];
        const comentarios = [
            'O evento foi muito chato e não aprendi nada de novo.',
            'O evento foi divertido, mas achei que o conteúdo foi um pouco superficial.',
            'Achei o evento um pouco chato, mas o palestrante era muito experiente.',
            'Os palestrantes foram muito experientes e compartilharam dicas valiosas.',
            'O evento foi muito caro e não valia o investimento.',
            'O evento foi muito bom! A organização foi perfeita e o conteúdo foi muito interessante.',
            'Que evento maravilhoso! Eu me diverti muito e aprendi muitas coisas novas. Obrigado pela organização e pela recepção!',
            'Eu achei esse evento muito decepcionante. A programação estava atrasada, os palestrantes eram chatos e o buffet era péssimo. Eu esperava mais qualidade e profissionalismo.',
            'Evento top! Me diverti muito e fiz novos amigos. Recomendo!',
            'Evento horrível! Perdi meu tempo e meu dinheiro. Não volto nunca mais!',
            'Evento incrível! Foi muito bem organizado e os convidados eram famosos. Adorei!',
            'Evento interessante! Aprendi bastante e me atualizei sobre o mercado. Valeu a pena!'
        ];

        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

        // Garanta que os comentários com nota 0 sejam negativos
        let comentarioAleatorio = '';
        if (notaAleatoria === 0) {
            comentarioAleatorio = 'O evento foi muito chato e não aprendi nada de novo.';
        } else {
            comentarioAleatorio = comentarios[Math.floor(Math.random() * comentarios.length)];
        }

        return {
            nome: nomeAleatorio,
            nota: notaAleatoria,
            comentario: comentarioAleatorio
        };
    }

    // Função para remover todos os comentários da tela
    function limparComentarios() {
        const ul = document.querySelector('.comentarios ul');
        ul.innerHTML = ''; // Remove todos os elementos filhos da lista ul
    }

    // Função para adicionar um comentário à lista de comentários
    function adicionarComentario(comentario) {
        const ul = document.querySelector('.comentarios ul');
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${comentario.nome}</strong> <span class="nota">${comentario.nota}</span>:
            <p>${comentario.comentario}</p>
        `;
        ul.appendChild(li);
    }

    // Adicione um ouvinte de evento ao botão "Carregar mais comentários"
    const carregarComentariosButton = document.getElementById('carregar-comentarios');
    carregarComentariosButton.addEventListener('click', function() {
        // Limpe todos os comentários existentes da tela
        limparComentarios();

        // Gere e adicione até 5 comentários aleatórios à lista
        for (let i = 0; i < 5; i++) {
            const comentarioAleatorio = gerarComentarioAleatorio();
            adicionarComentario(comentarioAleatorio);
        }
    });
});

