/* Sprache: Browsersprache als Vorgabe, manuelle Auswahl nur für diesen Aufruf */
(function () {
  var de = document.getElementById("lang-de");
  var en = document.getElementById("lang-en");
  if (!de || !en) return;
  var wantEn = /^en/i.test(navigator.language || "");
  (wantEn ? en : de).checked = true;
  function updateLanguage() {
    document.documentElement.lang = en.checked ? "en" : "de";
  }
  updateLanguage();
  de.addEventListener("change", updateLanguage);
  en.addEventListener("change", updateLanguage);
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
