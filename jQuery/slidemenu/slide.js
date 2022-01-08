$(document).ready(function(){
    $("h1").click(function(){
        $(".block").slideToggle();
    })

    $("p1").click(function(){
        $("#c1").slideToggle();
        $("#c2").slideUp();
        $("#c3").slideUp();
        $("#c4").slideUp();
    })

    $("p2").click(function(){
        $("#c2").slideToggle();
        $("#c1").slideUp();
        $("#c3").slideUp();
        $("#c4").slideUp()
    })

    $("p3").click(function(){
        $("#c3").slideToggle();
        $("#c1").slideUp();
        $("#c2").slideUp();
        $("#c4").slideUp();
    })

    $("p4").click(function(){
        $("#c4").slideToggle();
        $("#c1").slideUp();
        $("#c2").slideUp();
        $("#c3").slideUp();
    })

    $("p11").click(function(){
      $("#D1").css("backgroundColor","Red");
      $("#L1").css("backgroundColor","Gold");
    })

    $("p22").click(function(){
      $("#D1").css("backgroundColor","Gold");
      $("#L1").css("backgroundColor","Green");
    })

    $("p33").click(function(){
      $("#D2").css("backgroundColor","Red");
      $("#L2").css("backgroundColor","Gold");
    })

    $("p44").click(function(){
      $("#D2").css("backgroundColor","Gold");
      $("#L2").css("backgroundColor","Green");
    })

    $("p55").click(function(){
      $("#D3").css("backgroundColor","Red");
      $("#L3").css("backgroundColor","Gold");
    })

    $("p66").click(function(){
      $("#D3").css("backgroundColor","Gold");
      $("#L3").css("backgroundColor","Green");
    })

    $("p77").click(function(){
      $("#D4").css("backgroundColor","Red");
      $("#L4").css("backgroundColor","Gold");
    })

    $("p88").click(function(){
      $("#D4").css("backgroundColor","Gold");
      $("#L4").css("backgroundColor","Green");
    })
   
})
