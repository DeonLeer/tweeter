
$(document).ready(function() {
  
  const $textArea = $('textarea');
  

  $textArea.on('input', function() {
    
    let charCount = 140;

    charCount = 140 - ($(this).val().length);

    if (charCount < 0) {
      $(".counter").css('color', 'red');
    }else{
      $(".counter").css('color', 'black');
    }
    

    $(".counter").val(charCount);


  })

})

// console.log($(this).parent().children().last().children().last())