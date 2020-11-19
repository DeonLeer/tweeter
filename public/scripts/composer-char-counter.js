
$(document).ready(function() {
  
  const $textArea = $('textarea');
  

  $textArea.on('input', function() {
    
    let charCount = 140;

    charCount = 140 - ($(this).val().length);
    

    $(this).parent().children().last().children().last().val(charCount);


  })

})

// console.log($(this).parent().children().last().children().last())