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

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

  test('new implementation', () => {
    functionTest.randomNumber = jest
      .fn()
      .mockImplementationOnce((a,b) => a / b);
    
    expect(functionTest.randomNumber(6,2)).toBe(3);
  });

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários. 

  test('new impelemntation and test double function', () => {
    const spy = jest.spyOn(functionTest, 'randomNumber');
    spy.randomNumber = jest.fn()
      .mockImplementation((a,b,c) => a * b * c);

    expect(spy.randomNumber(2,2,2)).toBe(8);
    expect(spy.randomNumber).toBeCalled();
    expect(spy.randomNumber).toBeCalledTimes(1);
    spy.mockRestore();

    spy.randomNumber = jest.fn()
      .mockImplementation((a) => a * 2);
    
    expect(spy.randomNumber(5)).toBe(10);
    expect(spy.randomNumber).toBeCalled();
    expect(spy.randomNumber).toBeCalledTimes(1);
  });
})

describe('Test otter functions', () => {
  test('upp to low case', () => {
    functionTest.uppCase = jest.fn()
      .mockImplementationOnce((str) => str.toLowerCase());

    expect(functionTest.uppCase('OLA')).toBe('ola');
  });
  test('first to last letter', () => {
    functionTest.firstLetter = jest.fn()
      .mockImplementationOnce((str) => str[(str.length -1)]);

    expect(functionTest.firstLetter('qwerty')).toBe('y');
  });
  test('concat 3 strings', () => {
    functionTest.concatString = jest.fn()
      .mockImplementationOnce((str1,str2,str3) => str1 + str2 + str3);

    expect(functionTest.concatString('oi','tudo','bem')).toBe('oitudobem');
  });
})