const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaHeading = document.querySelector(".cta-text h1")
let ctaButton = document.querySelector(".cta-text button")
let ctaImage = document.querySelector("#cta-img")
let nav = document.querySelector('nav');
let links = document.querySelectorAll('a')
let textHeadings = document.querySelectorAll(".text-content h4");
let contentText = document.querySelectorAll(".text-content p");
let middleImage = document.querySelector("#middle-img");
let contactHeading = document.querySelector(".contact h4");
let contactParagraphs = document.querySelectorAll(".contact p");
let footer = document.querySelector('footer p');

ctaHeading.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImage.src = siteContent['cta']['img-src'];

links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

textHeadings[0].textContent = siteContent["main-content"]["features-h4"];
textHeadings[1].textContent = siteContent["main-content"]["about-h4"];
textHeadings[2].textContent = siteContent["main-content"]["services-h4"];
textHeadings[3].textContent = siteContent["main-content"]["product-h4"];
textHeadings[4].textContent = siteContent["main-content"]['vision-h4'];

middleImage.src = siteContent["main-content"]['middle-img-src'];

contentText[0].textContent = siteContent["main-content"]["features-content"];
contentText[1].textContent = siteContent["main-content"]["about-content"];
contentText[2].textContent = siteContent["main-content"]["services-content"];
contentText[3].textContent = siteContent["main-content"]["product-content"];
contentText[4].textContent = siteContent["main-content"]["vision-content"];

contactHeading.textContent = siteContent["contact"]["contact-h4"];
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

footer.textContent = siteContent['footer']['copyright'];

links.forEach(element => {element.style.color = 'green';});

let navAppend = document.createElement('a');
navAppend.textContent = 'bar';

let navPrepend = document.createElement('a');
navPrepend.textContent = 'foo';

nav.append(navAppend);
nav.prepend(navPrepend);




