// FORM VALIDATION

// EMAIL VALIDATION
const validateEmail = (string) => {
  const emailInput = document.querySelector(`#${string}`);
  if (emailInput.value.length === 0) {
    emailInput.classList.add(`red`);
    emailInput.nextSibling.textContent = `Email field cannot be empty`;
    return false;
  }
  if (
    !emailInput.value.match(
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9 -]+\.[a-z ]{2,}/
    )
  ) {
    emailInput.classList.add(`red`);
    emailInput.nextSibling.textContent = `Use a valid email`;
    return false;
  }
  emailInput.classList.remove(`red`);
  emailInput.nextSibling.textContent = `${
    string === `referral-email` ? `Referral Email` : `Email`
  } `;
};

// NAME VALIDATION
const validateName = (string) => {
  const nameInput = document.querySelector(`#${string}`);

  if (nameInput.value.length === 0) {
    nameInput.classList.add(`red`);
    nameInput.nextSibling.textContent = `Name field cannot be empty`;
    return false;
  }
  if (nameInput.value.match(/[0-9]/)) {
    nameInput.classList.add(`red`);
    nameInput.nextSibling.textContent = `Numbers are not allowed`;
    return false;
  }
  if (nameInput.value.match(/[.!#$%&'*+/=?^_`{|}~-]/)) {
    nameInput.classList.add(`red`);
    nameInput.nextSibling.textContent = `Symbols are not allowed`;
    return false;
  }

  if (!nameInput.value.match(/(\w.+\s).+/)) {
    nameInput.classList.add(`red`);
    nameInput.nextSibling.textContent = `Enter First name and Last Name`;
    return false;
  }

  nameInput.classList.remove(`red`);
  nameInput.nextSibling.textContent = `Your Name`;
};

// PASSWORD VALIDATION

const validatePassword = (string) => {
  const passwordInput = document.querySelector(`#${string}`);

  if (passwordInput.value.length === 0) {
    passwordInput.classList.add(`red`);
    passwordInput.nextSibling.textContent = `Password field cannot be empty`;
    return false;
  }
  if (!passwordInput.value.match(/[a-zA-Z0-9!@#$%^&*]{8,}/)) {
    passwordInput.classList.add(`red`);
    passwordInput.nextSibling.textContent = `Minimum of 8 Characters`;
    return false;
  }

  passwordInput.classList.remove(`red`);
  passwordInput.nextSibling.textContent = `Password`;
};

export { validateEmail, validateName, validatePassword };
