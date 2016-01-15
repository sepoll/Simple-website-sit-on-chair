
var menu = $(".menu-toggle").mouseover(function(){
	$(this).children(".menu__hover").show(200);
});

menu.mouseleave(function(){
	$(this).children().hide(200);
});
var div_hide = $(".content__1, .content__2").mouseover(function(){
	$(this).children().hide(200);
});
div_hide.mouseleave(function(){
	$(this).children().show(200);
});

 // var owl = $(".middle__1");
 
 // owl.owlCarousel({
 //   navigation : true,
 //   singleItem : true,
 //   transitionStyle : "fade"
 // });
  var nameSelect = $(".new .rodzaj");
  var nameDisplay = $("#down1");
  nameSelect.on("change", function(){
  		nameDisplay.text(nameSelect.val());

  });
