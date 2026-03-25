// modal

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.querySelector(".relative");

  // Show modal

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  // Trigger animation

  setTimeout(() => {
    modal.classList.remove("opacity-0");
    content.classList.remove("scale-95");
    content.classList.add("scale-100");
  }, 10);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.querySelector(".relative");

  // Reverse animation

  modal.classList.add("opacity-0");
  content.classList.remove("scale-100");
  content.classList.add("scale-95");
  document.body.classList.remove("modal-open");

  // Hide

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}
