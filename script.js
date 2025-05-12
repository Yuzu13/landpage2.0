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
