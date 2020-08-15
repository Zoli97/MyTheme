//set the date and i counting down to

var countDown = new Date("Apr 20 2020 00:00:00").getTime();

//update the count down every 1 sec

var coutnDownFun = setInterval(function() {

    /** get today date and time */

    var date_now = new Date().getTime();

    /**find the distance between date now and count downdate */

    var dist = countDown - date_now;

    /**calculation time  */
    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((dist % (1000 * 60)) / 1000);

    /** output the result in an element with id */
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + second + "s ";

    if (dist < 0) {
        clearInterval(coutnDownFun);

        document.getElementById("demo").innerHTML = "Expired";
    }



}, 1000);