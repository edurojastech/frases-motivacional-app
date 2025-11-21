
const btnCopiar = document.getElementById('copiar')
const btnNovaFrase = document.getElementById('novaFrase')
const fraseElement = document.getElementById('frase')

function frasesRandom() {
  const numberRandom = Math.floor(Math.random() * frasesBiblicas.length)
  fraseElement.textContent = frasesBiblicas[numberRandom]
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      btnCopiar.textContent = "Frase copiada!"
      setTimeout(() => {
        btnCopiar.textContent = "Copiar frase"
      }, 3000);
    })
    .catch(err => {
      console.error("Erro ao copiar: ", err);
    });
}

btnNovaFrase.addEventListener('click', frasesRandom)
btnCopiar.addEventListener('click', () => copiarTexto(fraseElement.textContent))
frasesRandom()