// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const functionTest = jest.mock('./exercise');

describe('Test randomNumber', () => {
  test('default return 10', () => {
    functionTest.randomNumber = jest.fn();
    functionTest.randomNumber.mockReturnValue(10);
    functionTest.randomNumber();

    expect(functionTest.randomNumber).toBeCalled();
    expect(functionTest.randomNumber()).toBe(10);
    expect(functionTest.randomNumber).toBeCalledTimes(2);
  });
})