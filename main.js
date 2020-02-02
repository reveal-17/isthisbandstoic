$(function(){

 const MSG_Stoic = 'This band is a stoic band!';
 const MSG_NotStoic = 'This band is not a stoic band.';
 const MSG_NotYet = 'Not Yet.';






 $(".valid-text").blur(function(){

   var form_g = $(this).closest('.form-group');

   var stoic = ['fugazi','54-71'];

   var notyet = 'albem';



   if($(this).val().toLowerCase() == stoic[0].toLowerCase() ){

     form_g.removeClass('has-error').addClass('has-success');
     form_g.find('.help-block').text(MSG_Stoic);


   }else if($(this).val().toLowerCase() == stoic[1].toLowerCase() ){

     form_g.removeClass('has-error').addClass('has-success');
     form_g.find('.help-block').text(MSG_Stoic);

   }else if($(this).val().toLowerCase() == notyet.toLowerCase()){

     form_g.removeClass('has-error').removeClass('has-success').addClass('has-notyet');
     form_g.find('.help-block').text(MSG_NotYet);

   }else if($(this).val().length === 0){

     form_g.removeClass('has-error').removeClass('has-success');
     form_g.find('.help-block').text('');

   }else{
     form_g.removeClass('has-success').addClass('has-error');
     form_g.find('.help-block').text(MSG_NotStoic);

   }

 });

 $(".valid-text").focus(function(){
   var form_g = $(this).closest('.form-group');

   form_g.removeClass('has-error').removeClass('has-success');
   form_g.find('.help-block').text('');
});
});
