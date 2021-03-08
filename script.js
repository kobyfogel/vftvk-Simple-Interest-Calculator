function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var currentYear = new Date().getFullYear()
    var targetYear = Number(currentYear) + Number(years)
    var interest = principal * years * rate / 100

    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br />at an interest rate of <mark>${rate}%</mark>.<br />You will receive an amount of <mark>${interest}</mark>,<br />in the year <mark>${targetYear}</mark>`

}

function interestRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rateDisplay").innerHTML = rate + "%"
}