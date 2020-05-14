/*
function wait(ms)
{
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while (d2-d < ms);
}

//var nr = 1;

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

var numberOfPicturesStemning = 32;
var numberOfPicturesNatur = 53;
var numberOfPicturesDyr = 46;
var numberOfPicturesPortrett = 7;

function removeImages()
{
  const elem = document.getElementById("photos");
  elem.innerHTML = '';
}

function loadImagesStemning()
{
  var i = 0;
  var nr = 1;
  while (i < numberOfPicturesStemning) {
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "imgStemning" + nr);
    photo.setAttribute("src", "photos/stemning/ste" + nr +".jpg");
    photo.setAttribute("class", "photo");

    document.getElementById("photos").appendChild(box);
    document.getElementById("imgStemning" + nr).appendChild(photo);
    nr++;
    i++;
  }
}

function showStemning()
{
  removeImages();
  loadImagesStemning();
}

function loadImagesNatur()
{
  var i = 0;
  var nr = 1;
  while (i < numberOfPicturesNatur) {
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "imgNatur" + nr);
    photo.setAttribute("src", "photos/natur/nat" + nr +".jpg");
    photo.setAttribute("class", "photo");

    document.getElementById("photos").appendChild(box);
    document.getElementById("imgNatur" + nr).appendChild(photo);
    nr++;
    i++;
  }
}

function showNatur()
{
  removeImages();
  loadImagesNatur();
}

function loadImagesDyr()
{
  var i = 0;
  var nr = 1;
  while (i < numberOfPicturesDyr) {
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "imgDyr" + nr);
    photo.setAttribute("src", "photos/dyr/dyr" + nr +".jpg");
    photo.setAttribute("class", "photo");

    document.getElementById("photos").appendChild(box);
    document.getElementById("imgDyr" + nr).appendChild(photo);
    nr++;
    i++;
  }
}

function showDyr()
{
  removeImages();
  loadImagesDyr();
}

//var x = 0;

function loadImagesPortrett()
{
  var i = 0;
  var nr = 1;
  while (i < numberOfPicturesPortrett) {
    var box = document.createElement('div');
    var photo = document.createElement('img');
    var source = "photos/portrett/por";
    var jpg = ".jpg";

    /*var imgURL = document.querySelector('img.something').src;  */
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "boxPortrett" + nr);
    photo.setAttribute("src", source + nr + jpg);
    photo.setAttribute("class", "photo");
    photo.setAttribute("id", "imgPortrett" + nr);


    document.getElementById("photos").appendChild(box);
    document.getElementById("boxPortrett" + nr).appendChild(photo);
//    x == document.getElementById("imgPortrett" + nr).src;
    photo.setAttribute("onclick", "imageViewer(src);");
    nr++;
    i++;
  }
}

function showPortrett()
{
  removeImages();
  loadImagesPortrett();
}

function loadImagesAll()
{
  loadImagesStemning();
  loadImagesNatur();
  loadImagesDyr();
  loadImagesPortrett();
}

function showAll()
{
  removeImages();
  loadImagesAll();
}

function clickImage()
{
  getElementById();
}

function imageViewer(inputImage)
{
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
  imageViewChild.setAttribute("class", "image-viewer-child");
  imageViewChild.setAttribute("src", inputImage);

  document.body.appendChild(viewer);
  document.getElementById("viewer").appendChild(buttonBox);
  document.getElementById("button-box").appendChild(button1);
  document.getElementById("button-box").appendChild(button2);
  document.getElementById("button-box").appendChild(button3);
  document.getElementById("viewer").appendChild(imageView);
  document.getElementById("image-view").appendChild(imageViewChild);
}

function closeViewer()
{
  const viewer = document.getElementById("viewer");
  viewer.parentNode.removeChild(viewer);
  return false;
}

function nextImage()
{
  nr++;
}

function prevImage()
{
  nr--;
}
