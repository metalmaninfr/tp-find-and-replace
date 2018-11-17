const input = document.querySelector('input');
const sentence = document.querySelector('p');

var string = sentence.innerHTML.split(" ");

input.addEventListener('blur', function() {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[1]) {
      string[i] = input.value;
    }
  }
    sentence.innerHTML = string.join(' ');
});
