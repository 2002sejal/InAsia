function wrongalert(){
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){                                                //wrong answer alert
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
    },1000);
  $('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  });
  }