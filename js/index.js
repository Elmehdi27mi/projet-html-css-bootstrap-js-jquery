$(document).ready(
    ()=>{
        $('.skitter-large').skitter()

let aboutOffset=$("#about").offset().top;

$(window).scroll(()=>{
    let windowScroll=$(window).scrollTop();
    if(windowScroll > aboutOffset -70){
        $("#main-nav").css('padding-left','50px'); 
        $("#main-nav").css('padding-right','50px'); 
        $("#btnUp").fadeIn(1000);
    }else{
        $("#main-nav").css('padding-left','20px'); 
        $("#main-nav").css('padding-right','20px');
        $("#btnUp").fadeOut(1000);
    }
})


particlesJS.load('particles-js', 'particles.json', function() {
  });


$("a[href^='#']").click((e)=>{
    let linkHref=$(e.target).attr('href');
    let sectionoffset=$(linkHref).offset().top;
    $("html,body").animate({scrollTop:sectionoffset},2000)
});

$("#btnUp").click(()=>{
    $("html,body").animate({scrollTop:0},2000)

});

$('.loader').fadeOut(2000,()=>{
    $('.loading').fadeOut(1500,()=>{
        $('.loading').remove();
        $('body').css('overflow','auto');
    })
})
       

$('.sideBar i').click(()=>{
    let boxWidth=$('.box').outerWidth();
    if($('.sideBar').css('left')=='0px'){
        $('.sideBar').animate({left : `-${boxWidth}`},1000)
    }else{
        $('.sideBar').animate({left : '0px'},1000)
    }
})


let colorBoxes=$(".color-box");
colorBoxes.eq(0).css('background','#09c');
colorBoxes.eq(1).css('background','teal');
colorBoxes.eq(2).css('background','orange');
colorBoxes.eq(3).css('background','lightgreen');
colorBoxes.eq(4).css('background','#4726e1');

$(colorBoxes).click((e) => {
    let bgColor = $(e.target).css('backgroundColor');
    $('.change').each(function() {
        this.style.setProperty('color', bgColor, 'important');
    });
   
});

$('.img-item').click((e)=>{
         let imgSrc=$(e.target).attr('src');
     $("header").css('background-image',`url(${imgSrc})`)

})




    }
)

