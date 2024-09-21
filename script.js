document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log("shala click koireche");
    const phoneNumebr = document.getElementById('phone-number');
    console.log('phone number: ' + phoneNumebr.value);
})