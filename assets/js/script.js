$(function(){
    $("a").click(function(event){
        if (this.has !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrolltop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
        }
    });

    

})