const getAge = () => {
  const myDateOfBirth = new Date("2000-08-07");
  const today = new Date();

  const ageAtTheBeginningOfTheYear =
    today.getFullYear() - myDateOfBirth.getFullYear() - 1;
  const iHadMyBirthDay =
    today >= myDateOfBirth.setFullYear(today.getFullYear());

  if (iHadMyBirthDay) {
    return ageAtTheBeginningOfTheYear + 1;
  }

  return ageAtTheBeginningOfTheYear;
};

window.onload = function () {
  const element = document.getElementById("dateOfBirth");
  element.innerText = getAge();
};
