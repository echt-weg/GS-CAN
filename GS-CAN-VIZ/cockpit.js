var opts500 = {
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
   {strokeStyle: "#F03E3E", min: 0, max: 1600}, 
   {strokeStyle: "#FFDD00", min: 1600, max: 1800},
   {strokeStyle: "#30B32D", min: 1800, max: 5800},
   {strokeStyle: "#FFDD00", min: 5800, max: 5900},
   {strokeStyle: "#F03E3E", min: 5900, max: 6000}
],  
};

var opts536 = {
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
   {strokeStyle: "#F03E3E", min: 0, max: 50}, 
   {strokeStyle: "#FFDD00", min: 50, max: 90},
   {strokeStyle: "#30B32D", min: 90, max: 110},
   {strokeStyle: "#FFDD00", min: 110, max: 130},
   {strokeStyle: "#F03E3E", min: 130, max: 150}
],  
};

var opts548 = {
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
   {strokeStyle: "#F03E3E", min: 0, max: 50}, 
   {strokeStyle: "#FFDD00", min: 50, max: 90},
   {strokeStyle: "#30B32D", min: 90, max: 110},
   {strokeStyle: "#FFDD00", min: 110, max: 130},
   {strokeStyle: "#F03E3E", min: 130, max: 150}
],  
};

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


var opts532 = {
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
   {strokeStyle: "#F03E3E", min: 0, max: 2}, 
   {strokeStyle: "#FFDD00", min: 2, max: 3}, 
   {strokeStyle: "#30B32D", min: 3, max: 5}, 
   {strokeStyle: "#FFDD00", min: 5, max: 10},
],  
};

var target = document.getElementById('500g'); 
document.getElementById('500g').style.display="block";
var gauge500 = new Gauge(target).setOptions(opts500); 
gauge500.maxValue = 6200; 
gauge500.setMinValue(0);  
gauge500.animationSpeed = 10; 
gauge500.set(0); 

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

var target = document.getElementById('532g'); 
document.getElementById('532g').style.display="block";
var gauge532 = new Gauge(target).setOptions(opts532); 
gauge532.maxValue = 10; 
gauge532.setMinValue(0);  
gauge532.animationSpeed = 10; 
gauge532.set(0); 

var target = document.getElementById('536g'); 
document.getElementById('536g').style.display="block";
var gauge536 = new Gauge(target).setOptions(opts536); 
gauge536.maxValue = 150; 
gauge536.setMinValue(0);  
gauge536.animationSpeed = 10; 
gauge536.set(0); 

var target = document.getElementById('548g'); 
document.getElementById('548g').style.display="block";
var gauge548 = new Gauge(target).setOptions(opts548); 
gauge548.maxValue = 150; 
gauge548.setMinValue(0);  
gauge548.animationSpeed = 10; 
gauge548.set(0); 