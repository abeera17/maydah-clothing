var sidenav=document.getElementById('sidenav');
var menubar=document.getElementById('menubar');
sidenav.style.width="0px";
menubar.onclick=function(){
    if(sidenav.style.width=="0px"){
        sidenav.style.width="16rem";
    }
    else{
        sidenav.style.width="0px";
    }
}
$(document).ready(function(){
    $('section').each(function(){
        let height= $(this).height();
        let offset=$(this).offset().top -200;
        let top = $(window).scrollTop();
        let id=$(this).attr('id');

        if(top >= offset && top < offset + height){
            $('.nav3 ul li a').removeClass('active');
            $('.nav3').find('[href="#${id}"]').addClass('active');
        }
    });
});