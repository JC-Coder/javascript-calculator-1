// This script have two working methods feel free to use any of them just by uncommenting your preferred choice 



    // ============= script one =============

    /*

    const calculator = document.querySelector('.calculator');
    const keys = document.querySelector('.calculator-keys');
    const display = document.querySelector('#output-screen');

    //empty variables for calculate function
    // let num1 ;
    // let num2 ;
    // let operator ;

    // console.log(keys)



    keys.addEventListener('click', e => {
      // console.log("good")
      if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.value;

        //remove key-active class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('key-active'));

        if (!action){
          if(displayedNum === "0" ){
            display.value = keyContent;
          } else {
            display.value = displayedNum + keyContent;
          }
        }

        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'percent') {
          key.classList.add('key-active')
          display.value = displayedNum + keyContent;
          // operator = keyContent;
        }

        if(action === 'decimal'){
          display.value = displayedNum + '.'
          document.getElementById("decimal-btn").disabled = true;
        }

        if(action === 'clear'){
          display.value = "";
          document.getElementById("decimal-btn").disabled = false;
        }

        if(action === 'delete'){
          let sliced = display.value.slice(0, -1)
          display.value = sliced;
        }

        if(action === 'calculate'){
         ans = eval(displayedNum);
         display.value = ans;
        }

      }
    }) */






    // =============== script two ============


    let output = document.querySelector("#output-screen");
    let keys = document.querySelectorAll(".calculator-keys button");
    // let value;

    console.log(keys);

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function(e){
          let keyClicked = keys[i].innerText;
          console.log(keyClicked);

          if(keyClicked != "=" && keyClicked != "Del"){
            output.value += keyClicked;
          }

          if(keyClicked === "="){
            let result = eval(output.value);
            console.log(result)
            output.value = result;
          }

          if(keyClicked == "Cl"){
            output.value = "";
          }

          if(keyClicked === "Del"){
            let outputUpdated = output.value.slice(0,-1);
            output.value = outputUpdated;
          }

        });
    }
    