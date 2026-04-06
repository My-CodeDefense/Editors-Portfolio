// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Video hover / click
const videos = document.querySelectorAll(".hover-video");
videos.forEach(video=>{
  video.addEventListener("mouseenter",()=>{ if(window.innerWidth>768) video.play(); });
  video.addEventListener("mouseleave",()=>{ if(window.innerWidth>768){ video.pause(); video.currentTime=0; } });
  video.addEventListener("click",()=>{ if(window.innerWidth<=768){ video.paused ? video.play() : video.pause(); } });
});

// Sticky button slide behind footer
const hireBtn = document.getElementById("hireBtn");
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  hireBtn.style.transform = footerTop < windowHeight + 20 ? "translateY(80px)" : "translateY(0)";
});

// SWIPE ARROWS
const prevBtn = document.querySelector(".arrow.prev");
const nextBtn = document.querySelector(".arrow.next");
const swipeContainer = document.querySelector(".swipe-container");

prevBtn.addEventListener("click", ()=>{ swipeContainer.scrollBy({left:-260, behavior:"smooth"}); });
nextBtn.addEventListener("click", ()=>{ swipeContainer.scrollBy({left:260,
behavior:"smooth"}); });
