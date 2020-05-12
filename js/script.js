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
  photo.innerHTML = "Photo 1"
  document.getElementById("photos").appendChild(photo);
}

function loadImages()
{
  var u = 1;
  var i = 0;
  while (i < 10) {
    var photo = document.createElement('div');
    photo.setAttribute("class", "photo");
    photo.innerHTML = "Photo " + u
    document.getElementById("photos").appendChild(photo);
    u++;
    i++;
  }
}
