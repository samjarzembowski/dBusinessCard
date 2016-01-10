var projectView = {};

projectView.handleNavBar = function() {
  $('.nav-bar').on('click', '.tab', function(e){
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    console.log($(this));
  });

  $('nav-bar .tab:first').click();
};

$(document).ready(function() {
  projectView.handleNavBar();
})
