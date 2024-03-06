const readline = require('readline-sync');
const controlador = require('./controlador')

function menu() {
    console.log('1.Adicionar contato');
    console.log('2.Listar contatos');
    console.log('3.Buscar contato');
    console.log('4.Atualizar contato');
    console.log('5.Remover contato');
    console.log('6.Sair');
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case '1': { controlador.adicionarContato(); 
            const nome = readline.question("Entre com o nome do contato");
            const email = readline.question("Entre com email do contato");
            const telefone = readline.question("Entre com o telefone do contato");
            controlador.adicionarContato(nome, email, telefone);
            break;
        }

        case '2': controlador.listarContato(); 
        contatos.forEach(contato => console.log(contato)); 
        break;

        case '3': {
        const nome = readline.question("Entre com o nome do contato");
        const contatoEncontrado = buscarContato(nome);
        
        if (contatoEncontrado) {
            console.log(contatoEncontrado)
          } else {
            console.log("Contato não encontrado.");
          }
         break;
        }

        case '4': 
        const nome = readline.question("Entre com o nome para atualizar contato");
        const email = readline.question("Entre com o nome do contato");
        const telefone = readline.question("Entre com o nome do contato");
        controlador.atualizarContato(nome, email, telefone)
         break;

        case '5': {const nome = readline.question("Entre com o nome do contato para remover");
        controlador.removerContato(nome);
         break;
        }
        case '6': process.exit(0);
        default: console.log("Opção invalida");
    }
}
