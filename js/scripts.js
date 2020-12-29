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
     $(".col-1 p").toggle();
     $(".col-2 p").toggle();
     $(".col-3 p").toggle();
    });
  });