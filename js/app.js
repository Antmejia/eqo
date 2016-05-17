var result = "";
var clear = false;
var calc = "";
var buttons = ["AC", "CE", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "Last", "="];
$(function() {
	
for (var i = 0; i < buttons.length; i++) {
	var btn = buttons[i];
	$(".buttons").append('<button class="button" value="' + btn + '">' + btn + '</button>');
}
$("body").css("max-height", $(window).height() + "px");
$(window).resize(function() {
	$("body").css("max-height", screen.height + "px");
});


});
$(document).ready(function() {
  $("button").click(function() {
    var value = $(this).attr("value");
    var box = $(".answer");
    if(parseInt(value, 10) == value || value === buttons[2] || value === buttons[3]|| value === buttons[7] || value === buttons[11] || value === buttons[15] || value === buttons[16]) {
      if(clear === false) {
        calc += value;
        box.val(calc);
      } else {
        calc = value;
        box.val(calc);
        clear = false;
      }
    } else if(value === buttons[0]) {
      calc = "";
      box.val(calc);
    } else if(value === buttons[1]) {
      calc = calc.slice(0, -1);
      box.val(calc);
    } else if(value === buttons[19]) {
      result = eval(calc);     
      $( "button:contains('Last')" ).val(result);
      calc = result;
      box.val(calc);
    }
  });
});