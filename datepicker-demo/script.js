$(document).ready(function (){

    // Assign DatePickers
    $(function(){
        $("#frompicker").datepicker({
            dateFormat: "dd-mm-yy"
        });
        $("#topicker").datepicker({
            dateFormat: "dd-mm-yy"
        });
    })

    // Onclick of date button 
    $("#dateButton").click(function(){
        let fromdate = $("#frompicker").datepicker("getDate");
        let todate = $("#topicker").datepicker("getDate");
        console.log(fromdate);
        console.log(todate);
        let difference = fromdate - todate;
        console.log(difference);
        let days = Math.abs(Math.ceil(difference / (1000 * (60 * 60) * 24)));
        console.log(days);
    });





});