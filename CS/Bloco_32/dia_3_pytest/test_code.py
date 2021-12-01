import pytest
import code


def test_if_odd_when_number_is_odd_returns_true():
  'Para um numero ímpar a função deve retornar o valor True'
  assert code.is_odd(3) is True

def test_if_odd_when_number_is_even_returns_false():
  'Para um numero par a função deve retornar o valor False'
  assert code.is_odd(2) is False

def test_devide_when_other_num_is_zero_raises_an_exception():
  with pytest.raises(ZeroDivisionError, match="division by zero"):
    code.divide(2, 0)