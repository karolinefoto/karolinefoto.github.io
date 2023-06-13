//
// INSTRUKSJONAR
// Bytt ut tala nedanfor med kor mange bilder som ligg totalt i dei tilsvarande mappene
// ENDRE IKKJE PÅ LINJENR FOR DESSE VARIABLANE! SKAL VERE 8 TIL 13
// Når du legg til eit nytt bilde, følger du det eksisterande namnemønsteret t.d. dyr057 for det 57ande bildet i kategorien dyr.
//
// SKRIV TALET PÅ BILDER I KVAR KATEGORI
var DyrNr = 93;
var PorNr = 18;
var LanNr = 88;
var PlaNr = 134;
var DivNr = 99;
var FavNr = 46;

// Det var det :)

const el = document.querySelector('img');
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();

function activeButtons() {
  //Make buttons active
  // var header = document.getElementById("nav-top-buttons");
  var btns = document.getElementById("nav-top-buttons").getElementsByClassName("header-button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    // var current = document.getElementsByClassName("active-header-button");
    document.getElementsByClassName("active-header-button")[0].className = document.getElementsByClassName("active-header-button")[0].className.replace(" active-header-button", "");
    this.className += " active-header-button";
    });
  }
}

//Split the images into 4 columns
function chooseColumn() {
  console.error('chooseColumn is deprecated');
  // var columnNr = 1;
  // var column = getElementById("column" + columnNr);
  // if (columnNr < 4){ columnNr++; } else { columnNr = 1; }
  // return columnNr;
}
var nr = 001;

function removeImages() {
  document.getElementById("photos-view").innerHTML = '';
  // document.getElementById("column1").innerHTML = '';
  // document.getElementById("column2").innerHTML = '';
  // document.getElementById("column3").innerHTML = '';
  // document.getElementById("column4").innerHTML = '';
}

localStorage.setItem('category_slice', 1);

function loadImages(category, categoryNr, isAll){
  clearCollections();
  console.log(category);
  var i = 0; var u; var c;
  if (isAll == true){ c = localStorage.getItem('category_slice'); } else { c = 1; }

  nr = 1;
  //let categoryNr = category + 'Nr';
  console.log(categoryNr);
  while (i < categoryNr) {
    u = pad(nr);
    console.log(u);
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "box" + category + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "../photos/" + category + u +".jpg");
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "img" + category + u);
    photo.setAttribute("loading", "lazy");
    document.getElementById('photos-view').appendChild(box);
    // document.getElementById("column" + c).appendChild(box);
    document.getElementById("box" + category + u).appendChild(photo);
    photo.setAttribute("onclick", "imageViewer(src);");
    nr++; i++;

    // Split into 4 columns
  //   if (c < 4){ c++; } else { c = 1; }
  //   if (i == categoryNr - 1) {
  //     console.log(categoryNr);
  //   }
    localStorage.setItem('category_slice', c);
  }
}

function show(category, categoryNr, isAll) {
  removeImages();
  loadImages(category, categoryNr, isAll);
}

function showAll() {
  removeImages();
  loadImages('dyr', DyrNr, true);
  loadImages('por', PorNr, true);
  loadImages('lan', LanNr, true);
  loadImages('pla', PlaNr, true);
  loadImages('div', DivNr, true);
}

function imageViewer(inputImage) {
  document.addEventListener("keyup", keyPress);
  var viewer = document.createElement('div');
  // var buttonBox = document.createElement('div');
  var button1 = document.createElement('button');
  var button2 = document.createElement('button');
  var button3 = document.createElement('button');
  var imageView = document.createElement('div');
  var imageViewChild = document.createElement('img');
  viewer.setAttribute("id", "viewer");
  // buttonBox.setAttribute("id", "button-box");
  button1.setAttribute("id", "viewer-prev");
  button1.setAttribute("onclick", "prevImage();");
  button1.innerHTML = '';
  button2.setAttribute("id", "viewer-close");
  button2.setAttribute("onclick", "closeViewer();");
  button2.innerHTML = '×';
  button3.setAttribute("id", "viewer-next");
  button3.setAttribute("onclick", "nextImage();");
  button3.innerHTML = '';
  var button1Icon = document.createElement('img');
  var button3Icon = document.createElement('img');
  button1Icon.src = '../images/left-arrow-1-white.png';
  button3Icon.src = '../images/right-arrow-1-white.png';
  button1.appendChild(button1Icon);
  button3.appendChild(button3Icon);

  imageView.setAttribute("id", "image-view");
  imageViewChild.setAttribute("id", "image-viewer-child");
  imageViewChild.setAttribute("src", inputImage);
  document.body.appendChild(viewer);
  document.getElementById("viewer").appendChild(imageView);
  document.getElementById("image-view").appendChild(imageViewChild);
  // document.getElementById("viewer").appendChild(buttonBox);
  // document.getElementById("button-box").appendChild(button1);
  // document.getElementById("button-box").appendChild(button2);
  // document.getElementById("button-box").appendChild(button3);
  document.getElementById("viewer").appendChild(button1);
  document.getElementById("viewer").appendChild(button2);
  document.getElementById("viewer").appendChild(button3);
  body.setAttribute("class", "no-scroll");
  var viewerObj = document.getElementById("viewer");
  viewerObj.focus();
}

function closeViewer() {
  const viewer = document.getElementById("viewer");
  viewer.parentNode.removeChild(viewer);
  document.body.focus();
  body.removeAttribute("class", "no-scroll");
  document.removeEventListener("keyup", keyPress);
}

function analyzeNextSrc(src, nr, direction) {
  nowNr = pad(nr);
  if (direction == 'next') {
    nextNr = pad(nr + 1);
  }
  else if (direction == 'prev') {
    nextNr = pad(nr - 1);
  }
  var nextSrc = src.replace(nowNr, nextNr);
  var img = new Image();
  img.src = nextSrc;
  console.log("nextSrc = " + nextSrc);
  return img.height != 0;
}

function nextImage() {
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-7 ,-4);
  console.log('oldNr = ' + oldNr);
  var oldGrp = oldSrc.slice(-10, -7);
  console.log('oldGrp = ' + oldGrp);
  var newNr = Number(oldNr);
  console.log('newNr = ' + newNr);
  var newGrp = oldGrp;
  console.log('newGrp = ' + newGrp);
  if (localStorage.getItem('currentCategory') == 'col') {
    // if (analyzeNextSrc(oldSrc, newNr) == true) {
    if (analyzeNextSrc(oldSrc, newNr, 'next') == false) {
      newNr = Number(oldNr);
    }
    else {
      newNr++;
    }
  }
  else if (localStorage.getItem('currentCategory') == 'all') {
    if (oldGrp == "dyr" && newNr >= DyrNr) {
      newNr = 1;
      newGrp = 'por';
    }
    else if (oldGrp == "por" && newNr >= PorNr) {
      newNr = 1;
      newGrp = 'lan';
    }
    else if (oldGrp == "lan" && newNr >= LanNr) {
      newNr = 1;
      newGrp = 'pla';
    }
    else if (oldGrp == "pla" && newNr >= PlaNr) {
      newNr = 1;
      newGrp = 'div';
    }
    else if (oldGrp == "div" && newNr >= DivNr) {
      newNr = 1;
      newGrp = 'dyr';
    }
    else if (oldGrp == "fav" && newNr >= FavNr) {
      newNr = 1;
    }
    else {
      newNr++;
    }
  } else {
    if (oldGrp == "por" && newNr >= PorNr) {
      newNr = 1;
    }
    else if (oldGrp == "lan" && newNr >= LanNr) {
      newNr = 1;
    }
    else if (oldGrp == "pla" && newNr >= PlaNr) {
      newNr = 1;
    }
    else if (oldGrp == "dyr" && newNr >= DyrNr) {
      newNr = 1;
    }
    else if (oldGrp == "div" && newNr >= DivNr) {
      newNr = 1;
    }
    else if (oldGrp == "fav" && newNr >= FavNr) {
      newNr = 1;
    }
    else {
      newNr++;
    }
  }
  newNr = pad(newNr);
  var newerSrc = oldSrc.replace(oldNr, newNr);
  var newestSrc = newerSrc.replace(oldGrp, newGrp);
  imageViewChild.setAttribute("src", newestSrc);
}

function prevImage() {
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-7 ,-4);
  var oldGrp = oldSrc.slice(-10, -7);
  var newNr = Number(oldNr);
  var newGrp = oldGrp;
  if (localStorage.getItem('currentCategory') == 'col') {
    // if (analyzeNextSrc(oldSrc, newNr) == true) {
    if (analyzeNextSrc(oldSrc, newNr, 'prev') == false) {
      newNr = 1;
    }
    else {
      newNr--;
    }
  }
  else if (localStorage.getItem('currentCategory') == 'all') {
    if (newNr <= 1) {
      if (oldGrp == "dyr") {
        newNr = DivNr;
        newGrp = 'div';
      }
      if (oldGrp == "div") {
        newNr = PlaNr;
        newGrp = 'pla';
      }
      if (oldGrp == "pla") {
        newNr = LanNr;
        newGrp = 'lan';
      }
      if (oldGrp == "lan") {
        newNr = PorNr;
        newGrp = 'por';
      }
      if (oldGrp == "por") {
        newNr = DyrNr;
        newGrp = 'dyr';
      }
      if (oldGrp == "fav") {
        newNr = FavNr;
      }
    } else {
      newNr--;
    }
  }
  else {
    if (newNr <= 1) {
      if (oldGrp == "por") {
        newNr = PorNr;
      }
      if (oldGrp == "dyr") {
        newNr = DyrNr;
      }
      if (oldGrp == "lan") {
        newNr = LanNr;
      }
      if (oldGrp == "pla") {
        newNr = PlaNr;
      }
      if (oldGrp == "div") {
        newNr = DivNr;
      }
      if (oldGrp == "fav") {
        newNr = FavNr;
      }
    } else {
      newNr--;
    }
  }
  newNr = pad(newNr);
  var newerSrc = oldSrc.replace(oldNr, newNr);
  var newestSrc = newerSrc.replace(oldGrp, newGrp);
  imageViewChild.setAttribute("src", newestSrc);
}

function loopAround() {
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var grp = oldSrc.slice(-9, -6);
  if (localStorage.getItem('currentCategory') == 'all') {
  }
}

function setCurrentCategory(category) {
  localStorage.setItem('currentCategory', category);
}

function resetCurrentCategory() {
  localStorage.setItem('currentCategory', 'all');
}

// add 0 or 00 to numbers to make a 3 char ing length string. Does not work for numbers over 999
function pad(d) {
  if (d < 100 && d > 9) { // numbers between 9 and 100
    return (d < 100) ? '0' + d.toString() : toString();
  }
  else if (d < 10) { // numbers under 10
    return (d < 10) ? '00' + d.toString() : toString();
  }
  else { // numbers over 99
    return d.toString();
  }
}

function keyPress() {
  if (event.keyCode === 37) { //if press left arrow key
    prevImage();
  } else if (event.keyCode === 39) { //if press right arrow key
    nextImage();
  } else if (event.keyCode === 27) { //if press escape
    closeViewer();
  }
}
//
// function hideSidebar() { document.getElementById("sidebar").style.display = "none"; }
// function showSidebar() { document.getElementById("sidebar").removeAttribute("class", "hidden-phone"); }
//
// function toggleSidebar() {
//   var sidebar = document.getElementById("sidebar");
//   if (sidebar.getAttribute("class") === "phone-hidden") {
//     sidebar.removeAttribute("class", "phone-hidden");
//     body.setAttribute("class", "no-scroll");
//   } else {
//     sidebar.setAttribute("class", "phone-hidden");
//     body.removeAttribute("class", "no-scroll");
//   }
// }

function toggleMenu() {
  var menu = document.getElementById("nav-popup-menu");
  var menuParent = document.getElementById("nav-menu-2");
  if (menuParent.getAttribute("class") === "phone-hidden desktop-hidden") {
    menuParent.removeAttribute("class", "phone-hidden");
    body.setAttribute("class", "no-scroll");
  } else {
    menuParent.setAttribute("class", "phone-hidden desktop-hidden");
    body.removeAttribute("class", "no-scroll");
  }
}

// HTML drop-down menu for changing category
function categoryChange() {
  const category_switcher = document.getElementById("category");
  let cat = category_switcher.options.selectedIndex;
  switch(cat) {
    case 0:
      showAll();
      setCurrentCategory('all');
      oki();
      break;

    case 1:
      show('fav', FavNr, false);
      setCurrentCategory('fav');
      oki();
      break;

    case 2:
      show('dyr', DyrNr, false);
      setCurrentCategory('dyr');
      oki();
      break;

    case 3:
      show('por', PorNr, false);
      setCurrentCategory('por');
      oki();
      break;

    case 4:
      show('lan', LanNr, false);
      setCurrentCategory('lan');
      oki();
      break;

    case 5:
      show('pla', PlaNr, false);
      setCurrentCategory('pla');
      oki();
      break;

    case 6:
      show('div', DivNr, false);
      setCurrentCategory('div');
      oki();
      break;
  }
}

function showCollections() {
  clearCollections();
  removeImages();

  var view = document.getElementById("collections-view");

  // COLLECTIONS ADDED BELOW:
  // addCollection(view, 'Nyttår 2022-2023', 'Godt Nytt År!', '2023-01-01', 5);
  addCollection(view, 'Vinter 2023', 'Vi hadde eit mål om å ta nokre vinterbilete medan snøven endå var her. Ganske fornøgd med resultatet!', '2023-02-27', 2);
}

function clearCollections() {
  document.getElementById("collections-view").innerHTML = '';
}

function addCollection(view, heading, subtext, collection_dir, img_nr) {
  header = document.createElement('h4');
  header.setAttribute("class", "collection-header");
  header.innerHTML = heading;
  view.appendChild(header);
  text = document.createElement('p');
  text.setAttribute("class", "collection-text");
  text.innerHTML = subtext;
  view.appendChild(text);
  dir = '../photos/' + collection_dir + '/';
  console.log(collection_dir);
  console.log(dir);
  box = document.createElement('div');
  box.setAttribute("class", "collection-box");
  view.appendChild(box);
  for (let i = 0; i < img_nr; i++) {
    img_box = document.createElement('div');
    img_box.setAttribute("class", "photo-box");
    img = document.createElement('img');
    img.setAttribute("src", dir + 'img' + pad(i + 1) + ".jpg");
    img.setAttribute("class", "photo");
    img.setAttribute("onclick", "imageViewer(src);");
    img_box.appendChild(img);
    box.appendChild(img_box);
  }
  separator = document.createElement('hr');
  view.appendChild(separator);
}


function agreeToCookies() {
  localStorage.setItem('hasSeenCookieWarning', 'yes');
  document.getElementById("cookie-warning-box").style.display="none";
}

function checkCookies() {
  if (localStorage.getItem('hasSeenCookieWarning') !== 'yes') {
    document.getElementById("cookie-warning-box").style.display="block";
  }
}

function showKontaktForm() {
  document.getElementById("kontakt-form-div").style.display="block";
}

function hideKontaktForm() {
  document.getElementById("kontakt-form-div").style.display="none";
}

function oki() {
  document.getElementById("welcome").style.top="-100vh";
  // localStorage.setItem('hasBeenWelcomed', 'yes');
}

function okidoki() {
  document.getElementById("hbtn-0").className = document.getElementById("hbtn-0").className.replace(" active-header-button", "");
  document.getElementById("hbtn-1").className = document.getElementById("hbtn-1").className += " active-header-button";
}

function nvm() {
  document.getElementById("welcome").style.top="0vh";
  // localStorage.setItem('hasBeenWelcomed', 'yes');
}

function checkWelcome() {
  if (localStorage.getItem('hasBeenWelcomed') !== 'yes') {
    // document.getElementById("welcome").style.display="grid";
  }
}

function runCarousel() {
  slides = document.getElementsByClassName("carousel")[0].getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].className.includes(" carousel-slide--1")) {
      slides[i].className = slides[i].className.replace(" carousel-slide--1", " carousel-slide-0");
    }
    else if (slides[i].className.includes(" carousel-slide-0")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-0", " carousel-slide-1");
    }
    else if (slides[i].className.includes(" carousel-slide-1")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-1", " carousel-slide-2");
    }
    else if (slides[i].className.includes(" carousel-slide-2")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-2", " carousel-slide-3");
    }
    else if (slides[i].className.includes(" carousel-slide-3")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-3", " carousel-slide-4");
    }
    else if (slides[i].className.includes(" carousel-slide-4")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-4", " carousel-slide-5");
    }
    else if (slides[i].className.includes(" carousel-slide-5")) {
      slides[i].className = slides[i].className.replace(" carousel-slide-5", " carousel-slide--1");
    }
    else {
      console.warn("CAROUSEL - no match");
    }
  }
}
let runningCarousel = window.setInterval(runCarousel, 5000)
