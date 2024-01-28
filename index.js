//  let options = [];
//  const addinfo = (ev)=> {
//      ev.preventDefault();
//      let info = {
//           id:Date.now(),
//           FullName: document.getElementById('fname').value,
//           username: document.getElementById('uname').value,
//           Email: document.getElementById('email').value,
//           PhoneNumber: document.getElementById('pnum').value,
//           passwords: document.getElementById('pass').value,
//           confirmpassword: document.getElementById('cppass').value,
//           Gender: document.getElementById('Gender').value,
//           Education: document.getElementById('Education').value
//      }
//      options.push(info);
//       console.warn(  {options});
//       let pre = document.querySelector('#msg pre');
//       pre.textContent= '\n'+JSON.stringify(options, null, 2);

//       // saving to local storage

//  }
//  document.addEventListener('DOMContentLoaded',()=>{
//      document.getElementsById('btn').addEventListener('click',addinfo);
//  });


const form = document.querySelector('form');

form.addEventListener('submit',(e) => {
     e.preventDefault();
     const fd = new FormData(form);
     
    const obj = Object.fromEntries(fd);
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form',json);

    window.location.href="data.html";
})


function validation() {
    if(document.Formfill.FullName.value==""){
         document.getElementById("fname").innerHTML="Enter Full Name*";
         return false;
    }
    else if(document.Formfill.FullName.value.length<6){
    document.getElementById("fname").innerHTML="Atleast Six letter*";
    return false;
    }
    
    else if(document.Formfill.Email.value==""){
     document.getElementById("email").innerHTML="Enter Email*";
     return false;
    }
    else if(document.Formfill.Phonenumber.value==""){
      document.getElementById("pnum").innerHTML="Enter Phone Number*";
      return false;
    }
     else if(document.Formfill.Password.value==""){
          document.getElementById("pass").innerHTML="Enter Password*";
          return false;
     }
     else if(document.Formfill.ConfimPassword.value=""){
          document.getElementById("cpass").innerHTML="Enter Password*";
          return false;
     }
}
     

             
