document.getElementById("year").textContent = new Date().getFullYear();

const videos = document.querySelectorAll(".hover-video");
const swipeContainer = document.querySelector(".swipe-container");

// Pause all
function pauseAll(){
  videos.forEach(v=>{
    v.pause();
    v.currentTime=0;
  });
}

// Play one
function play(video){
  pauseAll();
  video.play().catch(()=>{});
}

// Desktop + Mobile
videos.forEach(video=>{
  video.addEventListener("mouseenter",()=>{
    if(window.innerWidth>768) play(video);
  });

  video.addEventListener("mouseleave",()=>{
    if(window.innerWidth>768){
      video.pause();
      video.currentTime=0;
    }
  });

  video.addEventListener("click",()=>{
    if(window.innerWidth<=768){
      video.paused ? play(video) : video.pause();
    }
  });
});

// Auto play on swipe
function autoPlay(){
  let center=window.innerWidth/2;

  videos.forEach(video=>{
    let rect=video.getBoundingClientRect();
    let videoCenter=rect.left+rect.width/2;

    if(Math.abs(center-videoCenter)<120){
      if(video.paused) play(video);
    }
  });
}

swipeContainer.addEventListener("scroll",()=>{
  if(window.innerWidth<=768) autoPlay();
});

// Arrows
document.querySelector(".prev").onclick=()=>{
  swipeContainer.scrollBy({left:-260,behavior:"smooth"});
};
document.querySelector(".next").onclick=()=>{
  swipeContainer.scrollBy({left:260,behavior:"smooth"});
};

// Sticky button fix
const hireBtn=document.getElementById("hireBtn");
const footer=document.getElementById("footer");

window.addEventListener("scroll",()=>{
  let footerTop=footer.getBoundingClientRect().top;
  let windowHeight=window.innerHeight;

  hireBtn.style.transform=
    footerTop<windowHeight+20
    ? "translateY(80px)"
    : "translateY(0)";
});
