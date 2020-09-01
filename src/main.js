import {nonTriangle} from './scripts.js'
import {equilateral} from './scripts.js'
import {isosceles} from './scripts.js'
import {scalene} from './scripts.js'
import './css/styles.css'


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const oneInt = parseInt($("input#number1").val());
    const twoInt = parseInt($("input#number2").val());
    const threeInt = parseInt($("input#number3").val());
  });
});