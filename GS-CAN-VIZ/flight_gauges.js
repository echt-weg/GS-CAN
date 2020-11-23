var opts314 = {
  angle: -0.2, 
  lineWidth: 0.2, 
  radiusScale: 1, 
  pointer: {
    length: 0.6, 
    strokeWidth: 0.035, 
    color: '#000000' 
  },
  limitMax: false,     
  limitMin: false,     
  colorStart: '#6FADCF',   
  colorStop: '#8FC0DA',    
  strokeColor: '#E0E0E0',  
  generateGradient: true,
  highDpiSupport: true,     
staticZones: [
   {strokeStyle: "white", min: -10, max: 0},
   {strokeStyle: "#30B32D", min: 0, max: 10},
],  
};

var opts315 = {
  angle: -0.2, 
  lineWidth: 0.2, 
  radiusScale: 1, 
  pointer: {
    length: 0.6, 
    strokeWidth: 0.035, 
    color: '#000000' 
  },
  limitMax: false,     
  limitMin: false,     
  colorStart: '#6FADCF',   
  colorStop: '#8FC0DA',    
  strokeColor: '#E0E0E0',  
  generateGradient: true,
  highDpiSupport: true,     
staticZones: [
   {strokeStyle: "#F03E3E", min: 0, max: 35},
   {strokeStyle: "white", min: 35, max: 44}, 
   {strokeStyle: "#d7f5d6", min: 44, max: 58},
   {strokeStyle: "#30B32D", min: 58, max: 98}, 
   {strokeStyle: "#F03E3E", min: 98, max: 120} 
],  
};



var target = document.getElementById('314g'); 
document.getElementById('314g').style.display="block";
var gauge314 = new Gauge(target).setOptions(opts314); 
gauge314.maxValue = 10; 
gauge314.setMinValue(-10);  
gauge314.animationSpeed = 10; 
gauge314.set(0); 

var target = document.getElementById('315g'); 
document.getElementById('315g').style.display="block";
var gauge315 = new Gauge(target).setOptions(opts315); 
gauge315.maxValue = 120; 
gauge315.setMinValue(0);  
gauge315.animationSpeed = 10; 
gauge315.set(0); 
