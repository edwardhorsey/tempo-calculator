

const dataCalculation = function(tempo){
let quarterNote = 60000/tempo;
console.log(this);
return {
  quarter: Math.round(quarterNote),
  quarterT: Math.round(quarterNote/3 * 2),
  eigth: Math.round(quarterNote/2),
  eigthDot: Math.round(quarterNote/2 * 1.5),
  eigthT: Math.round(quarterNote/6 * 2),
  sixteenth: Math.round(quarterNote/4),
  sixteenthDot: Math.round(quarterNote/4 * 1.5),
  sixteenthT: Math.round(quarterNote/12 * 2),
}
}

// console.log(dataCalculation(120))



const getTempo = function(){
  if (event.keyCode == 13) {
    event.preventDefault()
    let tempo = document.querySelectorAll('form')[0][0].value
    let milliseconds = dataCalculation(tempo)
    console.log(milliseconds)
    for (prop in milliseconds) {
      let tableItem = document.getElementById(prop)
      tableItem.innerHTML = `${milliseconds[prop]} ms`
    }

  }
}
