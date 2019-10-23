
         /****************change style */
         document.querySelector('body').style.backgroundColor="black";
 
         document.querySelector('.darkMode').style.color="white";
        
         document.querySelector('.creative').style.color="#F15A24";
     
     
         /*****************Change Button Text 
         document.querySelector('.darkMode').innerHTML="Bright Mode";

         */
     
     
     
         /******    For Hover */
         var element = document.querySelector('#removeHover1');
         element.classList.remove("forjs");
         var element = document.querySelector('#removeHover2');
         element.classList.remove("forjs");
         var element = document.querySelector('#removeHover3');
         element.classList.remove("forjs");
         
         
         
         
         
         
  /************************************************  Dark Mode Function       
         
         var isDarkModeOn =false;

/*************************FUNCTION 


darkMode =()=>{


    /******************IF CONDITION 

    if (isDarkModeOn ===false) {


         /****************change style 
    document.querySelector('body').style.backgroundColor="black";
 
    document.querySelector('.darkMode').style.color="white";
   
    document.querySelector('.creative').style.color="#F15A24";


    /*****************Change Button Text 
    document.querySelector('.darkMode').innerHTML="Bright Mode";



    /******    For Hover 
    var element = document.querySelector('#removeHover1');
    element.classList.remove("forjs");
    var element = document.querySelector('#removeHover2');
    element.classList.remove("forjs");
    var element = document.querySelector('#removeHover3');
    element.classList.remove("forjs");
  

    isDarkModeOn =true;
    }


    /******************ELSE CONDITION 
    else{

        /****************change style 
        document.querySelector('body').style.backgroundColor="white"
       ;
        document.querySelector('.darkMode').style.color="black";
    
        document.querySelector('.creative').style.color="black";



    /******    For Hover 
    var element = document.querySelector('#removeHover1');
    element.classList.add("forjs");
    var element = document.querySelector('#removeHover2');
    element.classList.add("forjs");
    var element = document.querySelector('#removeHover3');
    element.classList.add("forjs");


      /*****************Change Button Text 
      document.querySelector('.darkMode').innerHTML="Dark Mode";
        
        

        isDarkModeOn =false;

    }
}/************end of darkMode function */


