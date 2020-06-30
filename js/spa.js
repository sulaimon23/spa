
setTimeout(function () {
    $('.inn').show().addClass('animated fadeInUp');}, 1600
);
setTimeout(function () {
 $('.inl').show().addClass('animated fadeInUp');}, 2200
);
$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 1400){
  $('.inf').show().addClass('animated fadeInLeftBig')
  console.log(height)
 }
})

$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 900){
  $('.hey').show().addClass('animated fadeInDown')
  console.log(height)
 }
})

$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 5000){
  $('footer').show().addClass('animated fadeInLeftBig')
  console.log(height)
 }
})

$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 3700){
  $('.treat-wrapper').show().addClass('animated fadeInUp')
  console.log(height)
 }
})

$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 4400){
  $('.event').show().addClass('animated fadeInLeftBig')
  console.log(height)
 }
})

$(window).scroll(function (){
 var height = $(window).scrollTop();
 if(height > 800){
  $('.hey').show().addClass('animated fadeInLeftBig')
  console.log(height)
 }
})
