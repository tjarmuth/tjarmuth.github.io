/* Sprache: gespeicherte Auswahl, sonst Browsersprache */
(function () {
  var de = document.getElementById("lang-de");
  var en = document.getElementById("lang-en");
  if (!de || !en) return;
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var wantEn = saved ? saved === "en" : /^en/i.test(navigator.language || "");
  (wantEn ? en : de).checked = true;
  document.documentElement.lang = en.checked ? "en" : "de";
  function save() {
    document.documentElement.lang = en.checked ? "en" : "de";
    try { localStorage.setItem("lang", en.checked ? "en" : "de"); } catch (e) {}
  }
  de.addEventListener("change", save);
  en.addEventListener("change", save);
})();

/* Mobiles Menü nach Klick auf einen Link wieder schließen */
document.addEventListener("click", function (e) {
  var link = e.target.closest ? e.target.closest(".menu a") : null;
  var toggle = document.getElementById("nav-toggle");
  if (link && toggle) {
    toggle.checked = false;
  }
});

/* E-Mail-Adresse erst beim Klick zusammensetzen (Schutz vor Spam-Bots) */
document.addEventListener("click", function (e) {
  var mail = e.target.closest ? e.target.closest(".mail-link") : null;
  if (!mail) return;
  e.preventDefault();
  window.location.href = "mailto:" + mail.dataset.u + "@" + mail.dataset.d;
});
