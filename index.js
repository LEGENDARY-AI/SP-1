const pi=3.14159
let Height;
let Radius;
let volume;

document.getElementById("MySubmit1").onclick=function(){
    Radius=document.getElementById("MyRadius").value 
    Height=document.getElementById("MyHeight").value 
    Height=Number(Height)
    Radius=Number(Radius)
    
 volume=pi*(Radius)**2*(Height)
 z=Math.round(volume)
 console.log(volume)
document.getElementById("vol").textContent= z + "cm^3"
 console.log(typeof volume)
}

