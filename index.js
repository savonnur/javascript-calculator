//variable to get input field
var output = document.querySelector("#output");
//disable interaction with input field
output.disabled = true;
//Select all buttons and add event listener to them
btns = document.querySelectorAll("button");
for(button of btns){
  button.addEventListener("click", clickHandle);
}

//function to add proper functionality to buttons
function clickHandle(){
    //if button value equals clear, clear the output
    if(this.value === "clear"){
      output.value = "";
    }
    //if button value is equals, use the eval function to evaluate the output value and display it
    else if(this.value === "equals"){
      output.value = eval(output.value);
    }
    //display output based on the value of the button clicked
    else{
      output.value += this.value;
    }
  }
