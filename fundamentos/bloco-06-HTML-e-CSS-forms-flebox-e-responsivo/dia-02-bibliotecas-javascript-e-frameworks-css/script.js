import './node_modules/just-validate/dist/js/just-validate.js'

function createStateBrasil() {
  const state = document.getElementById("state");
  const allStates = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];

  for (let i = 0; i < allStates.length; i += 1) {
    const options = document.createElement("option");
    state.appendChild(options).innerText = allStates[i];
    state.appendChild(options).value = allStates[i];
  }
}

window.onload = function () {
  createStateBrasil()

  new window.JustValidate('.js-form', {
    
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40,
      },
      cpf: {
        required: true,
        minLength: 11,
        maxLength: 11,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
    }
  })
}
