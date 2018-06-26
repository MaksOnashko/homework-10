var emailInput = document.getElementById('email'),
    emailSmall = document.getElementsByTagName('small')[0];

// Валидация email
emailInput.addEventListener('change', function () {
  let emailInputValue = emailInput.value.toLowerCase();
  // Использовал regex101.com что бы сформировать и протестить регулярку
  let emailRegPattern = new RegExp('^([a-z0-9._-]){1,}@([a-z0-9]){1,}\.([a-z]){2,4}$');
  let checkEmail = emailInputValue.search(emailRegPattern);
  if (checkEmail == -1) {
    emailSmall.setAttribute("style", "color: red");
    emailSmall.textContent = ('Неправильный ввод email. Попробуйте еще раз.')
  } else if (checkEmail == 0) {
    emailSmall.setAttribute("style", "color: green");
    emailSmall.textContent = ('Спасибо! Ваш email прошел валидацию :)')
  }
});