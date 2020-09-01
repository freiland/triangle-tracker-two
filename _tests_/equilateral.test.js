import { equilateral } from '../src/scripts.js';


describe ('equilateral', () => {

  test ('should correctly return true if parameters will create an equilateral triangle, return false if they do not', () => {
    const equilTest = equilateral(4,4,4);
    expect(equilTest).toEqual(true);
  });
});
