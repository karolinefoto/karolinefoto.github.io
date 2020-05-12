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

function imageExist(url)
{
  var img = new Image();
  img.src = url;
  return img.height != 0;
}

function scanImages()
{
  var i = 0;
  var nameString = "photos/img" + nr;
  var filename = nameString.split("/").pop();
  
}

function loadImages()
{
  var i = 0;
  while (i < 10) {
    var box = document.createElement('div');
    var photo = document.createElement('img');
    box.setAttribute("class", "photo-box");
    box.setAttribute("id", "img" + nr);
    photo.setAttribute("src", "photos/img" + nr +".jpg");
    photo.setAttribute("class", "photo");

    document.getElementById("photos").appendChild(box);
    document.getElementById("img" + nr).appendChild(photo);
    nr++;
    i++;
  }
}
