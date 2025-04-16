document.getElementById("pedidoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio tradicional

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/brandexpressai@gmail.com", {
      method: "POST",
      body: data
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("popup").style.display = "flex";
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    })
    .catch(error => {
      alert("Erro: " + error.message);
    });
  });