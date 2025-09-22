document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('enviar').addEventListener('click', function(event) {
    
    event.preventDefault(); 

    let nome = document.getElementById('nome').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return; 
    }

    if (telefone === "") {
      alert("Por favor, preencha o campo Telefone.");
      return;
    }
    
    if (mensagem === "") {
      alert("Por favor, escreva uma mensagem.");
      return;
    }

    alert("Obrigada pelo contato! Sua mensagem foi enviada.");

    document.getElementById('contato-form').reset();
  });

});

  
 
