var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");


function sendMail(){

  var params = {
   
    name: document.getElementById("contact_name").value,
    email: document.getElementById("contact_email").value,
    message: document.getElementById("contact_message").value
  }

  const serviceID = "service_ybt2ipu";
  const templateID = "template_h315jye"

  console.log('params : ', params);

    emailjs.send(serviceID,templateID,params)
    .then(
      res =>{
        document.getElementById("contact_name").value = "";
        document.getElementById("contact_email").value = "";
        document.getElementById("contact_message").value = "";
        document.getElementById("contact_subject").value = "";
        console.log(res);
        alert("Message Sent");
      }
    ).catch(err=>console.log(err));

    //email service  https://dashboard.emailjs.com/admin/history

}


const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://ktlpvgpoyopwlkqzxjthlvzpsy0ihrsw.lambda-url.ap-south-1.on.aws/");
    console.log('response',response);
    let data = await response.json();
    counter.innerHTML = `views: ${data}`;
  } catch (error) {
    console.error("Error updating counter:", error);
  }
}

updateCounter();



/* Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});*/
//<button id="reset">Reset</button> <-- add this button to reset the count