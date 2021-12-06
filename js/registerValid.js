// Form validation code will come here.
function validate() {
      
    if( document.myForm.fname.value == "" ) {
       alert( "Please provide your first name!" );
       document.myForm.fname.focus() ;
       return false;
       
    }

    if( document.myForm.lname.value == ""){
        alert( "Please provide your last name !" );
        document.myForm.lname.focus() ;
        return false;
    }

    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email !" );
       document.myForm.email.focus() ;
       return false;
    }

    if( document.myForm.psw.value == ""){
       alert( "Please provide a password ! " );
       document.myForm.psw.focus() ;
       return false;
    }
    if( document.myForm.pswrepeat.value == "" ) {
       alert( "Please re - enter your password ! " );
       return false;
    }
    return( true );
 }