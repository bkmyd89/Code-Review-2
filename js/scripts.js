// Back end Business Logic End

$(document).ready(function() {
  $("form#calculator").submit(function(event){
    event.preventDefault();
      var firstName = $("input.firstName").val();
      var lastName = $("input.lastName").val();
          $("#btn1").click(function() {
            alert('Please enjoy this quiz ' + firstName + ' ' + lastName + '!');
            $('.front').slideToggle();
            $(".quiz").slideToggle();
      });
    });
});

// $(document).ready(function() {
//   $("form#result").submit(function(event) {
//     event.preventDefault();
//
//   }
// }
// })



// $(document).ready(function() {
// var result = $("input:radio[name=radio1]:checked").val();
//   if (result = "summer") {
//     $('#summer').show();
//     } else if
//       $(result = "winter") {
//         $('summer').show();
//     } else if
//       $(result = "spring") {
//         $('summer').show();
//     } else if
//       $(result = "fall") {
//         $('fall').show();
//     });



// alert(result);
