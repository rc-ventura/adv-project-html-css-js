// Component initialization
function initializeComponents() {
  // Load components with data-include attribute
  document.querySelectorAll("[data-include]").forEach(async (element) => {
    const file = element.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        element.outerHTML = html;

        // If this is the WhatsApp button, initialize it
        if (file.includes("whatsapp_button")) {
          initializeWhatsAppButton();
        }
      }
    } catch (error) {
      console.error(`Error loading component: ${file}`, error);
    }
  });
}

// WhatsApp button functionality
function initializeWhatsAppButton() {
  if (window.__whatsappButtonInitialized) return;
  window.__whatsappButtonInitialized = true;

  const whatsappButton = document.getElementById("whatsappButton");
  if (whatsappButton) {
    function pulseButton() {
      whatsappButton.classList.add("pulse-animation");
      setTimeout(() => {
        whatsappButton.classList.remove("pulse-animation");
      }, 1000);
    }

    // Start pulsing after a short delay
    setTimeout(() => {
      setInterval(pulseButton, 3000);
      // Initial pulse
      pulseButton();
    }, 1000);

    whatsappButton.addEventListener("click", function () {
      window.open(
        "https://wa.me/5551998272024?text=Olá, gostaria de mais informações!",
        "_blank"
      );
    });
  }
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeComponents();
});
