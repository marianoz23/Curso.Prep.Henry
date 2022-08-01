//'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /* este es un mensaje
  '1110'  --- 1*2^3 + 1*2^2 + 1*2^1 + 0*2^0
          ---  8 + 4 + 2 =14
  */

  let num = 0;
  let xlen = length.cad;
  for(let i=0; i<length.cad; i++){
     num = num + (cad[i]*(2**xlen));
     xlen--;
  }
  return(num);
        
}

function DecimalABinario(num) {
  // tu codigo aca
  /*
          enter | resto
  14 / 2 --- 7 | 0
  7 / 2  --- 3 | 1 (entero)
  3 / 2  --- 1 | 1
  1 / 2  --- 0 | 1
  '1110'
  */
  let cad = '';
  return(cad)
}


/*module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
*/

console.log(BinarioADecimal('1110'));
console.log(DecimalABinario('14'));

