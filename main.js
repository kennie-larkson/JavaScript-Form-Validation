
const fname = document.querySelector('[fname-data]');
const fnameValidateSpan = document.querySelector('[fname-validate-span]');
const fnameErrorMsg1 = "Please fill this field as required(alphabets only)";
const fnameErrorMsg2 = "Please fill this field as required( not less than 3 characters)";
const btn = document.querySelector('[submit-btn]');

const fnameValidator = ()=>{
    if(fname!== String){
          
        fnameValidateSpan.textContent = fnameErrorMsg1;
    }else if(fname.length < 3){
        fnameValidateSpan.textContent = fnameErrorMsg2;

    }


}

btn.addEventListener('click', fnameValidator);