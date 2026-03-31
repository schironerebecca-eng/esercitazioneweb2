import "./style.scss";

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import "bootstrap/js/dist/collapse";
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero h1", {
  scale: 0.5,
  duration: 1,
  opacity: 0,
  rotate: 15, 
});

gsap.from("#hero p", {
  x: 500,
  duration: 1,
  opacity: 0,
});

gsap.from("#hero .btn", {
  yPercent: 100,
  duration: 1,
  opacity: 0,
  repeat: -1,
  yoyo: true,
  backgroundColor: "yellow",
  // fontweight: 100,
});

gsap.from("#chi-siamo h2" ,{
  scale: 0.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    start: "center 50%",
    markers: true,
    trigger: "#chi-siamo"
  }
});
