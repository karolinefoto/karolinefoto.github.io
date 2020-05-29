// Unused block of code
/*
function createColumns(){
  var column1 = document.createElement('div');
  var column2 = document.createElement('div');
  var column3 = document.createElement('div');
  var column4 = document.createElement('div');
  column1.setAttribute("class", "column");
  column2.setAttribute("class", "column");
  column3.setAttribute("class", "column");
  column4.setAttribute("class", "column");
  column1.setAttribute("id", "column1");
  column2.setAttribute("id", "column2");
  column3.setAttribute("id", "column3");
  column4.setAttribute("id", "column4");
  document.body.appendChild(column1);
  document.body.appendChild(column2);
  document.body.appendChild(column3);
  document.body.appendChild(column4);
}
*/

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
var numberOfPicturesStemning = 45;
var numberOfPicturesNatur = 74;
var numberOfPicturesDyr = 46;
var numberOfPicturesPortrett = 08;
var numberOfPicturesFavorittar = 17;

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

function loadImagesFavorittar(){
  var i = 0;
  nr = 1;
  var u = 0;
  var c = 1;
  while (i < numberOfPicturesFavorittar) {
    if (nr < 10) {
      u = pad(nr);
    }
    else {
      u = nr;
    }
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxFavorittar" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "../photos/fav" + u +".jpg");
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgFavorittar" + u);
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("boxFavorittar" + u).appendChild(photo);
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

function showFavorittar() {
  removeImages();
  loadImagesFavorittar();
}

function loadImagesStemning() {
  var i = 0;
  nr = 1;
  var u = 0;
  var c = 1;
  while (i < numberOfPicturesStemning) {
    if (nr < 10) {
      u = pad(nr);
    }
    else {
      u = nr;
    }
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxStemning" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "../photos/ste" + u +".jpg");
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgStemning" + u);
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("boxStemning" + u).appendChild(photo);
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

function showStemning() {
  removeImages();
  loadImagesStemning();
}

function loadImagesNatur() {
  var i = 0;
  nr = 1;
  var u = 0;
  var c = 1;
  while (i < numberOfPicturesNatur) {
    if (nr < 10) {
      u = pad(nr);
    }
    else {
      u = nr;
    }
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxNatur" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "../photos/nat" + u +".jpg");
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgNatur" + u);
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("boxNatur" + u).appendChild(photo);
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

function showNatur() {
  removeImages();
  loadImagesNatur();
}

function loadImagesDyr() {
  var i = 0;
  nr = 1;
  var u = 0;
  var c = 1;
  while (i < numberOfPicturesDyr) {
    if (nr < 10) {
      u = pad(nr);
    }
    else {
      u = nr;
    }
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxDyr" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "../photos/dyr" + u +".jpg");
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgDyr" + u);
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("boxDyr" + u).appendChild(photo);
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

function showDyr() {
  removeImages();
  loadImagesDyr();
}

function loadImagesPortrett() {
  var i = 0;
  nr = 1;
  var u = 0;
  var c = 1;
  while (i < numberOfPicturesPortrett) {
    if (nr < 10) {
      u = pad(nr);
    }
    else {
      u = nr;
    }
    var box = document.createElement('div');
    var photo = document.createElement('img');
    var source = "../photos/por";
    var jpg = ".jpg";
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxPortrett" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", source + u + jpg);
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgPortrett" + u);
    document.getElementById("column" + c).appendChild(box);
    document.getElementById("boxPortrett" + u).appendChild(photo);
    photo.setAttribute("onclick", "imageViewer(src);");
    nr++;
    i++;
    if (c < 4){
      c++;
    } else {
      c = 1;
    }
  }
}

function showPortrett() {
  removeImages();
  loadImagesPortrett();
}

function loadImagesAll() {
  loadImagesStemning();
  loadImagesNatur();
  loadImagesDyr();
  loadImagesPortrett();
}

function showAll() {
  removeImages();
  loadImagesAll();
}

function clickImage() {
  getElementById();
}

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
  var oldNr = oldSrc.slice(-6 ,-4);
  var oldGrp = oldSrc.slice(-9, -6);
  var newNr = Number(oldNr);
  var newGrp = oldGrp;
  if (localStorage.getItem('currentCategory') == 'all') {
    if (oldGrp == "por" && newNr >= numberOfPicturesPortrett) {
      newNr = 1;
      newGrp = 'ste';
    }
    else if (oldGrp == "nat" && newNr >= numberOfPicturesNatur) {
      newNr = 1;
      newGrp = 'dyr';
    }
    else if (oldGrp == "ste" && newNr >= numberOfPicturesStemning) {
      newNr = 1;
      newGrp = 'nat';
    }
    else if (oldGrp == "dyr" && newNr >= numberOfPicturesDyr) {
      newNr = 1;
      newGrp = 'por';
    }
    else if (oldGrp == "fav" && newNr >= numberOfPicturesFavorittar) {
      newNr = 1;
    }
    else {
      newNr++;
    }
  } else {
    if (oldGrp == "por" && newNr >= numberOfPicturesPortrett) {
      newNr = 1;
    }
    else if (oldGrp == "nat" && newNr >= numberOfPicturesNatur) {
      newNr = 1;
    }
    else if (oldGrp == "ste" && newNr >= numberOfPicturesStemning) {
      newNr = 1;
    }
    else if (oldGrp == "dyr" && newNr >= numberOfPicturesDyr) {
      newNr = 1;
    }
    else if (oldGrp == "fav" && newNr >= numberOfPicturesFavorittar) {
      newNr = 1;
    }
    else {
      newNr++;
    }
  }


  if (newNr < 10) {
    newNr = pad(newNr);
  }
  var newerSrc = oldSrc.replace(oldNr, newNr);
  var newestSrc = newerSrc.replace(oldGrp, newGrp);
  imageViewChild.setAttribute("src", newestSrc);
}

function prevImage() {
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-6 ,-4);
  var oldGrp = oldSrc.slice(-9, -6);
  var newNr = Number(oldNr);
  var newGrp = oldGrp;
  if (localStorage.getItem('currentCategory') == 'all') {
    if (newNr <= 1) {
      if (oldGrp == "por") {
        newNr = numberOfPicturesDyr;
        newGrp = 'dyr';
      }
      if (oldGrp == "nat") {
        newNr = numberOfPicturesStemning;
        newGrp = 'ste';
      }
      if (oldGrp == "ste") {
        newNr = numberOfPicturesPortrett;
        newGrp = 'por';
      }
      if (oldGrp == "dyr") {
        newNr = numberOfPicturesNatur;
        newGrp = 'nat';
      }
      if (oldGrp == "fav") {
        newNr = numberOfPicturesFavorittar;
      }
    } else {
      newNr--;
    }
  }
  else {
    if (newNr <= 1) {
      if (oldGrp == "por") {
        newNr = numberOfPicturesPortrett;
      }
      if (oldGrp == "nat") {
        newNr = numberOfPicturesNatur;
      }
      if (oldGrp == "ste") {
        newNr = numberOfPicturesStemning;
      }
      if (oldGrp == "dyr") {
        newNr = numberOfPicturesDyr;
      }
      if (oldGrp == "fav") {
        newNr = numberOfPicturesFavorittar;
      }
    } else {
      newNr--;
    }
  }

  if (newNr < 10) {
    newNr = pad(newNr);
  }
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
  return (d < 10) ? '0' + d.toString() : toString();
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

/*
function selectLanguage(language) {
//  document.getElementsByClassName("lang-no").style.display="none";
//  document.getElementsByClassName("lang-en").style.display="none";
//  document.getElementsByClassName(language).style.display = "unset";
//  return false;
  var y = document.getElementsByClassName("lang-no");
  var u;
  for (u = 0; u < y.length; u++) {
   y[u].style.display = "none";
  }
  var z = document.getElementsByClassName("lang-en");
  var o;
  for (o = 0; o < z.length; o++) {
   z[o].style.display = "none";
  }
  var x = document.getElementsByClassName(language);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "";
  }
}
*/

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
