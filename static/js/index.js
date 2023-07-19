document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalCloseBtn = modal.querySelector(".close-modal");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  portfolioCards.forEach(function (card, index) {
    card.addEventListener("click", function () {
      modal.classList.add("show");
      document.body.classList.add("modal-open");

      const modalTitle = modal.querySelector("h3");
      const projectDetails = modal.querySelector(".project-details");
      const projectTitle = card.querySelector(".content-title").textContent;
      const projectInfo = document.querySelector(
        `#project${index + 1}-details`
      ).innerHTML;

      modalTitle.textContent = projectTitle;
      projectDetails.innerHTML = projectInfo;
    });
  });

  modalCloseBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });
});
