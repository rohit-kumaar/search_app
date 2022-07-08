const input = document.querySelector("input");
const li = document.querySelectorAll("li");

input.addEventListener("keyup", () => {
  const input_value_lowercase = input.value.toLowerCase();

  li.forEach((all_Li) => {
    const li_text_lowercase = all_Li.textContent.toLowerCase();

    // check in dev tool
    // console.log(
    //   li_text_lowercase,
    //   li_text_lowercase.indexOf(input_value_lowercase)
    // );

    if (li_text_lowercase.indexOf(input_value_lowercase) != -1) {
      all_Li.style.display = "block";
    } else {
      all_Li.style.display = "none";
    }
  });
});
