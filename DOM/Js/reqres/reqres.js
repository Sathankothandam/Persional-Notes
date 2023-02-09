      
      async function handleLoginsubmit(){
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if(email !== "" && password !== ""){
          try{
              var res = await fetch(`https://reqres.in/api/login`,{
                  method:"POST",
                  headers:{
                      "Content-type": "application/json"
                  },
                  body: JSON.stringify({
                      "email": "eve.holt@reqres.in",
                      "password": "cityslicka"
                  })
              });
              var value = await res.json();
              // console.log(value)
              alert("logged in successfully")
              window.location.href="dashboard.html"
            }
            catch(err){
              console.log(err)
              alert("logged in failed")
            }
        }
        else{
          alert("add the value in inputs")
        }

    }