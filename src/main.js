const reviewsList = document.querySelector(".reviews-list");
let touchStartX = 0;
let touchEndX = 0;

reviewsList.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

reviewsList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    reviewsList.scrollLeft += 300; // Swipe left
  } else if (touchEndX > touchStartX) {
    reviewsList.scrollLeft -= 300; // Swipe right
  }
}