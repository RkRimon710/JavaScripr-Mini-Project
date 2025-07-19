let scrollContainer = document.querySelector(".gallary");
let bankBtn = document.getElementById("backBtn");
let nextBn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.delaY;
})

nextBn.addEventListener("click", ()=>{
  scrollContainer.style .scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

bankBtn.addEventListener("click", ()=>{
  scrollContainer.style .scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});