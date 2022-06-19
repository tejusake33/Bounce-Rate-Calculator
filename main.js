function calc(){
    var numberOfVisits = document.getElementById("visits").value;
    var numberOfVisits = parseInt(numberOfVisits,10);
    var numberOfOne_PageVisits = document.getElementById("onepage").value;
    var numberOfOne_PageVisits = parseInt(numberOfOne_PageVisits,10);

    var bounceRate = (numberOfOne_PageVisits/numberOfVisits )*100 ;

    document.getElementById("rate").value = bounceRate;
}