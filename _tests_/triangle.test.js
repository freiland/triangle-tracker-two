import Triangle from '../src/triangle.js/'

describe ('Triangle', () => {

  test ('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  })

  test ('should correctly determine whether three parameters can form a triangle', () => {
    const notTriangle = new Triangle(2,3,76);
    expect(notTriangle.checkType()).toEqual('not a triangle');
  });

  test ('should correctly determine whether parameters can create an equilateral triangle', () => {
    const equilTri = new Triangle(2,2,2);
    expect(equilTri.checkType()).toEqual('equilateral triangle');
  });

  test ('should correctly determine if parameters can create an isosceles triangle', () => {
    const isosTri = new Triangle(2,2,4);
    expect(isosTri.checkType()).toEqual('isosceles triangle');
  });

  test ('should correctly determine if parameters create a scalene triangle', () => {
    const scalTri = new Triangle(2,4,5);
    expect(scalTri.checkType()).toEqual('scalene triangle');
  });

  describe('Triangle', () => {
    let reusableTriangle;
  
    beforeEach(() => {
      reusableTriangle = new Triangle(5, 5, 5);
    });
  
    test('should show how beforeEach() works', () => {
      console.log(reusableTriangle);
    });
  });

});
