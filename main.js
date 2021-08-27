//var audio = new Audio('alarm.mp3');

// ...and play it

function request_fullscreen() {
  document.documentElement.webkitRequestFullScreen();
}


const rev_maximum=24;
const rev_minimum=5;

const temp_maximum=7;
const temp_minimum=1;

const boost_maximum=9;
const boost_minimum=1;

const oil_maximum=9;
const oil_minimum=1;

setInterval(function(){
  var throttle_val=Math.floor(Math.random() * (99 - 10 + 1)) + 10;
   
  document.getElementById("throttlesense").innerHTML = throttle_val; 
  }, 500);
  
  setInterval(function(){
  var boost_val=Math.floor(Math.random() * (80 - 40 + 1)) + 40;
  
  document.getElementById("boost_meter").innerHTML = boost_val; 
  }, 500);
  
  
  setInterval(function(){
  var fl_val=Math.floor(Math.random() * (34 - 28 + 1)) + 28;
  var fr_val=Math.floor(Math.random() * (34 - 28 + 1)) + 28;
  var rl_val=Math.floor(Math.random() * (38 - 30 + 1)) + 30;
  var rr_val=Math.floor(Math.random() * (38 - 30 + 1)) + 30;
    if(fl_val>=34){
      document.getElementById("front_left").style.color = "red";
    }
    else{document.getElementById("front_left").style.color = "white";}
    if(fr_val>=34){
      document.getElementById("front_right").style.color = "red";
    }
    else{document.getElementById("front_right").style.color = "white";}
  document.getElementById("front_left").innerHTML = fl_val; 
  document.getElementById("front_right").innerHTML = fr_val;
  document.getElementById("rear_left").innerHTML =rl_val;
  document.getElementById("rear_right").innerHTML = rr_val;
  }, 500);

var count=0;
setInterval(function(){ 
  var rev_val=Math.floor(Math.random() * (rev_maximum - rev_minimum + 1)) + rev_minimum;
  revincrease(rev_val); 
  revdecrease(rev_val);
  if(rev_val>=20){
    count+=1;
    //audio.play();
    if(count%3==0){
    createjs.Sound.play(soundID);}
    //audio.loop = false;
    
  }
  rev_val=0;
  
 }, 2000);

 setInterval(function(){ 
  
  
  var boost_val=Math.floor(Math.random() * (boost_maximum - boost_minimum + 1)) + boost_minimum;
  
  
  boostincrease(boost_val);
  boostdecrease(boost_val);
  
 }, 1000);

 setInterval(function(){ 
  
  var temp_val=Math.floor(Math.random() * (temp_maximum - temp_minimum + 1)) + temp_minimum;
 
  
  tempincrease(temp_val);
  tempdecrease(temp_val);
  
 }, 7500);


 setInterval(function(){ 
  
  var oil_val=Math.floor(Math.random() * (oil_maximum - oil_minimum + 1)) + oil_minimum;
  
  oilincrease(oil_val);
  oildecrease(oil_val);
 }, 5000);








function revincrease(rev_val) {
    // need shift key pressed
    setTimeout(function(){ for (var j = 5; j <=rev_val; j+=1) {
      (function (j) {
        setTimeout(function () {
         
         var str1 = "l";
         var str4 = j;
         var res1 = str1.concat(str4);   
         document.getElementById(res1).style.opacity="1";},20*j);})(j);
       
         
        } }, 300);
    
    }

         function revdecrease(rev_val){
          // need shift key released
          setTimeout(function(){ var lights=[];
            for (var i = 5; i <= rev_val; i++) {
              lights.push(i);
                            }
            lights.reverse();
for (let i = 0; i<= rev_val; i+=1) {
(function (i) {
  setTimeout(function () {
   var res="";
   var str1 = "l";
   var str3 = lights[i];
   var str2 = str3.toString();
   // console.log(str2)

   res = str1.concat(str2); 
    
   document.getElementById(res).style.opacity="0.3";},40*i);})(i);} }, 800);
             //var lights = [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
             
        
        }


      

        function tempincrease(temp_val) {
            // need shift key pressed
            setTimeout(function(){ for (var j = 1; j <=temp_val; j+=1) {
              (function (j) {
                setTimeout(function () {
                 
                 var str1 = "t";
                 var str4 = j;
                 var res1 = str1.concat(str4);   
                 document.getElementById(res1).style.opacity="1";},20*j);})(j);
               
                 
                } }, 300);
            }

                 function tempdecrease(temp_val){
                    // need shift key released
                    setTimeout(function(){var lights=[];for (var i = 1; i <= temp_val; i++) {
                      lights.push(i);
                                    }
                    lights.reverse();
                       for (let i = 0; i<= temp_val; i+=1) {
                          (function (i) {
                            setTimeout(function () {
                             var res="";
                             var str1 = "t";
                             var str3 = lights[i];
                             var str2 = str3.toString();
                             // console.log(str2)
                 
                             res = str1.concat(str2); 
                              
                             document.getElementById(res).style.opacity="0.25";},40*i);})(i);} }, 5500);
                    //var lights = [7,6,5,4,3,2,1];
                    
                  
                  }
    
                  function boostincrease(boost_val) {
                    // need shift key pressed
                    setTimeout(function(){ for (var j = 1; j <=boost_val; j+=1) {
                      (function (j) {
                        setTimeout(function () {
                         
                         var str1 = "b";
                         var str4 = j;
                         var res1 = str1.concat(str4);   
                         document.getElementById(res1).style.opacity="1";},20*j);})(j);
                       
                         
                        } }, 300);
                    }
        
                         function boostdecrease(boost_val){
                            // need shift key released
                            setTimeout(function(){var lights=[];
                              for (var i = 1; i <= boost_val; i++) {
                                lights.push(i);
                                              }
                              lights.reverse();
                              
                              //var lights = [9,8,7,6,5,4,3,2,1];
                                 for (let i = 0; i<= boost_val; i+=1) {
                                    (function (i) {
                                      setTimeout(function () {
                                       var res="";
                                       var str1 = "b";
                                       var str3 = lights[i];
                                       var str2 = str3.toString();
                                       // console.log(str2)
                           
                                       res = str1.concat(str2); 
                                        
                                       document.getElementById(res).style.opacity="0.25";},40*i);})(i);}}, 800);
                            
                          
                          }
                          function oilincrease(oil_val) {
                            // need shift key pressed
                            setTimeout(function(){ for (var j = 1; j <=oil_val; j+=1) {
                              (function (j) {
                                setTimeout(function () {
                                 
                                 var str1 = "o";
                                 var str4 = j;
                                 var res1 = str1.concat(str4);   
                                 document.getElementById(res1).style.opacity="1";},90*j);})(j);
                               
                                 
                                } }, 500);
                            }
                
                                 function oildecrease(oil_val){
                                    // need shift key released
                                    
                                    //var lights = [9,8,7,6,5,4,3,2,1];
                                    setTimeout(function(){ var lights=[];
                                      for (var i = 1; i <= oil_val; i++) {
                                        lights.push(i);
                                                      }
                                      lights.reverse();
                                               for (let i = 0; i<= oil_val; i+=1) {
                                                  (function (i) {
                                                    setTimeout(function () {
                                                     var res="";
                                                     var str1 = "o";
                                                     var str3 = lights[i];
                                                     var str2 = str3.toString();
                                                     // console.log(str2)
                                         
                                                     res = str1.concat(str2); 
                                                      
                                                     document.getElementById(res).style.opacity="0.25";},100*i);})(i);} }, 3000);
                                    
                                  
                                  }

                                 
                                  
                        