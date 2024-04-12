//FORM CHANGE
$(document).ready(function() {
    // Hide all forms except the default active one
    $('#sell-form').hide();
    $('#pay-form').hide();
  
    $('#buy-nav').click(function() {
      $('#buy-form').show();
      $('#sell-form').hide();
      $('#pay-form').hide();
    });
  
    $('#sell-nav').click(function() {
      $('#buy-form').hide();
      $('#sell-form').show();
      $('#pay-form').hide();
    });
  
    $('#pay-nav').click(function() {
      $('#buy-form').hide();
      $('#sell-form').hide();
      $('#pay-form').show();
    });
  });
  
            