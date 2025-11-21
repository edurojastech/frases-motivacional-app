const bodyApp = `
    <div class="container">
      <div class="px-2 mb-4 rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-semibold text-center" style="color: #00A2AA;">Frases bíblicas</h1>
          <hr>
          <div class="card mb-3" style="width: 24rem; margin: auto; max-width: 100%;">
            <img src="./jesus.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Frase do dia:</h5>
              <p class="card-text mb-3" id="frase" style="height: 85px;"></p>
              <p class="card-text"><small class="text-body-secondary">Criado: Eduardo Rojas</small></p>
            </div>
            <div class="card-footer d-flex gap-2 justify-content-center">
              <button class="btn btn-md" type="button" id="novaFrase" style="width: 100%; background-color: #00A2AA; color: #fff;">Nova Frase</button>
              <button class="btn btn-dark btn-md" type="button" id="copiar" style="width: 100%;">Copiar frase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`
document.getElementById('app').innerHTML = bodyApp