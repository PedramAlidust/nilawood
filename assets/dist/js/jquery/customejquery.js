/* jquery Display All Gallery */
$(function () {
  /* hide gallery */
  $(".toggle_gallery").hide();
  /* show gallery */
  $("#dsp_all").click(function () {
    $(".toggle_gallery").fadeToggle(3000);
  /* change button text */  
    $(this).text(() => {
      if ($(this).text() == "Show All") {
        return "Hide All";
      } else {
        return "Show All";
      }
    });
  });
});

/* venobox plugin */
new VenoBox({
  selector: ".lightbox",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});
