(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".mob-menu-list a"), // Вибір всіх посилань у меню
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Додаємо обробник подій для всіх посилань у меню
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();

