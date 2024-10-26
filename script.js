const errorParagraph = document.querySelector("#errorParagraph");
const emailField = document.querySelector("#emailField");
const submitBtn = document.querySelector("#submitBtn");
const borderDiv = document.querySelector("#borderDiv");
emailField.addEventListener("input", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue) && emailFieldValue.length) {
    borderDiv.classList.remove("border-DesaturatedRed");
    borderDiv.classList.add("border-[hsl(0_93%_68%)]");
    errorParagraph.classList.remove("hidden");
    errorParagraph.textContent = "Please provide a valid email";
    errorParagraph.classList.remove("text-lime-600");
    errorParagraph.classList.add("text-[hsl(0_93%_68%)]");
  } else {
    borderDiv.classList.remove("border-[hsl(0_93%_68%)]");
    borderDiv.classList.add("border-DesaturatedRed");
    errorParagraph.classList.add("hidden");
  }
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue)) {
    errorParagraph.classList.add("text-[hsl(0_93%_68%)]");
    errorParagraph.classList.remove("hidden");
    errorParagraph.classList.remove("text-lime-600");
    errorParagraph.textContent = "Please provide a valid email";
  } else {
    errorParagraph.classList.remove("text-[hsl(0_93%_68%)]");
    errorParagraph.classList.remove("hidden");
    errorParagraph.classList.add("text-lime-600");
    errorParagraph.textContent = "Submitted!";
    emailField.value = "";
  }
});
