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

   if( document.myForm.equipNo.value == ""){
     alert( "Please provide a number  ! " );
     document.myForm.equipNo.focus() ;
     return false;
  }
  
   return( true );
}