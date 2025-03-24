document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".advantages-item");
  const section = document.querySelector(".advantages");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            item.style.transition = "none"; // Reset transition

            setTimeout(() => {
              item.style.transition = "opacity 1s ease, transform 1s ease";
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 700); 
          });
        }
      });
    },
    { threshold: 0.3 } // Animation triggers when 30% of the section is visible
  );

  observer.observe(section);
});