// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

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
 
