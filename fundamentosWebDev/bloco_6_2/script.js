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

function validateData (data) {
  if (data.indexof('/') === 2 || data.indexof('/') === 5){
    const day = data.substr(0, 2); // (index inicial, limite(no caso 2 caracteres))
    const month = data.substr(3, 2); 
    const year = data.substr(6, 4); // (index inicial, limite(no caso até 4 caracteres))
    if ((day > 31 || day < 1) && (month < 1 || month > 12) && (year < 1900 && year.lenth > 4)){
      return false;
    }
  }
  return true;
}

function checkData() {
  const inputData = document.querySelector('#start-date').value
  if (validateData(inputData) === false) {
    return alert('Data inválida.');
  }
  return inputData;
}


// validação dos inputs do form:

// const formName = document.querySelector('#name');
// function validation() {
//   console.log(formName.value);
// }

// função extraida do stackoverflow: (Evandro Uzeda) "Mask em JavaScript puro"
function inputCpf () {
  // add '.' e '-' ao input do cpf
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

// função prevent default (segura os dados para serem tratados antes de envia-los)
function stopDefault(evt) {
  evt.preventDefault();
  // validation();
}
document.getElementById('send-btn').addEventListener('click', stopDefault, false);

// Consolida as info's do form:

function consoleForm () {

}