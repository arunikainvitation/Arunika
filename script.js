/* ===============================
   URL PARAMETER
================================ */
const params = new URLSearchParams(window.location.search);

// Nama tamu
const guest = params.get("to");
if(guest){
  document.getElementById("guest").innerText = guest;
}

// Background dari foto (local / online)
const bg = params.get("bg");
if(bg){
  document.documentElement.style.setProperty(
    "--bg-image",
    `url('${bg}')`
  );
}

// Warna tema
const color = params.get("color");
if(color){
  document.documentElement.style.setProperty(
    "--primary",
    color
  );
}

/* ===============================
   OPEN INVITATION
================================ */
function openInvitation(){
  document.getElementById("music").play();
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

/* ===============================
   COPY TEXT
================================ */
function copyText(text){
  navigator.clipboard.writeText(text);
  alert("Berhasil disalin: " + text);
}

/* ===============================
   SHARE WHATSAPP
================================ */
function shareWA(){
  const link = window.location.href;
  const text = `Undangan Pernikahan Digital by ARUNIKA 💍✨\n${link}`;
  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`
  );
}
