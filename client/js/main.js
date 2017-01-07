
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
      return false;
    }
  }
});

//--------------Bio MODALS-----------------------//
var modal = document.getElementById('profile_modal');
var profile1 = document.getElementById("profile1");
var span = document.getElementsByClassName("close")[0];
profile1.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var model2 = document.getElementById('profile_modal2');
var profile2 = document.getElementById("profile2");
var span2 = document.getElementsByClassName("close2")[0];
profile2.onclick = function() {
    model2.style.display = "block";
}
span2.onclick = function() {
    model2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model2) {
        model2.style.display = "none";
    }
}

var model3 = document.getElementById('profile_modal3');
var profile3 = document.getElementById("profile3");
var span3 = document.getElementsByClassName("close3")[0];
profile3.onclick = function() {
    model3.style.display = "block";
}
span3.onclick = function() {
    model3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model3) {
        model3.style.display = "none";
    }
}

var model4 = document.getElementById('profile_modal4');
var profile4 = document.getElementById("profile4");
var span4 = document.getElementsByClassName("close4")[0];
profile4.onclick = function() {
    model4.style.display = "block";
}
span4.onclick = function() {
    model4.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model4) {
        model4.style.display = "none";
    }
}

var model5 = document.getElementById('profile_modal5');
var profile5 = document.getElementById("profile5");
var span5 = document.getElementsByClassName("close5")[0];
profile5.onclick = function() {
    model5.style.display = "block";
}
span5.onclick = function() {
    model5.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model5) {
        model5.style.display = "none";
    }
}

var model6 = document.getElementById('profile_modal6');
var profile6 = document.getElementById("profile6");
var span6 = document.getElementsByClassName("close6")[0];
profile6.onclick = function() {
    model6.style.display = "block";
}
span6.onclick = function() {
    model6.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model6) {
        model6.style.display = "none";
    }
}
