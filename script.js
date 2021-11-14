
//Do You Want Click switch Repeatedly Out-Put the function*************
//Then You Must be include all var in the Click Switch Function **********
$("button").click(function(){
    var hexNumber = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexCode = "";

    for (var i=0; i<6; i++ ){
        var hexRendomNumber= Math.floor(Math.random()*hexNumber.length);
        hexCode +=hexNumber[hexRendomNumber];
    }



//Doms Code jQurey
    $("#hex-color").html(hexCode);
    $("body").css("background-color","#"+hexCode);
});