$(function(){

  //INCLUDES for component html files
  function include(html){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file =  $(this).data('include') + '.html';
      $(this).load(file);
      console.log('Hmtl loaded = ',file);
    });
  };
  include();


});
