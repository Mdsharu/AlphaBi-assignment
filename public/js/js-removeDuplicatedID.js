// Remove Duplicate ID of Images on TileGrid Modules - HP us-en
var dupDivId = document.querySelectorAll(".rad-card-feature__cover-img > .radimage >.cmp-image ");
for (var i = 0; i < dupDivId.length; i++) {
  dupDivId[i].removeAttribute("id");
}

var dupDivId2 = document.querySelectorAll(".rad-card__background-gradient > .radimage >.cmp-image ");
for (var i = 0; i < dupDivId2.length; i++) {
  dupDivId2[i].removeAttribute("id");
}
