/* 화면을 그리는 코드예요. 내용 수정은 content.js 에서 하세요. */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const img = (f) => "images/" + f;

  // Shared: nav, footer
  function nav(active) {
    const el = $("#nav"); if (!el) return;
    el.innerHTML = `<div class="l"><a href="index.html">${esc(SITE.name)}</a><span class="tag">${esc(SITE.tag)}</span></div>
      <nav class="r" aria-label="Main">
        <a href="index.html#work"${active === "work" ? ' aria-current="page"' : ""}>Selected work</a>
        <a href="index.html#about">Profile</a>
        <a href="index.html#cv">CV</a>
        <a href="index.html#contact">Contact</a>
      </nav>`;
  }
  function footer() {
    const el = $("#contact"); if (!el) return;
    const links = [];
    if (SITE.email) links.push(`<span>${esc(SITE.email)}</span>`);
    if (SITE.instagram) links.push(`<a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a>`);
    if (SITE.linkedin) links.push(`<a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
    if (SITE.resume) links.push(`<a href="${esc(SITE.resume)}" target="_blank" rel="noopener">Résumé</a>`);
    el.innerHTML = `<span>© ${new Date().getFullYear()} ${esc(SITE.name)}</span><div class="links">${links.join("")}</div>`;
  }
  function coverHTML(p) {
    if (p.cover) return `<img loading="lazy" src="${img(p.cover)}" alt="${esc(p.title)}">`;
    return `<div class="textcover"><div class="row"><span>${esc(p.category)}</span><span>${esc(p.year)}</span></div>
      <div class="t">${esc(p.title)}</div><div class="row"><span>${esc(p.role)}</span><span>View →</span></div></div>`;
  }

  // Home
  function home() {
    nav("work");
    const h = esc(SITE.hello), hl = esc(SITE.highlight || "");
    $("#hello").innerHTML = hl && h.includes(hl) ? h.replace(hl, `<span class="g">${hl}</span>`) : h;
    const items = SITE.ticker.map((t) => `<span>${esc(t)}</span>`).join("");
    $("#ticker").innerHTML = items + items;
    $("#cards").innerHTML = PROJECTS.map((p) => `
      <a class="card" href="project.html#${esc(p.id)}">
        <div class="img">${coverHTML(p)}</div>
        <div class="cap"><div><b>${esc(p.title)}</b><small>${esc(p.category)} (${esc(p.year)})</small></div>
        <span class="role">${esc(p.role)}</span></div>
      </a>`).join("");
    $("#about-lead").textContent = SITE.aboutLead;
    $("#about-txt").innerHTML = SITE.about.map((t) => `<p>${esc(t)}</p>`).join("") +
      `<dl class="facts">${SITE.facts.map((f) => `<dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd>`).join("")}</dl>`;
    const cv = $("#cv-list");
    if (cv) cv.innerHTML = (SITE.cv || []).map((g) => `
      <div class="cv-group">
        <h3 class="mono">${esc(g.group)}</h3>
        <ul>${g.items.map((r) => `
          <li class="cv-row">
            <span class="when">${esc(r[0])}</span>
            <div class="what"><b>${esc(r[1])}</b><span>${esc(r[2])}</span></div>
            <p class="note">${esc(r[4] || "")}</p>
            <span class="where">${esc(r[3] || "")}</span>
          </li>`).join("")}</ul>
      </div>`).join("");
    footer();
  }

  // Project page
  let works = [], cur = 0, lastFocus = null;
  function project() {
    nav("work");
    const render = () => {
      const id = (location.hash || "").slice(1);
      const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
      const p = PROJECTS[i], nx = PROJECTS[(i + 1) % PROJECTS.length];
      document.title = p.title + " · " + SITE.name;
      works = p.works || [];
      const meta = [["Year", p.year], ["Type", p.category], ["Role", p.role], ["Context", p.course]].filter((m) => m[1]);
      $("#project").innerHTML = `
        <div class="p-head">
          <h1>${esc(p.title)}</h1>
          <dl class="p-meta">${meta.map((m) => `<dt>${esc(m[0])}</dt><dd>${esc(m[1])}</dd>`).join("")}</dl>
        </div>
        <div class="p-intro">
          <div class="txt">${(p.intro || []).map((t) => `<p>${esc(t)}</p>`).join("")}
            ${p.link ? `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">View live site ↗</a>` : ""}
            ${(p.links || []).length ? `<ul class="links">${p.links.map((l) => `<li><a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])} ↗</a></li>`).join("")}</ul>` : ""}</div>
          <div class="mono">${works.length ? works.length + " works · click to enlarge" : ""}</div>
        </div>
        ${p.cover && !works.length ? `<div class="p-cover"><img src="${img(p.cover)}" alt="${esc(p.title)}"></div>` : ""}
        ${works.length ? `<div class="grid">${works.map((w, k) => `
          <button type="button" class="work" data-k="${k}" aria-label="Open ${esc(w[1])}">
            <div class="img${w[4] === "contain" ? " fit" : ""}"><img loading="lazy" src="${img(w[0])}" alt="${esc(w[1])}"></div>
            <div class="cap"><div><b>${esc(w[1])}</b></div><span class="role">${esc(String(w[2] || "").split(" · ")[0])}</span></div>
          </button>`).join("")}</div>` : (!p.cover && !(p.links || []).length ? `<div class="p-empty">Images coming soon.</div>` : "")}
        <div class="next"><span class="mono">Next project</span><a class="big" href="project.html#${esc(nx.id)}">${esc(nx.title)} →</a></div>`;
      document.querySelectorAll(".work").forEach((b) => b.addEventListener("click", () => openLB(+b.dataset.k)));
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", () => { closeLB(); render(); });
    render();
    footer();

    $("#lb-close").onclick = closeLB;
    $("#lb-prev").onclick = () => show(cur - 1);
    $("#lb-next").onclick = () => show(cur + 1);
    document.addEventListener("keydown", (e) => {
      if ($("#lb").hidden) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
  }
  function show(k) {
    cur = (k + works.length) % works.length;
    const w = works[cur];
    $("#lb-img").src = img(w[0]); $("#lb-img").alt = w[1];
    $("#lb-title").textContent = w[1];
    $("#lb-meta").textContent = w[2] || "";
    $("#lb-desc").textContent = w[3] || "";
    $("#lb-count").textContent = String(cur + 1).padStart(2, "0") + " / " + works.length;
  }
  function openLB(k) { lastFocus = document.activeElement; show(k); $("#lb").hidden = false; document.body.style.overflow = "hidden"; $("#lb-close").focus(); }
  function closeLB() { const lb = $("#lb"); if (!lb || lb.hidden) return; lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }

  if (document.getElementById("project")) project(); else home();
})();
