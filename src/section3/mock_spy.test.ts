import { Calculator } from './mock_spy';

it('sumメソッドが呼び出される', () => {
  const calc = new Calculator();
  const sumSpy = jest.spyOn(calc, 'sum');
  const res = calc.sum(1, 2);
  expect(res).toBe(3);
  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  sumSpy.mockRestore();
});
