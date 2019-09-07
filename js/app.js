$(function() {
  $(".button").click(function() {
    $("h1").css("color", "green").animate({
      fontSize: "6rem"
    });
    $("img").css("border", "solid 1px green").animate({
      borderWidth: "5px"
    });
    $("h1").animate({
      fontSize: "3rem"
    });
  });
});
