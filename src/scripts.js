
  
    // Business Logic //
    
    export function nonTriangle (side1, side2, side3) {
    if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
      return true;
    }
    return false;
  };

    export function equilateral(side1,side2,side3) {
    if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
      return true;
    }
    return false;
  };
    
    export function isosceles (side1, side2, side3) {
    if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
      return true;
    }
    return false;
  };

    export function scalene (side1, side2, side3) {
    if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
      return true; 
    }
    return false;
  };
      
    
  