// estados => options:
let states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

// cria o dropDown de estados:
for (const key in states) {
  const createOption = document.createElement('option');
  const inputState = document.getElementById('input-state')
  createOption.innerHTML = `${states[key]}`;
  createOption.value = key;

  inputState.append(createOption);
}

// função extraida do stackoverflow: (Evandro Uzeda) "Mask em JavaScript puro"
// add '.' e '-' ao input do cpf
function inputCpf () {
  document.addEventListener('keydown', function(event) { 
    if(event.keyCode != 46 && event.keyCode != 8){
    let i = document.getElementById("CPF").value.length;
    if (i === 3 || i === 7)
      document.getElementById("CPF").value = document.getElementById("CPF").value + ".";
    else if (i === 11) 
      document.getElementById("CPF").value = document.getElementById("CPF").value + "-";
    }
  });
}
inputCpf();

// Starter JavaScript for disabling form submissions if there are invalid fields
// Function de validação dos campos do form:
function validation () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // captura o campo que contem a classe 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  // Loopa o form e caso algum campo nao esteja ok executa o 'event.preventDefault()'
  // se estiver ok, add a class 'was-validated' 
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}

// Consolida as info's do form:
// função prevent default (segura os dados para serem tratados antes de envia-los)
function createCurriuculum(evt) {
  evt.preventDefault();

  const inputs = document.querySelectorAll('.was-validated');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'radio' && !inputs[i].checked) {
      continue;
    }
    if (inputs[i].value === ''){
      inputs[i].value = 'campo vazio.'
    }
    const elements = inputs[i].value;
    const fild = document.querySelector('#curriculum');
    const div = document.createElement('div');
    div.classList.add('div-curriculum');
    div.innerHTML = inputs[i].name;
    div.innerHTML = elements;
    fild.append(div);
  }
}
const submit = document.getElementById('send-btn');
submit.addEventListener('click', validation, createCurriuculum);
