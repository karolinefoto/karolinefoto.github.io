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
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo");
    box.setAttribute("id", "img" + nr);
    photo.setAttribute("src", "photos/img" + nr +".jpg");
    box.innerHTML = "Photo " + nr
    document.getElementById("photos").appendChild(box);
    document.getElementById("img" + nr).appendChild(photo);
    nr++;
    i++;
  }
}
