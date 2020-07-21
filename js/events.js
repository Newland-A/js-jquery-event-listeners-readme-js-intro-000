//define functions here
function getIt(){
  
}

function frameIt() {
  $('img').on('load', function(){
  //actions you want to happen
});
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}

function pressIt() {
  
}

$(document).ready(function(){

// call functions here
getIt()
submitIt()
frameIt()
pressIt()


});
