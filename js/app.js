$(document).ready(function() {
  var scaleXValueBy, scaleYValueBy;
  var clickable = true;

  if(window.innerWidth < 1030)
  {
    clickable = false;
  }
  else if(window.innerWidth <= 1100)
  {
    scaleXValueBy = 1.25;
    scaleYValueBy = 1.25;
  }
  else
  {
    scaleXValueBy = 3.00;
    scaleYValueBy = 2.55;
  }
  
  var horizontalCenter, verticalCenter;

  var clone;

  $('.clickableImage').click(function() {
    if(clickable)
    {  
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

      centeredDiv.onclick = function() {
        centeredDiv.remove();
        document.getElementById('allImagesDiv').style.opacity = 1;
      }; // end onclick() function
    }
  }); // end click() function
}); // end ready()
