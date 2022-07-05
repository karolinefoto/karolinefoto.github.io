//
// INSTRUKSJONAR
// Bytt ut tala nedanfor med kor mange bilder som ligg totalt i dei tilsvarande mappene
//
// Når du legg til eit nytt bilde, følger du det eksisterande namnemønsteret t.d. dyr057 for det 57ande bildet i kategorien dyr.
//
// SKRIV TALET PÅ BILDER I KVAR KATEGORI
var DyrNr = 67;
var PorNr = 16;
var LanNr = 44;
var PlaNr = 78;
var DivNr = 74;
var FavNr = 32;

// Det var det :)

function activeButtons() {
  //Make buttons active
  var header = document.getElementById("nav-top-buttons");
  var btns = header.getElementsByClassName("header-button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-header-button");
    current[0].className = current[0].className.replace(" active-header-button", "");
    this.className += " active-header-button";
    });
  }
}

//Split the images into 4 columns
function chooseColumn() {
  var columnNr = 1;
  var column = getElementById("column" + columnNr);
  if (columnNr < 4){
    columnNr++;
  } else {
    columnNr = 1;
  }
  return columnNr;
}
var nr = 01;

function removeImages() {
  const elem1 = document.getElementById("column1");
  elem1.innerHTML = '';
  const elem2 = document.getElementById("column2");
  elem2.innerHTML = '';
  const elem3 = document.getElementById("column3");
  elem3.innerHTML = '';
  const elem4 = document.getElementById("column4");
  elem4.innerHTML = '';
}

function loadImages(category, categoryNr){
  console.log(category);
  var i = 0;
  var u;
  var c = 1;
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
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("box" + category + u).appendChild(photo);
    photo.setAttribute("onclick", "imageViewer(src);");
    nr++;
    i++;
    if (c < 4){
      c++;
    }
    else {
      c = 1;
    }
  }
}

function show(category, categoryNr) {
  removeImages();
  loadImages(category, categoryNr);
}

function showAll() {
  removeImages();
  loadImages('dyr', DyrNr);
  loadImages('por', PorNr);
  loadImages('lan', LanNr);
  loadImages('pla', PlaNr);
  loadImages('div', DivNr);
}

/*
function clickImage() {
  getElementById();
}
*/

function imageViewer(inputImage) {
  document.addEventListener("keyup", keyPress);
  var viewer = document.createElement('div');
  var buttonBox = document.createElement('div');
  var button1 = document.createElement('button');
  var button2 = document.createElement('button');
  var button3 = document.createElement('button');
  var imageView = document.createElement('div');
  var imageViewChild = document.createElement('img');
  viewer.setAttribute("id", "viewer");
  buttonBox.setAttribute("id", "button-box");
  button1.setAttribute("id", "viewer-prev");
  button1.setAttribute("onclick", "prevImage();");
  button1.innerHTML = 'Forrige';
  button2.setAttribute("id", "viewer-close");
  button2.setAttribute("onclick", "closeViewer();");
  button2.innerHTML = 'X';
  button3.setAttribute("id", "viewer-next");
  button3.setAttribute("onclick", "nextImage();");
  button3.innerHTML = 'Neste';
  imageView.setAttribute("id", "image-view");
  imageViewChild.setAttribute("id", "image-viewer-child");
  imageViewChild.setAttribute("src", inputImage);
  document.body.appendChild(viewer);
  document.getElementById("viewer").appendChild(imageView);
  document.getElementById("image-view").appendChild(imageViewChild);
  document.getElementById("viewer").appendChild(buttonBox);
  document.getElementById("button-box").appendChild(button1);
  document.getElementById("button-box").appendChild(button2);
  document.getElementById("button-box").appendChild(button3);
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

function nextImage() {
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-7 ,-4);
  console.log(oldNr);
  var oldGrp = oldSrc.slice(-10, -7);
  console.log(oldGrp);
  var newNr = Number(oldNr);
  console.log(newNr);
  var newGrp = oldGrp;
  console.log(newGrp);
  if (localStorage.getItem('currentCategory') == 'all') {
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
  if (localStorage.getItem('currentCategory') == 'all') {
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
    console.log('1');
  }
}

function setCurrentCategory(category) {
  localStorage.setItem('currentCategory', category);
}

function resetCurrentCategory() {
  localStorage.setItem('currentCategory', 'all');
}

function pad(d) {
  if (d < 100 && d > 9) {
    return (d < 100) ? '0' + d.toString() : toString();
  } else {
    return (d < 10) ? '00' + d.toString() : toString();
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

function hideSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}

function showSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.removeAttribute("class", "hidden-phone");
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.getAttribute("class") === "phone-hidden") {
    sidebar.removeAttribute("class", "phone-hidden");
    body.setAttribute("class", "no-scroll");
  } else {
    sidebar.setAttribute("class", "phone-hidden");
    body.removeAttribute("class", "no-scroll");
  }
}

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
  localStorage.setItem('hasBeenWelcomed', 'yes');
}

function checkWelcome() {
  if (localStorage.getItem('hasBeenWelcomed') !== 'yes') {
    document.getElementById("welcome").style.display="grid";
  }
}
