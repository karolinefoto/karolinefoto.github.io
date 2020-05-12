function wait(ms)
{
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while (d2-d < ms);
}

var nr = 1;

function loadPhotos()
{
  var photo = document.createElement('div');


  photo.setAttribute("class", "photo");
  photo.innerHTML = "Photo " + nr
  document.getElementById("photos").appendChild(photo);
  nr++;
}



function loadImages()
{
  var i = 0;
  while (i < 10) {
    var photo = document.createElement('div');
    photo.setAttribute("class", "photo");
    photo.innerHTML = "Photo " + nr
    document.getElementById("photos").appendChild(photo);
    nr++;
    i++;
  }
}
