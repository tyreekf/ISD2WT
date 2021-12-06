function validate() {
      
   
    if( document.myForm.name.value == "" ) {
       alert( "Please add name !" );
       document.myForm.name.focus() ;
       return false;
    }

    if( document.myForm.price.value == ""){
        alert( "Please provide a price  ! " );
        document.myForm.price.focus() ;
        return false;
     }
 
    if( document.myForm.subject.value == ""){
       alert( "Please provide benefits  ! " );
       document.myForm.subject.focus() ;
       return false;
    }
 

   if( document.myForm.membership.value == ""){
    alert( "Please provide a membership number  ! " );
    document.myForm.membership.focus() ;
    return false;
 }
   
    return( true );
 }