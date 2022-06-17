
function display()
{
    var api="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg=document.getElementById("image");
    var mytxt=document.getElementById("qrtext").value;
    var mysize=document.getElementById("size").value;

    if(mytxt!=""&&mysize=="100")
    myimg.src=api+"100x100&chl="+mytxt;

    else if(mytxt!=""&&mysize=="150")
    myimg.src=api+"150x150&chl="+mytxt;

    else if(mytxt!=""&&mysize=="200")
    myimg.src=api+"200x200&chl="+mytxt;

    else if(mytxt!=""&&mysize=="250")
    myimg.src=api+"250x250&chl="+mytxt;

    else if(mytxt!=""&&mysize=="300")
    myimg.src=api+"300x300&chl="+mytxt;

    else
    alert("Please enter text");
}

