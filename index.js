

document.getElementById("roll").addEventListener("click", function(){

    document.getElementById("member-1").setAttribute("class" , "shake")
    document.getElementById("member-2").setAttribute("class" , "shake")
    document.getElementById("member-3").setAttribute("class" , "shake")

    setTimeout(function(){ 
        document.getElementById("member-1").removeAttribute("class","shake")
        document.getElementById("member-2").removeAttribute("class", "shake")
        document.getElementById("member-3").removeAttribute( "class","shake")
    

     var randomNumber1 = Math.floor(Math.random()*6) + 1;
     var randomNumber2 = Math.floor(Math.random()*6) + 1;
     var randomNumber3 = Math.floor(Math.random()*6) + 1;

     var mapArr = [
             ["r1" ,randomNumber1 ],

             ["r2",randomNumber2],

             ["r3" , randomNumber3 ]
     ]

     document.getElementById("member-1").textContent = randomNumber1;
     document.getElementById("member-2").textContent = randomNumber2;
     document.getElementById("member-3").textContent = randomNumber3;

     mapArr.sort(function(a , b){
          return b[1] - a[1];
     })

     console.log(mapArr);
        



     if(mapArr[0][0] == "r1"){
        document.getElementById("member-1").style.background = "green";
        document.getElementById("winner").innerText = "Winner is Member A"
        
    }else if(mapArr[0][0] == "r2"){
        document.getElementById("member-2").style.background = "green";
        document.getElementById("winner").innerText = "Winner is Member B"
    }else{
        document.getElementById("member-3").style.background = "green";
        document.getElementById("winner").innerText = "Winner is Member C"
    }
   
    if(mapArr[1][0] == "r1"){
        document.getElementById("member-1").style.background = "yellow";
        
    }else if(mapArr[1][0] == "r2"){
        document.getElementById("member-2").style.background = "yellow";
    }else{
        document.getElementById("member-3").style.background = "yellow";
    }

    if(mapArr[2][0] == "r1"){
        document.getElementById("member-1").style.background = "red";
        
    }else if(mapArr[2][0] == "r2"){
        document.getElementById("member-2").style.background = "red";
    }else{
        document.getElementById("member-3").style.background = "red";
    }

    if(randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3){

        document.getElementById("member-1").style.background = "blue";
        document.getElementById("member-2").style.background = "blue";
        document.getElementById("member-3").style.background = "blue";
        document.getElementById("winner").innerText = "Its Draw"
          
    }

    if(randomNumber1 == randomNumber2){

        document.getElementById("member-1").style.background = "blue";
        document.getElementById("member-2").style.background = "blue";
        if(mapArr[0][0] == "r1"){  
            document.getElementById("winner").innerText = "Its Draw"
           }
      
          
    }

    if(randomNumber1 == randomNumber3){

        document.getElementById("member-1").style.background = "blue";
        document.getElementById("member-3").style.background = "blue";
        if(mapArr[0][0] == "r1"){  
         document.getElementById("winner").innerText = "Its Draw"
        }
          
    }

    if(randomNumber2 == randomNumber3){

        document.getElementById("member-2").style.background = "blue";
        document.getElementById("member-3").style.background = "blue";
        if(mapArr[0][0] == "r2"){  
        document.getElementById("winner").innerText = "Its Draw";
        }
          
    }

} , 1000)

})
