function sendMail(contactform) {

    emailjs.send("service_pv0itze", "template_rpc1tol", {
        "from_name": contactform.name.value,
        "from_email": contactform.mail.value, 
        "project_request": contactform.comment.value
    })
    
 .then(
        function(response) {
            console.log("SUCCESS", response);
           alert("Message Sent")
            
          
        },
        function(error) {
            console.log("FAILED", error);
            alert("Error: Message Not Sent")
        }
    );
    return false;  // To block from loading a new page
}