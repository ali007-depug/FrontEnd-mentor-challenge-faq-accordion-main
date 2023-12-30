//get elements for manipulations
const iconPlus = document.querySelectorAll(".iconPlus");
const iconMinus = document.querySelectorAll(".iconMinus");
const answers = document.querySelectorAll(".answer p");
const faqTitles = document.querySelectorAll("h3");

/**
 * when click on h3 then do 3 stuff :
 * first : loop on all (+ icons) then make condition to check if h3 & icon on same container by data-faq attribute,lastly toggle class show to manipulate the (+ icon)
 * 
 * second : Do what you did in (+ icon) but to (- icon)
 * 
 * third : loop on all answers and check if answer & h3 on the same container,also toggle class to show and hide it.
 */
faqTitles.forEach((title) => {
    title.addEventListener("click", (e) => {
      // 1 - loop on all (+ icon) and check it
        iconPlus.forEach((icon) => {
        // check h3 and (+ icon) on same container
      if (
        e.target.parentElement.parentElement.dataset ===
        icon.parentElement.parentElement.parentElement.dataset
        ) {
            icon.classList.toggle("plusToggle"); // toggle it
        }
    });
    // 2- loop on all (- icon) and check it
        iconMinus.forEach((icon) => {
          // check h3 and (- icon) on same container
          if (
            e.target.parentElement.parentElement.dataset ===
            icon.parentElement.parentElement.parentElement.dataset
          ) {
            icon.classList.toggle("minusToggle"); // toggle it
          }
        });
        // 3- loop on all answers 
        answers.forEach((answer) => {
          // check if h3 & answer on same container
        if (
          e.target.parentElement.parentElement.dataset ===
          answer.parentElement.parentElement.dataset
        ) {
           answer.parentElement.classList.toggle("answerToggle")
        }
      });
  });
});

