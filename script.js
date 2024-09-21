function calculation(){
    let oldreading=parseFloat(document.getElementById("old").value);
    let newreading=parseFloat(document.getElementById("new").value);
    let unitamt=parseFloat(document.getElementById("cost").value);
    currentreading=newreading- oldreading;
    
    billamount=unitamt*currentreading;

    document.getElementById("cl").innerHTML="" + currentreading;
    document.getElementById("result").innerHTML="" +billamount;

    



    
}
document.getElementById("cal_btn").addEventListener("click",calculation);

