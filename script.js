// إخفاء شاشة البداية
function hideSplash() {
  document.getElementById("splash-screen").style.display = "none";
}

// التبويبات
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// عداد تنازلي (مثال: حتى 1 يناير 2026)
const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days} يوم - ${hours} ساعة - ${minutes} دقيقة - ${seconds} ثانية`;

  if (distance < 0) {
    countdownEl.innerHTML = "انتهى الوقت";
  }
}, 1000);
