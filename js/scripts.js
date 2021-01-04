//alert("hello")
/*jQuery('h1').click(function(){
    alert("This is a heading tag")
  });

  jQuery('p').click(function(){
    alert("This is a paragraph")
  });

  jQuery('img').click(function(){
    alert("This is an image")
  });*/
     $(document).ready(function() {
     $(".container1").click(function() {
     $(".col-md p").toggle();
     $(".col-md p").toggle();
     $(".col-md p").toggle();
    });
  });
  $(document).ready(function() {
    $(".container1").click(function() {
    $(".column2 p").toggle();
   });
 });
 $(document).ready(function() {
  $(".container1").click(function() {
  $(".column3 p").toggle();
 });
});

