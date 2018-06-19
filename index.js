function roundImage(img) {
  var canvas = document.getElementById("ex1");
  const data = [];
  if (canvas){
    var context = canvas.getContext('2d');
    var imageObj = new Image();
    imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = 'http://www.sboutdoors.com/elements/img/elements/logo-150.png.';
    const imgData = context.getImageData(0, 0, 100, 100);
    for (var i=0;i<imgData.data.length;i+=4)
    {
      data.push(`${255-imgData.data[i]}, ${255-imgData.data[i+1]}, ${255-imgData.data[i+2]}, 1`);
    }
    console.log(data);
  }
}