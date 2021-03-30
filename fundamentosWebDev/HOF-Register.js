// 1 - Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id.
const employeeEmail = (name) => {
  const employeeName = name.replace(' ', '_');
  return {
    nomeCompleto: name,
    email: `${employeeName}@trybe.com`,
  }
};

const newEmployees = (emailRegister) => {
  const employees = {
    id1: emailRegister('Pedro Guerra'),
    id2: emailRegister('Luiza Drumond'),
    id3: emailRegister('Carla Paiva'),
  }
  return employees;
}

console.log((newEmployees(employeeEmail)));
