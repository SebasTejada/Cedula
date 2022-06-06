 window.addEventListener('DOMContentLoaded', function(event){
 	var form_register = document.querySelector('#form_register');
 	form_register.addEventListener('submit', function (event){


	var canSubmit =true;
	var input_name = document.querySelector('#input_name');

	if (input_name.value ==""){
		document.querySelector('#name_container .input_error').innerHTML ='El nombre es obligatorio';
        canSubmit=false;	
        }else{
        	if (input_name.value.length < 3){
        		document.querySelector('#name_container .input_error').innerHTML = 'El nombre debe tener al menos 3 letras';
        		canSubmit=false;
        }else{
        	document.querySelector('#name_container .input_error').innerHTML='';
        }
    }

    var input_last_name = docuent.querySelector('#input_last_name');

    if (input_last_name.value ==""){
    	document.querySelector('#last_name_container .input_error').innerHTML = 'El apellido es obligatorio';
 		canSubmit=false;	
        }else{
        	if (input_last_name.value.length < 3){
        		document.querySelector('#last_name_container .input_error').innerHTML = 'El apellido debe tener al menos 3 letras';
        		canSubmit=false;
        }else{
        	document.querySelector('#last_name_container .input_error').innerHTML='';
        }
    }

    var input_user_name = document.querySelector('#input_user_name');

    if(input_user_name.value ==""){
    	document.querySelector('#user_name_container .input_error').innerHTML='El nombre de usuario es obligatorio';
    	canSubmit=false;
    }else{
    	document.querySelector('#user_name_container .input_error').innerHTML='';
    }
   
 var input_last_name = docuent.querySelector('#input_last_name');

    if (input_cedula.value ==""){
    	document.querySelector('#cedula_container .input_error').innerHTML = 'La cédula es obligatoria';
 		canSubmit=false;	
        }else{
        	if (input_cedula.value.length <10){
        		document.querySelector('#cedula_container .input_error').innerHTML = 'La cédula debe tener 10 dígitos';
        		canSubmit=false;
        }else{
        	document.querySelector('#cedula_container .input_error').innerHTML='';
        }
    }

    var input_email = document.querySelector('#input_email');

    if(input_email.value ==""){
    	document.querySelector('#email_container .input_error').innerHTML='El correo es obligatorio';
    	canSubmit=false;
    }else{
    	var indexOne=input_email.vaule.indexOf("@");
     	var indexTwo=input_email.vaule.indexOf(".");

     	if((indexOne < 0 || indexTwo <0)){
     		document.querySelector('#email_container .input_error').innerHTML='El correo no tiene la estructura';
     		canSubmit=false;
     	}else{
     		document.querySelector('#email_container .input_error').innerHTML='';
     	}
     }

     if(!canSubmit) {
     	event.preventDefault();
    }
});

});



     	
     	
    

     
        
