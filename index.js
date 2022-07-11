document.getElementById("hour-add").addEventListener("click",()=> {
    if(parseInt(document.getElementById("hour-10").innerHTML)==9)
    document.getElementById("hour-10").innerHTML=0;
    else
    document.getElementById("hour-10").innerHTML= parseInt(document.getElementById("hour-10").innerHTML)+1;
})
document.getElementById("hour-add-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("hour-1").innerHTML)==9)
    document.getElementById("hour-1").innerHTML=0;
    else
    document.getElementById("hour-1").innerHTML= parseInt(document.getElementById("hour-1").innerHTML)+1;
})
document.getElementById("min-add").addEventListener("click",()=> {
    if(parseInt(document.getElementById("min-10").innerHTML)==5)
    document.getElementById("min-10").innerHTML=0;
    else
    document.getElementById("min-10").innerHTML= parseInt(document.getElementById("min-10").innerHTML)+1;
})
document.getElementById("min-add-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("min-1").innerHTML)==9)
    document.getElementById("min-1").innerHTML=0;
    else
    document.getElementById("min-1").innerHTML= parseInt(document.getElementById("min-1").innerHTML)+1;
})
document.getElementById("sec-add").addEventListener("click",()=> {
    if(parseInt(document.getElementById("sec-10").innerHTML)==5)
    document.getElementById("sec-10").innerHTML=0;
    else
    document.getElementById("sec-10").innerHTML= parseInt(document.getElementById("sec-10").innerHTML)+1;
})
document.getElementById("sec-add-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("sec-1").innerHTML)==9)
    document.getElementById("sec-1").innerHTML=0;
    else
    document.getElementById("sec-1").innerHTML= parseInt(document.getElementById("sec-1").innerHTML)+1;
})


document.getElementById("hour-sub").addEventListener("click",()=> {
    if(parseInt(document.getElementById("hour-10").innerHTML)==0)
    document.getElementById("hour-10").innerHTML=9;
    else
    document.getElementById("hour-10").innerHTML= parseInt(document.getElementById("hour-10").innerHTML)-1;
})
document.getElementById("hour-sub-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("hour-1").innerHTML)==0)
    document.getElementById("hour-1").innerHTML=9;
    else
    document.getElementById("hour-1").innerHTML= parseInt(document.getElementById("hour-1").innerHTML)-1;
})
document.getElementById("min-sub").addEventListener("click",()=> {
    if(parseInt(document.getElementById("min-10").innerHTML)==0)
    document.getElementById("min-10").innerHTML=5;
    else
    document.getElementById("min-10").innerHTML= parseInt(document.getElementById("min-10").innerHTML)-1;
})
document.getElementById("min-sub-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("min-1").innerHTML)==0)
    document.getElementById("min-1").innerHTML=9;
    else
    document.getElementById("min-1").innerHTML= parseInt(document.getElementById("min-1").innerHTML)-1;
})
document.getElementById("sec-sub").addEventListener("click",()=> {
    if(parseInt(document.getElementById("sec-10").innerHTML)==0)
    document.getElementById("sec-10").innerHTML=5;
    else
    document.getElementById("sec-10").innerHTML= parseInt(document.getElementById("sec-10").innerHTML)-1;
})
document.getElementById("sec-sub-2").addEventListener("click",()=> {
    if(parseInt(document.getElementById("sec-1").innerHTML)==0)
    document.getElementById("sec-1").innerHTML=9;
    else
    document.getElementById("sec-1").innerHTML= parseInt(document.getElementById("sec-1").innerHTML)-1;
})



start=document.getElementById("start");
start.addEventListener("click",function(){
    start.disabled=true;
    var h = parseInt((document.getElementById("hour-10").innerHTML)+(document.getElementById("hour-1")).innerHTML);
    var m = (parseInt(document.getElementById("min-10").innerHTML)*10)+parseInt(document.getElementById("min-1").innerHTML);
    var s = (parseInt(document.getElementById("sec-10").innerHTML)*10)+parseInt(document.getElementById("sec-1").innerHTML);
    console.log(h);
    console.log(m);
    console.log(s);
    var t=(parseInt(h)*3600)+(parseInt(m)*60)+(parseInt(s));
    const time=setInterval(function()
    {
        t--;
        console.log(t);
        if(t<=0)
        {
            clearInterval(time);
            start.disabled=false;
        }
        document.getElementById("hour-10").innerHTML=parseInt((parseInt(t/3600))/10);
        document.getElementById("hour-1").innerHTML=parseInt((parseInt(t/3600))%10);
        document.getElementById("min-10").innerHTML=parseInt((parseInt(t/60)%60)/10);
        document.getElementById("min-1").innerHTML=(parseInt(t/60))%10;
        document.getElementById("sec-10").innerHTML=parseInt((t%60)/10);
        document.getElementById("sec-1").innerHTML=parseInt((t%60)%10);
    },1000)
})
