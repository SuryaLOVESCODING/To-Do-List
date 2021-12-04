function ADD(){


    
    
        var add=document.getElementById("Text_Box").value;
        var pharagraph=document.createElement('p');
        pharagraph.setAttribute("id", "todo"); 
        pharagraph.innerHTML=add;
        document.body.appendChild(pharagraph);
    

  
        var x=document.createElement('p');
        x.setAttribute("id", "delete"); 

        x.innerHTML="\u274C";
        pharagraph.innerHTML=add;
        document.body.appendChild(x);
    
    
    
    

    

   
    
    x.addEventListener('click',function(){
        
        pharagraph.remove();
        x.remove();
    })





    
}

function clearr(){
    location.reload();
    
}

