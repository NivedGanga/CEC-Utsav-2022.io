function() {

    const idleDurationSecs = 30;     
    const redirectUrl = 'ad.html';  
    let idleTimeout; 

    const resetIdleTimeout = function() {

          if(idleTimeout) clearTimeout(idleTimeout);

       
        idleTimeout = setTimeout(() => location.href = redirectUrl, idleDurationSecs * 1000);
    };


    resetIdleTimeout();

 
    ['click', 'touchstart', 'mousemove'].forEach(evt => 
        document.addEventListener(evt, resetIdleTimeout, false)
    );

}