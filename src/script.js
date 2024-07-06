let currentValue = "";

    const display = document.getElementById("calc-input")
    const buttons = document.getElementsByClassName("btn")

    function equaltoResult(){
      console.log('currentValue:',currentValue)
      const convertedValue = currentValue.replace("x","*")
                                         .replace("÷","/")
                                         .replace("%","*0.01")
      const result = eval(convertedValue);
      console.log('convertedValue:',convertedValue)
      currentValue = result.toString();
      display.value = currentValue
    }

   
    for(let i=0;i<buttons.length;i++){
        const button = buttons[i]; //getting each buttons as button i
            button.addEventListener("click",function(){   //adding click event to each buttons 
            const value = button.innerText;
        
        if(value == "AC"){
           currentValue = "";
           display.value = currentValue
        }else if (value == "="){
          equaltoResult()
        }
        else{
            currentValue += value;
            display.value = currentValue;
        }
            

        })
    }