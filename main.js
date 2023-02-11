const form = document.getElementById('form-atividade');
const nomes = [];
const numeros = [];
//const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

let linhas = '';

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O contato: ${inputNumeroContato.value} já foi inserido`);
    } else {
    numeros.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

    function atualizaTabela() {
    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
} 