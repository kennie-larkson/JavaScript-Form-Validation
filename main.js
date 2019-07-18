
const fname = document.querySelector('fname-data');
const fnameErrorSpan = document.querySelector('fname-error-span');
const fnameErrorMsg = "Please only alphabets are required";
const fnameApprovalMsg = "Entry accepted";
const btn = document.querySelector('[submit-btn]');
const fnameError = ()=>{
    if(fname!== String){
        fnameErrorSpan.textContent = fnameErrorMsg;
    }else{
        fnameErrorSpan.textContent = fnameApprovalMsg;

    }

}

btn.addEventListener('click', fnameError());