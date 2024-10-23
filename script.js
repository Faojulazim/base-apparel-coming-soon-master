const errorParagraph = document.querySelector("#errorParagraph");
const emailField = document.querySelector("#emailField");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
const form = document.querySelector("#form");
const borderDiv = document.querySelector("#borderDiv");
emailField.addEventListener("input", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue) && emailFieldValue.length) {
    borderDiv.classList.remove("border-DesaturatedRed");
    borderDiv.classList.add("border-[hsl(0_93%_68%)]");
    errorParagraph.classList.remove("hidden");
  } else {
    borderDiv.classList.remove("border-[hsl(0_93%_68%)]");
    borderDiv.classList.add("border-DesaturatedRed");
    errorParagraph.classList.add("hidden");
    form.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#emailField").value = "";
      errorParagraph.classList.remove("text-SoftRed");
      errorParagraph.classList.remove("hidden");
      errorParagraph.classList.add("text-lime-600");
      errorParagraph.textContent = "Submitted!";
    });
  }
});
