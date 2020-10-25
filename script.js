

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
  function calculate()
{
        num1 = document.getElementById("mileage").value;
        num2 = document.getElementById("AverageFuel").value;
        num3 = document.getElementById("FuelPrice").value;
        num4 = document.getElementById("Additionalcost").value;
        num5 = document.getElementById("Passengers").value;
        document.getElementById("result").innerHTML = ((((num1 / 100) * num2) * num3 + num4 ) / num5);
        window.localStorage.setItem("result", "0");
}

