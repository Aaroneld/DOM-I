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

// ## Task 1: Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content

let servicesLinkOne = document.getElementsByTagName("a")[0]
servicesLinkOne.textContent = siteContent.nav["nav-item-1"]
console.log(servicesLinkOne);

let servicesLinkTwo = document.getElementsByTagName("a")[1]
servicesLinkTwo.textContent = siteContent.nav["nav-item-2"]

let servicesLinkThree = document.getElementsByTagName("a")[2]
servicesLinkThree.textContent = siteContent.nav["nav-item-3"]

let servicesLinkFour = document.getElementsByTagName("a")[3]
servicesLinkFour.textContent = siteContent.nav["nav-item-4"]

let servicesLinkFive = document.getElementsByTagName("a")[4]
servicesLinkFive.textContent = siteContent.nav["nav-item-5"]

let servicesLinkSix = document.getElementsByTagName("a")[5]
servicesLinkSix.textContent = siteContent.nav["nav-item-6"]

let ctaH1 = document.querySelector(".cta-text");
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.fontFamily = 'Bangers', 'cursive';
console.log(ctaH1)

let codeSnippetImg = document.querySelector("#cta-img");
codeSnippetImg.src = siteContent.cta["img-src"]
console.log(codeSnippetImg)

let getStartedButton = document.querySelector(".cta.button");
getStartedButton.textContent = siteContent.cta.button;
console.log(getStartedButton);














// ## Task 2: Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// ## Task 3: Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// ## Stretch Goals

// * [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// ## Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.
