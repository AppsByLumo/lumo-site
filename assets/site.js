(function () {
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");
  if (!headerTarget && !footerTarget) return;

  const root = document.body.dataset.siteRoot || ".";
  const page = document.body.dataset.page || "default";

  const pages = {
    home: {
      nav: [],
    },
    "storytime-privacy": {
      nav: [],
    },
    "storytime-terms": {
      nav: [],
    },
  };

  const config = pages[page] || { nav: [] };
  const logoLight = `${root}/assets/lumo-logo-black.png`;
  const logoDark = `${root}/assets/lumo-logo-white.png`;

  const navMarkup = config.nav.length
    ? `<nav class="site-nav" aria-label="Site navigation">${config.nav
        .map((item) =>
          item.current
            ? `<span class="current" aria-current="page">${item.label}</span>`
            : `<a href="${item.href}">${item.label}</a>`
        )
        .join("")}</nav>`
    : "";

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="brand-mark">
          <img class="logo-light" src="${logoLight}" alt="Lumo logo" width="255" height="255" />
          <img class="logo-dark" src="${logoDark}" alt="Lumo logo" width="255" height="255" />
        </div>
        <div class="topbar">
          <a href="${root}/index.html">About Lumo</a>
          ${navMarkup}
        </div>
      </header>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <p>Copyright 2026 • Apps by Lumo LLC</p>
      </footer>
    `;
  }
})();
