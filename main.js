const form = document.getElementById('form-valid'); /*puxando o formulário*/
const button = document.getElementById('submit-button');

function validarForm() {
    event.preventDefault()

    let valorA = document.getElementById("valorA").value;
    let valorB = document.getElementById("valorB").value;

    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemdeErro = document.querySelector('.error-message');

    if (valorB >= valorA) {
        containerMensagemSucesso.innerHTML = "Valores validados com sucesso! B é igual ou maior que A.";
        containerMensagemSucesso.style.display = 'block';
        containerMensagemdeErro.style.display = 'none'; // Oculta a mensagem de erro

    } else {
        containerMensagemdeErro.innerHTML = "Valores inválidos! B é menor do que A.";
        containerMensagemdeErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none'; // Oculta a mensagem de sucesso
    }
}

