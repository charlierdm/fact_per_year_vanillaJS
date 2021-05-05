let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);

function getFactFetch(){
  let number = numberInput.value;

  fetch('http://numbersapi.com/'+ number + '/year')
    .then(response => response.text())
    .then(data => {
      if(number != ''){
        fact.style.display = 'block';
        fact.innerText = data;
      }
    })
    .catch(error => console.log(error))
}