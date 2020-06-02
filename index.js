const slider = document.getElementById('slider');

slider.addEventListener('click', () => {
  let sliderValue = slider.value;
  printTable(sliderValue);
})


const dataCalculation = function(temp){
  console.log(`what up`, temp)
let quarterNote = 60000/temp;
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

const printTable = function(value){

  let milliseconds = dataCalculation(value)
  
  for (prop in milliseconds) {
    let tableItem = document.getElementById(prop)
    tableItem.innerHTML = `${milliseconds[prop]} ms`
  }

  slider.value = value;
  document.getElementById('tempo').value = value;
  document.getElementById('bpm').innerHTML = `BPM: ${value}`;
}


const getTempo = function(){
  if (event.keyCode == 13) {
    event.preventDefault()
    // gather tempo
    let tempo = document.querySelectorAll('form')[0][0].value
    const regex = /^\d+$/
    if (regex.test(tempo) && tempo > 0 && tempo < 301) { // put the numbers in the regex
       printTable(tempo);
      } else {
        document.getElementById('alert').innerHTML = 'Please enter a number between 1-300'
      }
      document.getElementById('resultBlock').style.display = 'block';
  }
}

