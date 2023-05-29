$(document).ready(function() {
  var scaleXValueBy, scaleYValueBy;

  console.log(window.innerWidth);

  if(window.innerWidth <= 200)
  {
    scaleXValueBy = 0.55;
    scaleYValueBy = 0.55;
  }
  else if(window.innerWidth <= 500)
  {
    scaleXValueBy = 0.75;
    scaleYValueBy = 0.75;
  }
  else if(window.innerWidth <= 700)
  {
    scaleXValueBy = 1.30;
    scaleYValueBy = 1.30;
  }
  else if(window.innerWidth <= 1100)
  {
    scaleXValueBy = 1.65;
    scaleYValueBy = 1.65;
  }
  else
  {
    scaleXValueBy = 3.00;
    scaleYValueBy = 2.55;
  }
  
  var horizontalCenter, verticalCenter;

  var clone;

  $('.clickableImage').click(function() {
  var centeredDiv = document.createElement('div');
  centeredDiv.id = "centeredDivID";
  centeredDiv.className = "centeredDivClass";
  centeredDiv.style.overflow='auto';
  document.getElementsByTagName('body')[0].appendChild(centeredDiv);

  clone = $(this)[0].cloneNode(false);
  clone.setAttribute('id',"clonedElement");
  clone.style.cursor = "pointer";
   centeredDiv.appendChild(clone);

  horizontalCenter = (window.innerWidth / 2) - (clone.width / 2);
  verticalCenter = (window.innerHeight / 2) - (clone.height / 2);

  clone.style.left = horizontalCenter + 'px';
  clone.style.top = verticalCenter + 'px';
  clone.style.transform = "scale(" + scaleXValueBy + "," + scaleYValueBy + ")";
  clone.style.zIndex = "20";

  document.getElementById('allImagesDiv').style.opacity = 0.25;

  clone.onclick = function() {
    centeredDiv.remove();
    document.getElementById('allImagesDiv').style.opacity = 1;
  }; // end onclick() function
  }); // end click() function
}); // end ready()
