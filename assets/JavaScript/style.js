var number=document.getElementById('number');
var plus=document.querySelectorAll('.plus');
var minus=document.querySelectorAll('.minus');
var products=document.querySelectorAll('.products');
var login=document.querySelector("#login");
var log = document.querySelector("#log");
var search=document.querySelector("#search");
var search_1 = document.querySelector("#search_1");
var my_but_2=document.querySelector("#my_but_2");
var mynavbar = document.querySelector("#mynavbar");
var number = document.querySelector("#number");
var scroll = document.querySelector("#scroll");
var fa_cart_plus=document.querySelector(".fa-cart-plus");
var mynavbar = document.querySelector("#mynavbar");
var productslength=products.length;
var pluslength=plus.length;
var count=0;
function counter(){
for(var i=0;i<pluslength;i++){
  plus[i].onclick = function() {
  count += 1;
  number.innerHTML = count;
}}}
counter();
$(document).ready(function(){
        $("#close").click(function(event) {
        $('#search_1').fadeOut();
        $('#search').fadeIn();
          });
        $("#scroll").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    });
    
  

 search.addEventListener("click", function(){
    search_1.style.display = "inline-block";
    search_1.style.width = "100%";
    search.style.display = "none";
});   





my_but_2.addEventListener("click", function(){
  const parentElement = this.parentElement.getBoundingClientRect();
  mynavbar.style.width="100%";

});




    $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    number.style.color="#000";
    fa_cart_plus.style.color="#000";
    mynavbar.style.position = "fixed";
    mynavbar.style.WebkitTransitionDuration = "2s";
  } else {
    fa_cart_plus.style.color="#fff";
    number.style.color="#fff";
    mynavbar.style.WebkitTransitionDuration = "2s";
    mynavbar.style.position = "absolute";
  }
});

    $(document).scroll(function() {
  var y = $(this).scrollTop();
  var x = document.getElementById('scroll');
  if (y > 100) {
    mynavbar.style.zIndex="157";
    x.style.display = "block";
    x.style.WebkitTransitionDuration = "2s";
  } else {
    mynavbar.style.zIndex="17";
    x.style.WebkitTransitionDuration = "2s";
    x.style.display = "none";
  }
});


  AOS.init();




