$(function($) {
    var username=$.cookie('MYCATEYE-ADMIN');
    if(username=="null"||username==null){
        $(window).attr('location','admin/login.html');
    }
    else{
        $("#login_admin").html(username);
    }

    $("#logout").click(function(){
        $.cookie("MYCATEYE-ADMIN", null, { path: '/' });
        $(window).attr('location','admin/login.html');
    });
});
