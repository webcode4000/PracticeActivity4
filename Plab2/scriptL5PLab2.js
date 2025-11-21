function customMessage ()
{
   let usersName = document.getElementById("usersName").value;

   let enteredMessage = document.getElementById("enteredMessage").value;

   let backgroundColor = document.getElementById("backgroundColor").value;

   document.body.style.backgroundColor = backgroundColor;

   let updatedGreeting = "Hello, " + usersName + "! ";

   document.querySelector("h1").innerText = updatedGreeting;

   let firstparagraph  =  "    ";
 
   document.querySelector("p").innerText = enteredMessage; 


}  