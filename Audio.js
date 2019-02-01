var audio = document.getElementById('plr');
var t= document.getElementById('title');
var shuffleBtn= document.getElementById('shffl');
var repeatBtn= document.getElementById('rpt');
var warn= document.getElementById('wrn');
var i=0;
var arr =["1.mp3","2.mp3","3.mp3","4.mp3"]
t.innerHTML = arr[0];
//flags
var shuffleFlag=false;
var repeatFlag=false;
var iFlag=true;
//object to return random number
var lastrandom;
var random;
var randomObj={
    ran:function ()
    {    while ( lastrandom === random ) {
        random = Math.floor(Math.random() * 4); }
    lastrandom = random;
    return random},
  }
  var j=randomObj.ran()
 
//shuffle function
shuffleBtn.addEventListener("click",function(){
if(repeatFlag){warn.innerHTML = "either shuffle or repeat";}else{
shuffleFlag=!shuffleFlag;
if(shuffleFlag){this.style.backgroundColor ="green"}
    else{this.style.backgroundColor ="red"}
    warn.innerHTML = "";}
});
//repeat function
repeatBtn.addEventListener("click",function(){
    if(shuffleFlag){warn.innerHTML = "Can't shuffle and repeat at the same time";}
    else
    {
    repeatFlag=!repeatFlag;   
        if(repeatFlag){this.style.backgroundColor ="green"}
        else{this.style.backgroundColor ="red"}
    warn.innerHTML = "";
    }
    });
//end event
audio.addEventListener("ended", function(e){
    if (shuffleFlag==false)
        {
            if (i==3 && repeatFlag==true){i=0;iFlag=false;console.log("hey");}

            if(iFlag==true){i++};
                
                e.target.src = arr[i];
                t.innerHTML = arr[i];
                e.target.play();
                iFlag=true;
                console.log(i);
                
        }
        else if(shuffleFlag== true)
        {
            var j=randomObj.ran()
            
            e.target.src = arr[j];
            t.innerHTML = arr[j];
            e.target.play();
         }
 
});

