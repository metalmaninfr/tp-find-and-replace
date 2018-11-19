const input = document.querySelector('input');
const sentence = document.querySelector('p');

var token = sentence.innerHTML.split(" ");

input.addEventListener('blur', function() {
  for (var i = 0; i < token.length; i++) {
    if (token[i] === token[1]) {
      token[i] = input.value;
    }
  }
    sentence.innerHTML = token.join(' ');
});
