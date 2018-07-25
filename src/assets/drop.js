// $('#keep-open').on({
//   "shown.bs.dropdown": function() { this.closable = false; },
//   "click":             function() { this.closable = true; },
//   "hide.bs.dropdown":  function() { return this.closable; }
// });


//
$("document").ready(function() {

  $('.dropdown-menu').on('click', function(e) {
    if($(this).hasClass('dropdown-menu-form')) {
      e.stopImmediatePropagation();
    }
  });
});
//
// $('.btn-group .dropdown .keep-open .dropdown-menu-form .dropdown-menu .dropdownMenu').click({
//   "shown.bs.dropdown": function() { this.closable = false; },
//   "click":             function() { this.closable = false; },
//   "hide.bs.dropdown":  function() { return this.closable; }
// });

// $(document).ready(function(){
//   $('#password').keypress(function(e){
//     if(e.keyCode === 13)
//       $('#password').click();
//   });
// });
// var el = document.getElementById("password");
// if(el) {
//   el.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//       document.getElementById("submit").click();
//     }
//   });
// }
