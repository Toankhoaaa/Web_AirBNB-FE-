var buttons = document.querySelectorAll('.button-11, .button-12, .button-13,'+
 '.button-14, .button-15, .button-16, .button-17, .button-18,'+
 '.button-21, .button-22, .button-23, .button-24, .button-25, .button-26, .button-27, .button-28, .button-29, '+
'.button-210, .button-211, .button-212, .button-41, .button-42, .button-43, .button-44, .button-45');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (this.style.borderColor === 'gray') {
      this.style.borderColor = '';
      this.style.backgroundColor = ''; 
    } else {
      this.style.borderColor = 'gray';
      this.style.backgroundColor = 'rgb(227, 221, 221)';
    }
  });
});

