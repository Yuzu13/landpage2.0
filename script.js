function openModal() {
  document.getElementById('modalPrivacidade').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modalPrivacidade').style.display = 'none';
}
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
  setTimeout(() => {
    this.submit();
  }, 1500);
});
document.getElementById('telefone').addEventListener('input', function (e) {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
  });
