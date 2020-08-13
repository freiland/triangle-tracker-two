$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const oneInt = parseInt($("input#number1").val());
    const twoInt = parseInt($("input#number2").val());
    const threeInt = parseInt($("input#number3").val());
  
    // ((oneInt === twoInt) && (twoInt === threeInt) && (oneInt === threeInt))

    if ((oneInt + twoInt <= threeInt) || (twoInt + threeInt <= oneInt) || (threeInt + oneInt <= twoInt)) {
      $("#nonTriangle").show();
    }

    else if ((oneInt === twoInt) && (twoInt === threeInt) && (oneInt === threeInt)) {
      $("#equilateral").show();
    }
    
    else if ((oneInt === twoInt) || (twoInt === threeInt) || (oneInt === threeInt)) {
      $("#isosceles").show();
    }

    else if ((oneInt !== twoInt) && (twoInt !== threeInt) && (oneInt !== threeInt)) {
      $("#scalene").show(); 
    }
      
    else {
      $('#nonTriangle').show();
    }
  });
});