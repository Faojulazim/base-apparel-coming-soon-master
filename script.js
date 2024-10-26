const errorParagraph = document.querySelector("#errorParagraph");
const emailField = document.querySelector("#emailField");
const submitBtn = document.querySelector("#submitBtn");
const borderDiv = document.querySelector("#borderDiv");
emailField.addEventListener("input", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue) && emailFieldValue.length) {
    remove(borderDiv, "border-DesaturatedRed");
    remove(errorParagraph, "text-lime-600", errorParagraph, "hidden");
    add(errorParagraph, "text-[hsl(0_93%_68%)]", borderDiv, "border-[hsl(0_93%_68%)]"
    );
    errorParagraph.textContent = "Please provide a valid email";
  } else {
    add(borderDiv, "border-DesaturatedRed", errorParagraph, "hidden");
    remove(borderDiv, "border-[hsl(0_93%_68%)]");
  }
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue)) {
    add(errorParagraph, "text-[hsl(0_93%_68%)]");
    remove(errorParagraph, "hidden", errorParagraph, "text-lime-600");
    errorParagraph.textContent = "Please provide a valid email";
  } else {
    remove(errorParagraph, "text-[hsl(0_93%_68%)]", errorParagraph, "hidden");
    add(errorParagraph, "text-lime-600");
    errorParagraph.textContent = "Submitted!";
    emailField.value = "";
  }
});
function remove(element1, remove1, element2 = element1, remove2 = remove1) {
  element1.classList.remove(`${remove1}`);
  element2.classList.remove(`${remove2}`);
}
function add(element1, add1, element2 = element1, add2 = add1) {
  element1.classList.add(`${add1}`);
  element2.classList.add(`${add2}`);
}
