const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnLogin = document.getElementById("btn");
const message = document.getElementById("message");

const emptyInput = (inputEmail, inputPassword) => {
  if (!Boolean(inputEmail.value) || !Boolean(inputPassword.value)) {
    throw Error("O campo e-mail ou o campo senha estão vazios.");
  }
}

const spaceInput = (inputPassword) => {
  if (!Boolean(inputPassword.value.trim()) || !Boolean(inputEmail.value.trim())) {
    throw Error("Este campo não pode conter espaços.");
  }
}

const lengthInput = (inputPassword) => {
  if (inputPassword.value.length > 8) {
    throw Error("Digite uma senha com no máximo 8 caracteres.");
  }
}

const containAt = (inputEmail) => {
  if (inputEmail.value.indexOf('@') < 3 || inputEmail.value.includes('.com', '.com.br')) {
    throw Error("Digite um e-mail válido. Seu nome de usuário deve conter mais que 3 caracteres.");
  }
}

const checkError = (inputEmail, inputPassword) => {
  
  emptyInput(inputEmail, inputPassword);
  spaceInput(inputEmail, inputPassword);
  lengthInput(inputPassword);
  containAt(inputEmail);
  
};

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  
  try {
    checkError(inputEmail, inputPassword);
    message.innerHTML = `${inputEmail.value} ${inputPassword.value}`;

  } catch (error) {
    message.innerHTML = `${error.message}`;

  } finally {
    (inputEmail.value = ""), (inputPassword.value = "");

  }

});
