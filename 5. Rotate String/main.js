document.addEventListener('DOMContentLoaded', animateString);

function animateString()
{
    let element = document.getElementById("text");

    let textNode = element.childNodes[0];
    
    
    let str = textNode.data;
    console.log(str);
    
    
    setInterval(function ()
    {
        str = str[str.length - 1] + str.substring(0, str.length - 1);
        textNode.data = str;
    }
    , 70)
}
 
