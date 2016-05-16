var ans = "";
var clear = false;
var calc = "";
var buttons = ["AC", "CE", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "And", "="];
$(function() {
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function responsiveHeight() {
    if (isMobile.any()) {
        return screen.height;
    } else {
        return $(window).height();
    }
}

for (var i = 0; i < buttons.length; i++) {
	var btn = buttons[i];
	$(".buttons").append('<button class="button" value="' + btn + '">' + btn + '</button>');
}
$("body").css("max-height", responsiveHeight());
$(window).resize(function() {
	$("body").css("max-height", responsiveHeight());
});


});
$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");
    if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
      if(clear === false) {
        calc += text;
        $(".textbox").val(calc);
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
    } else if(text === "AC") {
      calc = "";
      $(".textbox").val("");
    } else if(text === "CE") {
      calc = calc.slice(0, -1);
      $(".textbox").val(calc);
    } else if(text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      $( "button:contains('And')" ).val(ans);
      clear = true;
    }
  });
});