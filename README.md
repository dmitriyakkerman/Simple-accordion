**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/simple-accordion.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/simple-accordion.js"></script>    
   
Or use import/require in your Javascript file:
    
    const SimpleAccordion = require('./dist/js/simple-accordion');
    
    or
    
    import SimpleAccordion from './dist/js/simple-accordion';
 
**Usage**
     
Create parent element with any selector and two child elements inside, where the first one is your question and the second is the answer:
      
     <div class="my-accordion">
        <div>Question</div>
        <div>Answer</div>
     </div>   
         
**Initialization**
 
    document.addEventListener('DOMContentLoaded', function() {
      new Accordion({
        el: document.querySelector('.my-accordion')
      });
    }); 
     
    

