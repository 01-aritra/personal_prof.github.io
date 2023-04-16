const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const rating = form.elements['rating'].value;
  const comment = form.elements['comment'].value;

  // Here you would send the feedback data to your server using Ajax or fetch

  // Once the feedback has been successfully submitted, display a success message to the user
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Thank you for your feedback!';
  form.parentNode.appendChild(successMessage);

  alert('Thank you for your feedback!');
  // Clear the form fields
  form.reset();
});
function sendEmail()
{
   var parnams={
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  rating: document.getElementById("rating").value,
  comment: document.getElementById("comment").value,
   };
  
  const serviceID ="service_qsvuigk";
  const templateID="template_ue2kr4r"

  emailjs.send(serviceID,templateID,parnams)
  .then(
    res =>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("rating").value="";
      document.getElementById("comment").value="";
      console.log(res);
      alert("Yor feedback has been acknoledged");
    }
  )
  .catch((err) => console.log(err));
}