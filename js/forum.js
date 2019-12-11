function valida_form() {
    if (document.getElementById("nome").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }
}