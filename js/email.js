function sendMail(){
    let pharm = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        
    }
    emailjs.send("service_rmb78a5","template_rfjl0fq",pharm).then(alert("Email Sent!!"))
}