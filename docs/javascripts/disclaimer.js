document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("disclaimerAccepted") === "true") {
    return;
  }

  // Prevent background scrolling
  document.body.style.overflow = "hidden";

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "disclaimer-overlay";

  // Modal HTML structure
  overlay.innerHTML = `
    <div class="disclaimer-modal">
      <div class="disclaimer-icon">⚠️</div>
      <h2 class="disclaimer-title">Disclaimer & Terms of Use</h2>
      <p class="disclaimer-text">
        This website is dedicated to education, threat modeling, and understanding online privacy. 
        We do not encourage or condone any illegal activities or the misuse of the tools discussed herein. 
        By clicking "Accept & Proceed", you acknowledge that you are responsible for your own actions and compliance with local laws.
      </p>
      <button id="disclaimer-ok-btn" class="disclaimer-button">Accept & Proceed</button>
    </div>
  `;

  document.body.appendChild(overlay);

  // OK Button click listener
  const okBtn = document.getElementById("disclaimer-ok-btn");
  okBtn.addEventListener("click", function () {
    localStorage.setItem("disclaimerAccepted", "true");
    overlay.classList.add("disclaimer-fade-out");
    
    // Clean up after fade-out transition
    setTimeout(function () {
      overlay.remove();
      document.body.style.overflow = "";
    }, 400);
  });
});
