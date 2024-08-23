const expandableSections = document.querySelectorAll(".expandable");

expandableSections.forEach((section) => {
  section.addEventListener("click", () => {
    expandableSections.forEach((sec) => {
      sec.classList.remove("open");
      sec.classList.remove("details");
      sec.querySelector(".discount")?.classList.remove("hidden");
      sec.querySelector(".item").style.border = "1px solid #eaeaea";
      sec
        .querySelectorAll(".tag, .mrp")
        .forEach((el) => (el.style.display = "none"));

      const radio = sec.querySelector(".radio");
      if (radio) {
        radio.checked = false;
      }
    });

    section.classList.add("open");
    section.classList.add("details");

    section.querySelector(".discount")?.classList.add("hidden");

    section
      .querySelectorAll(".tag, .mrp")
      .forEach((el) => (el.style.display = "inline"));

    section.querySelector(".item").style.border = "none";

    const radioButton = section.querySelector(".radio");
    if (radioButton) {
      radioButton.checked = true;
    }
  });
});
