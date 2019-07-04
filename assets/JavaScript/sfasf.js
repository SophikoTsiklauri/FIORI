<script>
logoImage1=document.querySelector(".logoImage1");
logoImage=document.querySelector(".logoImage");
menuDivisionDefault=document.querySelector(".menuDivisionDefault");
function myFunction(x) {
  if (x.matches) {
    logoImage1.style.width = "90px";
    logoImage1.style.height = "115px";
    logoImage.style.padding = "15px 0px";
    logoImage.style.width = "88px";
    menuDivisionDefault.style.paddingTop="160px";
  } else {
   logoImage1.style.width = "204px";
   logoImage1.style.height = "204px";
   logoImage.style.padding = "15px 15px";
   logoImage.style.padding = "204px";
   menuDivisionDefault.style.paddingTop="300px";
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x);
x.addListener(myFunction);
</script>