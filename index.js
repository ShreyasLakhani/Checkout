

function isValid(){
    const patternForEmail = /^([a-zA-Z0-9\._]+)@([a-zA_Z0-9]+).([a-z]+).([a-z])?$/
    const mail = document.getElementById('email').value;
    const patternForPhone = /^([0-9]{10})$/
    const number=document.getElementById('phoneno').value;
    if(mail.length===0 && number.length===0){
        document.getElementById("error-mail").style.visibility = "visible"
        document.getElementById("error-phone").style.visibility = "visible"
        document.getElementById("error-mail").innerHTML = "*Enter email address "
        document.getElementById("error-phone").innerHTML = "*Enter phone number "
    }else if(!patternForEmail.test(mail)  && !patternForPhone.test(number) ){
        document.getElementById("error-mail").style.visibility = "visible"
        document.getElementById("error-phone").style.visibility = "visible"
        document.getElementById("error-mail").innerHTML = "*Invalid email address "
        document.getElementById("error-phone").innerHTML = "*Invalid phone number "
        
    }else{
        document.getElementById("error-mail").style.visibility = "hidden"
        document.getElementById("error-phone").style.visibility = "hidden"
    }
    
   
}


function increaseNum1(){
    
    let increase = document.getElementById("display1");
    let currentValue = parseInt(increase.textContent)
    let newValue = currentValue +1;

    increase.textContent = newValue
}

function decreaseNum1() {
    let decrease = document.getElementById("display1");
    let currentValue = parseInt(decrease.textContent)
    let newValue = currentValue - 1;

    decrease.textContent = newValue  
}

function increaseNum2(){
    
    let increase = document.getElementById("display2");
    let currentValue = parseInt(increase.textContent)
    let newValue = currentValue +1;

    increase.textContent = newValue
}

function decreaseNum2() {
    let decrease = document.getElementById("display2");
    let currentValue = parseInt(decrease.textContent)
    let newValue = currentValue - 1;

    decrease.textContent = newValue  
}



