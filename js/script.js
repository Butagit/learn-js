"use strict"; 
 
const p = document.querySelectorAll('p'); 
console.log(p); 
 
function loadScript(src) { 
    const script = document.createElement('script'); 
    script.src = src; 
    script.async = false; // изза этого они будут выполняться строго друг за другом 
    document.body.append(script); 
}; 
 
loadScript('js/some.js'); 
loadScript('js/test.js');
