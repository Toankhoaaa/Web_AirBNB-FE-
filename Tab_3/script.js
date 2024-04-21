var buttons = document.querySelectorAll('.button-11, .button-12');

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

var buttons = document.querySelectorAll('.button-31, .button-32, .button-33');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (this.style.borderColor === 'gray') {
      this.style.borderColor = '';
      this.style.backgroundColor = ''; 
    } else {
      this.style.borderColor = 'gray';
      this.style.backgroundColor = 'rgb(192, 192, 192)';
    }
  });
});

var elements = document.getElementsByClassName('_102');

for (var i = 0; i < elements.length; i++) {
  elements[i].contentEditable = 'true';

  elements[i].addEventListener('input', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '' || isNaN(newNumber)) {
      this.textContent = '%';
    } else {
      this.textContent = newNumber + '%';
    }
  });

  elements[i].addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.blur();
    }
  });

  elements[i].addEventListener('blur', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '') {
      this.textContent = '0%';
    }
  });
}

var elements = document.getElementsByClassName('_10');

for (var i = 0; i < elements.length; i++) {
  elements[i].contentEditable = 'true';

  elements[i].addEventListener('input', function(e) {
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '' || isNaN(newNumber)) {
      this.textContent = '10';
    } else {
      this.textContent = newNumber;
    }
  });

  elements[i].addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.blur();
    }
  });

  elements[i].addEventListener('blur', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '') {
      this.textContent = '10';
    }
  });
}
