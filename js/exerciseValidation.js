function validate() {
      
   
    if( document.myForm.name.value == "" ) {
       alert( "Please add name !" );
       document.myForm.name.focus() ;
       return false;
    }
 
    if( document.myForm.subject.value == ""){
       alert( "Please provide a description  ! " );
       document.myForm.subject.focus() ;
       return false;
    }
 
    if( document.myForm.exNo.value == ""){
      alert( "Please provide a number  ! " );
      document.myForm.exNo.focus() ;
      return false;
   }
   
    return( true );
 }