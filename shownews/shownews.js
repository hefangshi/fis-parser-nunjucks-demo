$(function(){
    $.getJSON("shownews/shownews.json",function(data){
        var template = __inline('shownews.tmpl');
        $("#wrapper").append(template(data));
    });
});