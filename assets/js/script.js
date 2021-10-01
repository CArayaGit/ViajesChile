$(function(){
    $(".navbar a").click(function(event){
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


    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
     return new bootstrap.Popover(popoverTriggerEl)
    })

    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
    }


})

//transición bg color navbar
$(window).scroll(function () {
    if ($("#navbar").offset().top > 56) {
        $("#navbar").addClass("navbar-color");
    } else {
        $("#navbar").removeClass("navbar-color");
    }
});

//Para reloj en popup asistente virtual:
function startTime(){
    const hoy = new Date();
    let h = hoy.getHours();
    let m = hoy.getMinutes();
    m = checkTime(m);
    document.getElementById('hora').innerHTML = h + ':' + m;
    setTimeout(startTime, 1000); 
}

function checkTime(i) {
    if (i < 10) {i = '0' + i};
    return i;
}