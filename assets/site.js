const SITE_CONFIG = {
  enquiryEndpoint: "",
};

const page = document.body.dataset.page || "";
const navItems = [
  ["home", "Home", "index.html"],
  ["recognise", "Recognise Yourself", "recognise-yourself.html"],
  ["approach", "How I Work", "how-i-work.html"],
  ["together", "Working Together", "working-together.html"],
  ["about", "About Troy", "about.html"],
  ["services", "Services", "services.html"],
];

const header = document.querySelector("[data-site-header]");
if (header) {
  header.innerHTML = `
    <a class="skip-link" href="#main">Skip to main content</a>
    <div class="site-header">
      <div class="shell nav-wrap">
        <a class="brand" href="index.html" aria-label="Troy Shelton home">
          <strong>T Shelton Therapy</strong><span>Psychotherapy · Coaching · Consultancy</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">
          ${navItems.map(([key,label,href]) => `<a href="${href}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="nav-cta" href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
        </nav>
      </div>
    </div>`;
}

const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="shell">
        <div class="footer-grid">
          <div><p class="eyebrow">Take the next step</p><h2>Begin with a conversation.</h2><a class="button" href="contact.html">Free 15-minute consultation</a></div>
          <div><h3>Explore</h3><ul class="footer-links"><li><a href="recognise-yourself.html">Recognise Yourself</a></li><li><a href="how-i-work.html">How I Work</a></li><li><a href="services.html">Services</a></li><li><a href="about.html">About Troy</a></li></ul></div>
          <div><h3>Contact</h3><ul class="footer-links"><li><a href="tel:+447418608771">07418 608771</a></li><li><a href="mailto:Connect@tsheltontherapy.com">Connect@tsheltontherapy.com</a></li><li>Therapy Hub, Office 20<br>Ipswich IP1</li></ul></div>
        </div>
        <div class="footer-bottom"><span>© <span data-year></span> Troy Shelton</span><span>Available in person and online</span></div>
      </div>
    </footer>`;
}

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll(".media-slot img").forEach((image) => {
  const markMissing = () => image.closest(".media-slot")?.classList.add("is-missing");
  image.addEventListener("error", markMissing);
  if (image.complete && image.naturalWidth === 0) markMissing();
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 })
  : null;
document.querySelectorAll(".reveal").forEach((el) => observer ? observer.observe(el) : el.classList.add("is-visible"));

const form = document.querySelector("[data-enquiry-form]");
if (form) {
  const status = form.querySelector("[data-form-status]");
  const startedAt = Date.now();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.dataset.state = "";
    if (!form.reportValidity()) return;
    if (form.elements.website.value) return;
    if (Date.now() - startedAt < 2500) {
      status.textContent = "Please take a moment to check the form before sending.";
      status.dataset.state = "error";
      return;
    }
    if (!SITE_CONFIG.enquiryEndpoint) {
      status.innerHTML = 'Secure form delivery is being connected. For now, please email <a href="mailto:Connect@tsheltontherapy.com">Connect@tsheltontherapy.com</a> or call <a href="tel:+447418608771">07418 608771</a>.';
      status.dataset.state = "error";
      return;
    }
    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    submit.textContent = "Sending…";
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(SITE_CONFIG.enquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Delivery failed");
      form.reset();
      status.textContent = "Thank you. Your enquiry has been sent.";
      status.dataset.state = "success";
    } catch {
      status.innerHTML = 'Your enquiry could not be sent. Please email <a href="mailto:Connect@tsheltontherapy.com">Connect@tsheltontherapy.com</a> or call <a href="tel:+447418608771">07418 608771</a>.';
      status.dataset.state = "error";
    } finally {
      submit.disabled = false;
      submit.textContent = "Send enquiry";
    }
  });
}
