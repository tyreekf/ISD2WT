function validate() {
      
   
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
   
    return( true );
 }