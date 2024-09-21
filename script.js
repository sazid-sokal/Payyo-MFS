document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log("shala click koireche");
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log('phone number: ' + phoneNumber + ' ; ' + 'pin: ' + pinNumber);

    // validation
    if (phoneNumber == 'admin' && pinNumber == 'admin'){
        console.log('you are logged in');
        window.location.href = './home.html';
    }
    else{
        alert('phone number or pin code is wrong')
    }
})