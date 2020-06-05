const slider = document.getElementById('slider');
const up = document.getElementById('add');
const down = document.getElementById('subtract');

slider.addEventListener('click', () => {
  let sliderValue = slider.value;
  printTable(sliderValue);
});

slider.addEventListener('mousemove', () => {
  let sliderValue = slider.value;
  printTable(sliderValue);
});

// slider.addEventListener('TouchEvent', () => {
//   let sliderValue = slider.value;
//   printTable(sliderValue);
// });

up.addEventListener('click', () => {
  let sliderValue = slider.value;
  sliderValue > 299 ? sliderValue : sliderValue++;
  console.log(sliderValue);
  printTable(sliderValue);
});

down.addEventListener('click', () => {
  let sliderValue = slider.value;
  sliderValue > 1 ? sliderValue-- : sliderValue;
  console.log(sliderValue);
  printTable(sliderValue);
});



const dataCalculation = (temp) => {
  console.log(`what up`, temp);
  let quarterNote = 60000/temp;
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
};

// console.log(dataCalculation(120))

const printTable = (value) => {
  let milliseconds = dataCalculation(value);
  for (prop in milliseconds) {
    let tableItem = document.getElementById(prop);
    tableItem.innerHTML = `${milliseconds[prop]} ms`;
  }
  slider.value = value;
  document.getElementById('tempo').value = value;
  document.getElementById('bpm').innerHTML = `BPM: ${value}`;
};


const getTempo = () => {
  if (event.keyCode == 13) {
    event.preventDefault();
    let tempo = document.querySelectorAll('form')[0][0].value;
    const regex = /^\d+$/
    if (
      regex.test(tempo)
      && tempo > 0
      && tempo < 301
      ) {
        document.getElementById('alert').innerHTML = '';
        printTable(tempo);
        document.getElementById('resultBlock').style.display = 'block';
        document.querySelector('.table').style.display = 'flex';
        document.querySelector('main').style.justifyContent = 'space-evenly';
      } else {
        document.getElementById('alert').innerHTML = 'Please enter a number between 1-300';
        document.getElementById('resultBlock').style.display = 'none';
      }
  }
};

// put the numbers in the regex?? Not sure it's worth it..

const theYear = new Date;
document.getElementById('year').innerHTML += ` ${theYear.getFullYear()}`;