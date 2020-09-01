import { nonTriangle } from '../src/scripts.js/';

describe ('non Triangle', () => {

  test('should return true if the parameters are NOT a triangle, return false if parameters are a triangle', () => {
    const triTest = nonTriangle(4,5,8);
    expect(triTest).toEqual(false);
  });
});