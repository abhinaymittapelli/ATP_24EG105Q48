//2.OTP Countdown Simulator (Console App)
//------------------------------------
        
  //      Simulate OTP sending flow in Node.js:
        
    //    Show “OTP Sent Successfully”
        
      //  Start 10-second countdown
        
        //Allow resend only after countdown ends

        console.log("OTP sent Successfully")
        let countdown=10
       timer=setInterval(()=>{
        console.log(countdown)
        countdown--
        if(countdown==0){
            console.log("Resend OTP")
            clearInterval(timer)
             }
             },1000)

             
             

    
    
