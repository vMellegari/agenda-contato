const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

let linhas = '';
let contador = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
    contadorCadastro();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome');
    const inputTelefoneContato = document.getElementById('telefone');

    if (telefone.includes(inputTelefoneContato.value)) {
        alert(`Telefone: ${inputTelefoneContato.value} ja foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<th>${inputNomeContato.value}</th>`;
        linha += `<th>${inputTelefoneContato.value}</th>`;
        linha += `</tr>`;

        linhas += linha;
        contador++;

        inputNomeContato.value = '';
        inputTelefoneContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function contadorCadastro() {
    document.getElementById('total-cadastro').innerHTML = parseInt(contador);
}