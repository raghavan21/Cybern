
function formValidation(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    alert("Valid");
    document.registration.email.focus();
    return true;
  }
  else{
    alert("wrong format");
    document.registration.email.focus();
    return false;
  }
}
