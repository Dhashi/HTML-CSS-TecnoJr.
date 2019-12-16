function validacao() {
    if (document.getElementById("clogin").value == "") {
        alert('Por favor, preencha o campo "Login"');
        document.getElementById("nome").focus();
        return false
    }

    if (document.getElementById("csenha").value == "" ||
        document.getElementById("csenha").value.length < 5) {
        alert('A sua senha deve ter pelo menos 5 digitos');
        document.getElementById("csenha").focus();
        return false
    }
}