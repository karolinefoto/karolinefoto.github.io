/*
function wait(ms)
{
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while (d2-d < ms);
}



function loadPhotos()
{
  var photo = document.createElement('div');
  photo.setAttribute("class", "photo");
  photo.innerHTML = "Photo " + nr
  document.getElementById("photos").appendChild(photo);
  nr++;
}
*/

/*
function scanImages()
{
  var i = 0;
  var nameString = "photos/img" + nr;
  var filename = nameString.split("/").pop();
  if (filename ) {

  }
  $.ajax(
  {
    url:''
    type:'HEAD'
    error: function()
    {

    },
    success: function()
    {

  }
  }
  );
}
*/

/*
function printNumber()
{
  window.alert(readNumber);
}

function imageExist(url)
{
  var img = new Image();
  img.src = url;
  return img.height != 0;
}
*/

/*
function scanImages()
{
  var i = 0;
  var nameString = "photos/img" + nr;
  var filename = nameString.split("/").pop();
  if (imageExist(nameString) !== 0)
  {
    loadImages();
  }
  else
  {
    return 0;
  }
}
*/

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

//Split the images into 4 columns
function chooseColumn() {
  var columnNr = 1;
  var column = getElementById("column" + columnNr);

  if (columnNr < 4){
    columnNr++;
  }
  else {
    columnNr = 1;
  }
  return columnNr;
}

var nr = 01;

var numberOfPicturesStemning = 32;
var numberOfPicturesNatur = 53;
var numberOfPicturesDyr = 46;
var numberOfPicturesPortrett = 07;

function removeImages()
{
  const elem1 = document.getElementById("column1");
  elem1.innerHTML = '';
  const elem2 = document.getElementById("column2");
  elem2.innerHTML = '';
  const elem3 = document.getElementById("column3");
  elem3.innerHTML = '';
  const elem4 = document.getElementById("column4");
  elem4.innerHTML = '';
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
    console.log(u);
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxStemning" + u);
    box.setAttribute("focusable", "0");
    photo.setAttribute("src", "photos/stemning/ste" + u +".jpg");
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
    photo.setAttribute("src", "photos/natur/nat" + u +".jpg");
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
    photo.setAttribute("src", "photos/dyr/dyr" + u +".jpg");
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

//var x = 0;

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
    var source = "photos/portrett/por";
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
    }
    else {
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
  button1.setAttribute("onclick", "prevImage();")
  button2.setAttribute("id", "viewer-close");
  button2.setAttribute("onclick", "closeViewer();")
  button3.setAttribute("id", "viewer-next");
  button3.setAttribute("onclick", "nextImage();")
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

  var viewerObj = document.getElementById("viewer");
  viewerObj.focus();

}

function closeViewer()
{
  const viewer = document.getElementById("viewer");
  viewer.parentNode.removeChild(viewer);
  document.body.focus();
  document.getElementById("viewer").document.removeEventListener("keyup", keyPress);
}

function nextImage()
{
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-6 ,-4);
  var grp = oldSrc.slice(-9, -6);
  console.log(oldSrc);
  console.log(oldNr);
  var newNr = Number(oldNr);
  console.log(grp);
  console.log(numberOfPicturesStemning + "stemningnr");
  if (grp == "por" && newNr >= numberOfPicturesPortrett)
  {
    newNr = 1;
  }
  else if (grp == "nat" && newNr >= numberOfPicturesNatur)
  {
    newNr = 1;
  }
  else if (grp == "ste" && newNr >= numberOfPicturesStemning)
  {
    newNr = 1;
  }
  else if (grp == "dyr" && newNr >= numberOfPicturesDyr)
  {
    newNr = 1;
  }
  else {
    newNr++;
  }

  if (newNr < 10) {
    newNr = pad(newNr);
  }
  console.log("newNr = " + newNr);
  var newSrc = oldSrc.replace(oldNr, newNr);
  imageViewChild.setAttribute("src", newSrc);
}

function prevImage()
{
  var imageViewChild = document.getElementById("image-viewer-child");
  var oldSrc = imageViewChild.getAttribute("src");
  var oldNr = oldSrc.slice(-6 ,-4);
  var grp = oldSrc.slice(-9, -6);
  console.log(oldSrc);
  console.log(oldNr);
  console.log(grp);
  var newNr = Number(oldNr);
  if (newNr <= 1)
  {
    if (grp == "por")
    {
      newNr = numberOfPicturesPortrett;
    }
    if (grp == "nat")
    {
      newNr = numberOfPicturesNatur;
    }
    if (grp == "ste")
    {
      newNr = numberOfPicturesStemning;
    }
    if (grp == "dyr")
    {
      newNr = numberOfPicturesDyr;
    }
  }
  else
  {
    newNr--;
  }
  if (newNr < 10) {
    newNr = pad(newNr);
  }

  console.log("newNr = " + newNr);
  var newSrc = oldSrc.replace(oldNr, newNr);
  imageViewChild.setAttribute("src", newSrc);
}

function pad(d)
{
  return (d < 10) ? '0' + d.toString() : toString();
}


function keyPress() {
  if (event.keyCode === 37) { //if press left arrow key
    prevImage();
  }
  else if (event.keyCode === 39) { //if press right arrow key
    nextImage();
  }
  else if (event.keyCode === 27) { //if press escape
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
  } else {
    sidebar.setAttribute("class", "phone-hidden");
  }
}

function toggleMenu() {
  var menu = document.getElementById("nav-popup-menu");
  if (menu.getAttribute("class") === "phone-hidden") {
    menu.removeAttribute("class", "phone-hidden");
  } else {
    menu.setAttribute("class", "phone-hidden");
  }
}
