gsap.to("#hero", {
  opacity: 0,
  duration: 5,
  delay: 1,
  scrollTrigger: {
    trigger: "#hero",
    scroller: "body",
    start: " top 10%",
    end: "bottom 30%",
    scrub: true,
  },
});

gsap.to(".bg-vedios", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".bg-vedios",
    scroller: "body",
    start: "top 80%",
    end: "bottom 50%",
    scrub: 3,
  },
});

gsap.to(".reveal-type", {
  opacity: 1,
  duration: 10,
  scrollTrigger: {
    trigger: ".reveal-type",
    scroller: "body",
    start: "top 80%",
    end: "bottom 50%",
    scrub: "true",
  },
});

gsap.from(".section-6", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".section-6",
    scroller: "body",
    start: "top 40%",
    end: "bottom 80%",
    // scrub: "1",
  },
});

gsap.from(".section-8", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".section-8",
    scroller: "body",
    start: "top 50%",
    end: "bottom 80%",
    // scrub: "1",
  },
});

gsap.from(".bg-black-sec-10", {
  width: "70%",
  duration: 1,
  scrollTrigger: {
    trigger: ".bg-black-sec-10",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: "true",
  },
});

gsap.from(".sect-4", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".sect-4",
    scroller: "body",
    start: "top 50%",
    end: "bottom 80%",
    // scrub: "true",
  },
});

gsap.to(".main-10-img-3", {
  scale: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".main-10-img-3",
    scroller: "body",
    start: "top 70%",
    end: "bottom 80%",
    // scrub: "true",
  },
});
gsap.to(".img-4-sec-10", {
  y: 0,
  // duration: 0.7,
  scrollTrigger: {
    trigger: ".img-4-sec-10",
    scroller: "body",
    start: "top 90%",
    end: "bottom 99%",
    scrub: "true",
    ease: "linear",
  },
});
gsap.to(".wrapper-last-section", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".wrapper-last-section",
    scroller: "body",
    start: "top 60%",
    end: "bottom 90%",
    // scrub:"true",
  },
});

gsap.to(".service-cards", {
  opacity: 1,
  scale: 1,
  // duration:1,
  scrollTrigger: {
    trigger: ".service-cards",
    scroller: "body",
    start: "top 90%",
    end: "bottom 80%",
    // scrub: "true",
  },
});

gsap.to(".dropbox-testimonal", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".dropbox-testimonal",
    scroller: "body",
    start: "top 90%",
    end: "bottom 80%",
    // scrub: "true",
  },
});

gsap.to(".vedio-sec-7 video", {
  y: -100,
  duration: 4,
  scrollTrigger: {
    trigger: ".vedio-sec-7 video",
    scroller: "body",
    start: "top 70%",
    end: "bottom 80%",
    scrub: "true",
    // markers: "true",
  },
});

gsap.to(".video-sec-9", {
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".video-sec-9",
    scroller: "body",
    start: "top 70%",
    end: "bottom 50%",
    scrub: "true",
  },
});

gsap.to(".svg-1", {
  y: -200,
  duration: 1,
  scrollTrigger: {
    trigger: ".svg-1",
    scroller: "body",
    start: "top 80%",
    end: "bottom 60%",
    scrub: "true",
  },
});
