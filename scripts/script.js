const links = document.querySelectorAll(".link-landing");

const imgHover = [
  "image/tip-party-hover.svg",
  "image/recruiter-party-hover.svg",
  "image/tokenstream-party-hover.svg",
  "image/pay-party-hover.svg",
  "image/grant-party-hover.svg",
];
links.forEach((link, index) => {
  link.addEventListener("mouseover", ({ target }) => {
    target.src = imgHover[index];
  });
});

const imgOut = [
  "image/tip-menu.svg",
  "image/recruit-menu.svg",
  "image/token-stream-menu.svg",
  "image/pay-menu.svg",
  "image/grant-menu.svg",
];

links.forEach((link, index) => {
  link.addEventListener("mouseout", ({ target }) => {
    target.src = imgOut[index];
  });
});
