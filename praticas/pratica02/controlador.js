const Contato = require("./modelo");

const contatos = []

function adicionarContato(nome, email, telefone) {
    const novoContato = new contato(nome, email, telefone)
    contatos.push(novoContato)
}

function listarContato() {
    return contatos
}

function buscarContato(nome) {
    const buscou = produtos.find(contato => contato.nome === nome);
    return buscou
}

function atualizarContato(nome, email, telefone) {
    const contato = buscarContato(nome)
    if(contato) {
        contato.email = email;
        contato.telefone = telefone;
    }
}

function removerContato(nome) {
    const posicao = contato.findIndex(contato => contato.nome === nome);
    if (posicao>=0) {
        contatos.splice(posicao, 1);
    }
}

module.exports = {adicionarContato, listarContato, buscarContato, atualizarContato, removerContato};