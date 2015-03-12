onload=function(){ attachHandlers(); }

function attachHandlers(){
  var the_nums = document.getElementsByName("number");
  for (var i=0; i < the_nums.length; i++) { the_nums[i].onclick=inputNumbers; }
}

function inputNumbers() {
  var the_field = document.getElementById('calcfield');
  var the_value = this.value;
  switch (the_value) {
    case 'Clear' :
      the_field.value = "";
      break;
    case 'Done' :
      if (the_field.value.length < 4){
        $(".ui-dialog-titlebar").hide();
        $('#ok-dialog').html('Your PIN should be 4 numbers long');
        $('#ok-dialog').dialog ({
            modal: true,
            title: ''
          });
          setTimeout (function() {
              $('#ok-dialog').dialog ('close');
          }, 2000);
          break;
      }else {
        $(".ui-dialog-titlebar").hide();
        $('#ok-dialog').html('That is not the correct PIN');
        $('#ok-dialog').dialog ({
            modal: false,
            title: ''
          });
          $(".ui-dialog-titlebar").hide() 
          setTimeout (function() {
              $('#ok-dialog').dialog ('close');
          }, 2000);
          break;
      }
      

    default :
      if (the_field.value.length < 4){ 
        document.getElementById("calcfield").value += "*";
      }
      break;
  }
  document.getElementById('calcfield').focus();
    return true;
}

function getValue() {
  alert(document.getElementById('calcfield').value);
  document.getElementById('calcfield').focus();
  return false;
}