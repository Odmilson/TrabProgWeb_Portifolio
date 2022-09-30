//Fixar a navbar
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('fixed-top');
        $('.navbar').addClass('new');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.navbar').removeClass('new');
    }
});

//botao portifolio: todos
function todos (){

    $("#todos").addClass("ativo");
    $("#btn-sist").removeClass("ativo");
    $("#btn-sites").removeClass("ativo");
    $("#btn-design").removeClass("ativo");
    $("#btn-marketing").removeClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);
    
    $(".sistemas").show(1000);
    $(".sites").show(1000);
    $(".design").show(1000);
    $(".marketing").show(1000);

}

//botao portifolio: sistemas
function sistemas (){

    $("#todos").removeClass("ativo");
    $("#btn-sist").addClass("ativo");
    $("#btn-sites").removeClass("ativo");
    $("#btn-design").removeClass("ativo");
    $("#btn-marketing").removeClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);

    $(".sistemas").show(1000);

}

//botao portifolio: sites
function sites (){

    $("#todos").removeClass("ativo");
    $("#btn-sist").removeClass("ativo");
    $("#btn-sites").addClass("ativo");
    $("#btn-design").removeClass("ativo");
    $("#btn-marketing").removeClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);

    $(".sites").show(1000);

}

//botao portifolio: design
function design (){

    $("#todos").removeClass("ativo");
    $("#btn-sist").removeClass("ativo");
    $("#btn-sites").removeClass("ativo");
    $("#btn-design").addClass("ativo");
    $("#btn-marketing").removeClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);

    $(".design").show(1000);

}

//botao portifolio: marketing
function marketing (){

    $("#todos").removeClass("ativo");
    $("#btn-sist").removeClass("ativo");
    $("#btn-sites").removeClass("ativo");
    $("#btn-design").removeClass("ativo");
    $("#btn-marketing").addClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);

    $(".marketing").show(1000);

}

function marketing (){

    $("#todos").removeClass("ativo");
    $("#btn-sist").removeClass("ativo");
    $("#btn-sites").removeClass("ativo");
    $("#btn-design").removeClass("ativo");
    $("#btn-marketing").addClass("ativo");

    $(".sistemas").hide(0);
    $(".sites").hide(0);
    $(".design").hide(0);
    $(".marketing").hide(0);

    $(".marketing").show(1000);

}

$("#todos").click(todos);

$("#btn-sist").click(sistemas);

$("#btn-sites").click(sites);

$("#btn-design").click(design);

$("#btn-marketing").click(marketing);

$("#sobre-menu").click(function () {

    $("#contato-menu").removeClass("ativo-menu");
    $("#portifolio-menu").removeClass("ativo-menu");
    $("#servico-menu").removeClass("ativo-menu");
    $("#sobre-menu").addClass("ativo-menu");

});

$("#servico-menu").click(function () {

    $("#contato-menu").removeClass("ativo-menu");
    $("#portifolio-menu").removeClass("ativo-menu");
    $("#servico-menu").addClass("ativo-menu");
    $("#sobre-menu").removeClass("ativo-menu");

});

$("#portifolio-menu").click(function () {

    $("#contato-menu").removeClass("ativo-menu");
    $("#portifolio-menu").addClass("ativo-menu");
    $("#servico-menu").removeClass("ativo-menu");
    $("#sobre-menu").removeClass("ativo-menu");

});

$("#contato-menu").click(function () {

    $("#contato-menu").addClass("ativo-menu");
    $("#portifolio-menu").removeClass("ativo-menu");
    $("#servico-menu").removeClass("ativo-menu");
    $("#sobre-menu").removeClass("ativo-menu");

});