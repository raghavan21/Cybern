function myFunction() {
  var x = document.getElementById("canvas3d");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(function() {
  $(this).bind("contextmenu", function(e) {
    e.preventDefault();
  });
});

//disable_inspect_shortcut
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}
//l_1-input_verify
function formValidation(inputText){
  var ans = "kalilinux";
  if(inputText.value.match(ans))
  {
    alert("Correct");
    window.location.href = 'https://r.mtdv.me/videos/lFVW4XCGGt';
  }
  else{
    alert("Incorrect");
  }
}
