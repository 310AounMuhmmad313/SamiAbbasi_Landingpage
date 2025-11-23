


gsap.from("nav", {
  y: -50,
  opacity: 0,
  duration: 1.8,
  ease: "power2.out"
});

gsap.from("#mainh", {
  y: 100,
  opacity: 0,
  duration: 1.9,
  ease: "power2.out"
});
gsap.from(".t1 ,.t2,.t5,.t6", {
  x: -200,
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

gsap.from(".img", {
  y: 80,
  opacity: 0,
  scale: 0.9,
  duration: 2.5,
  ease: "power2.out"
});

gsap.from(".t1 , .t6", {
  scale: 0.8,
  duration: 2.8,
  delay: 0.5,
  ease: "power1.out"
});
function countUp(id, target) {
  const el = document.getElementById(id);
  let n = 0;
  new IntersectionObserver(e => {
    if (e[0].isIntersecting) {
      const t = setInterval(() => {
        el.textContent = n.toLocaleString() + "+";
        n += 200;
        if (n >= target) {
          el.textContent = target.toLocaleString() + "+";
          clearInterval(t);
        }
      }, 20);
    }
  }).observe(el);
}

countUp("c1", 25000);
countUp("c2", 20000);
countUp("c3", 15000);
function form() {
  const popup = document.getElementById("popupForm");
  popup.style.display = "flex";

  // Animate the form smoothly
  gsap.fromTo(
    ".popup-form",
    { y: -60, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
  );

  // Stop background scroll
  document.body.style.overflow = "hidden";
}

function closeForm() {
  gsap.to(".popup-form", {
    y: -40,
    opacity: 0,
    scale: 0.95,
    duration: 0.4,
    ease: "power1.in",
    onComplete: () => {
      document.getElementById("popupForm").style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

gsap.from('.request-ad', {
scrollTrigger: '.request-ad',
y: 80,
opacity: 0,
duration: 1.5,
ease: 'power2.out'
});


gsap.from('.shop-footer', {
scrollTrigger: '.shop-footer',
y: 60,
opacity: 0,
duration: 1.6,
ease: 'power2.out'
});


