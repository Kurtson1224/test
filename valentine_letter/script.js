let opened = false;
let i = 0;

const letterText = `Happy Valentine's Day!
I hope your day is filled with love and happiness.

Forever yours,
Kurt`;

function openLetter() {
  if (opened) return;

  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  // Hide front text and button
  const frontText = document.querySelector(".envelope-text");
  frontText.style.display = "none";

  opened = true;

  typeWriter();
}

function typeWriter() {
  const txt = document.getElementById("typedText");

  if (i < letterText.length) {
    txt.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // typing speed
  } else {
    const nextBtnContainer = document.getElementById("nextButtonContainer");
    nextBtnContainer.style.display = "block";

    const nextBtn = document.getElementById("nextButton");
    nextBtn.classList.add("show"); // fade in/out animation

    nextBtn.addEventListener("click", () => {
      alert("You clicked me! ❤️"); // replace with your action
    });
  }
}
