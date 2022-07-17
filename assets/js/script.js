const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnLogin = document.getElementById("btn");
const message = document.getElementById("message");

const checkError = (inputEmail, inputPassword) => {
  
  if (
    !Boolean(inputEmail.value) ||
    !Boolean(inputPassword.value)
    ) {
    throw Error("O campo e-mail ou o campo senha estão vazios.");
  }

  if (
    !Boolean(inputPassword.value.trim()) ||
    !Boolean(inputEmail.value.trim())
  ) {
    throw Error("Este campo não pode conter espaços.");
  }

  if (inputPassword.value.length > 8) {
    throw Error("Digite uma senha com no máximo 8 caracteres.");
  }

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
