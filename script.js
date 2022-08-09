const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('input');
const iconEl = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
  createPassword();
});

iconEl.addEventListener('click', () => {
  copyPassword();
  if(inputEl.value){
    alertContainer.classList.remove('active');
    setTimeout(() => {
      alertContainer.classList.add('active')
      inputEl.value = '';
    }, 500);
    
  }
});


function createPassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 10;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainer.innerText = password + ' copied!'
}

const copyPassword = () => {
  inputEl.select();
  inputEl.setSelectionRange(0,9999);
  navigator.clipboard.writeText(inputEl.value);  
}

