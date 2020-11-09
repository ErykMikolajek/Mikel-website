$(function() {
    $("#nav-item-contact").on('click', function() {
		var position = $("#section-contact").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#nav-item-offer").on('click', function() {
		var position = $("#section-offer").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#nav-item-about").on('click', function() {
		var position = $("#section-about").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#buttonMain").on('click', function() {
		var position = $("#section-contact").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#sidenav-contact").on('click', function() {
		var position = $("#section-contact").offset().top;
		closeNav();
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#sidenav-offer").on('click', function() {
		var position = $("#section-offer").offset().top;
		closeNav();
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
	$("#sidenav-about").on('click', function() {
		var position = $("#section-about").offset().top;
		closeNav();
        $("HTML, BODY").animate({
            scrollTop: position
        }, 100);
    });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}