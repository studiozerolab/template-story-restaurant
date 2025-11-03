/**
 * Lightweight vanilla JS lightbox.
 * No dependencies; handles click → overlay → esc / arrow nav.
 */
export function initLightbox(selector = "[data-lightbox-index]") {
  const thumbs = document.querySelectorAll(selector);
  if (!thumbs.length) return;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <img class="lightbox-image" src="" alt="">
    <p class="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector(".lightbox-image");
  const caption = overlay.querySelector(".lightbox-caption");
  let current = 0;

  function show(index) {
    const el = thumbs[index];
    if (!el) return;
    const src = el.querySelector("img")?.src;
    img.src = src;
    caption.textContent = el.querySelector("img")?.alt || "";
    overlay.classList.add("active");
    current = index;
  }

  function hide() {
    overlay.classList.remove("active");
    img.src = "";
  }

  thumbs.forEach((el, i) => {
    el.addEventListener("click", () => show(i));
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hide();
  });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "Escape") hide();
    if (e.key === "ArrowRight") show((current + 1) % thumbs.length);
    if (e.key === "ArrowLeft") show((current - 1 + thumbs.length) % thumbs.length);
  });
}
