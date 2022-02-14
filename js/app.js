// Logic for index.html

const JnForm = document.getElementById('jn-form');
const JnEmail = document.getElementById('email');
const JnPassword = document.getElementById('password');
const JnErrorMess = document.getElementById('error-message');


//========================================================================================================//

//event listener for form//

JnForm.addEventListener('submit',(evt)=>{
    JnErrorMess.innerHTML = "";
    evt.preventDefault();

    if(
        checkNotEmpty(JnEmail.value,"you must enter a name")&&
        checkNotEmpty(JnPassword.value,"you must enter an email")
    ){
        window.location.href = '/dashboard.html';
    }

});


//checks if inputs are empty or not
function checkNotEmpty(domInput,errorMessage){
    JnErrorMess.innerHTML = "";


    if (domInput === ""){
        const div = document.createElement('div');
        div.innerHTML = `<p class="w-full rounded-lg text-center font-bold">${errorMessage}</p>`;
        JnErrorMess.appendChild(div);
        return false;
    }
return true;
}

//checks email and password
