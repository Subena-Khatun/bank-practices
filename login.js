// step-01: add event handlaer for submit button
// step-02: set email id, then get emeil id, get emil id value, then varify

// set Event handaler for sumbit button or login button
document.getElementById('btn-submit').addEventListener('click', function(){
    // get email 
    const userEmail = document.getElementById('user-email');
    // console.log('connected') done
    // get email input value
    const email = userEmail.value;
    //  password id and vale
    const UserPassWord = document.getElementById('user-password');
    const password = UserPassWord.value;
    // console.log(email,password); done
    // varify . (variable kokon string er moto declar kora jay na)
    if(email === "subena@gmail.com" && password === "doha03042025"){
        // console.log('valid username and password');
        // valid hole amra new akta windows show korbo ba new akta html page jabo
        window.location.href = "bank.html";
    }
    else{
        // console.log("Invalid username and password");
        // alert 
        alert('Invalid username and password');
    }
});