
// Shared script for countdown, whatsapp and simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // countdown to next batch (2 days)
  const future = new Date(Date.now() + 2*24*60*60*1000);
  function updateCountdown(){
    const now = new Date();
    let diff = Math.max(0, future - now);
    const days = Math.floor(diff / (24*60*60*1000)); diff -= days*24*60*60*1000;
    const hrs = Math.floor(diff / (60*60*1000)); diff -= hrs*60*60*1000;
    const mins = Math.floor(diff / (60*1000));
    document.querySelectorAll('.cd-days').forEach(e=>e.textContent = String(days).padStart(2,'0'));
    document.querySelectorAll('.cd-hrs').forEach(e=>e.textContent = String(hrs).padStart(2,'0'));
    document.querySelectorAll('.cd-mins').forEach(e=>e.textContent = String(mins).padStart(2,'0'));
  }
  updateCountdown();
  setInterval(updateCountdown, 60*1000);
});
