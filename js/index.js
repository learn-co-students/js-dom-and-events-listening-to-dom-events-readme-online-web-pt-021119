const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const divs = document.querySelectorAll('div');

function goneBubblin(e) {
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i of divs) {
  i.addEventListener('click', goneBubblin);
}
