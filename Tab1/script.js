var buttons = document.querySelectorAll('.button-111, .button-112, .button-113, .button-121, .button-122, .button-123, .button-131, .button-132, .button-133, .button-141, .button-142, .button-143, .button_2');

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

document.addEventListener("DOMContentLoaded", function() {
  const input = document.querySelector(".input-3");
  const label = document.querySelector(".placeholder-label");

  input.addEventListener("focus", function() {
    label.classList.add("shrink");
  });

  input.addEventListener("blur", function() {
    if (input.value === '') {
      label.classList.remove("shrink");
    }
  });
});
function changeGuestCount(change, element) {
  // 'element' là tham chiếu đến nút được nhấn
  // Ta cần tìm phần tử '.Sl' gần nhất liên quan đến nút này

  var guestElement = element.parentNode.querySelector('.Sl');
  var currentCount = parseInt(guestElement.textContent) || 0;

  currentCount += change;

  if (currentCount < 1) { // Đảm bảo số lượng không nhỏ hơn 1
    currentCount = 1;
  }

  guestElement.textContent = currentCount; // Cập nhật lại số lượng
}
