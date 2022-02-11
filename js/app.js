// Logic for index.html

const JnForm = document.getElementById('jn-form');
const JnEmail = document.getElementById('email');
const JnPassword = document.getElementById('password');
const JnErrorMess = document.getElementById('error-message');


//========================================================================================================//

//event listener for form//

JnForm.addEventListener('submit',(e)=>{
e.preventDefault();
if(
checkIfEmpty(JnEmail.value,"you must enter an email")&&checkIfEmpty(JnPassword.value,"you must enter your password")
){
    window.location.href = '/dashboard.html';
}



});
//checks if inputs are empty
function checkIfEmpty(domInput,errorMessage){
    JnErrorMess.innerHTML = "";
    if (domInput === ""){
        const div = document.createElement('div');
        div.innerHTML = `<p class="w-full rounded-lg text-center font-bold">${errorMessage}</p>`;
        JnErrorMess.appendChild(div);
    }
    return true;
}

//checks email and password
