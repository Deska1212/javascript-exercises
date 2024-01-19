const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();



// Add a leading zero if day is less than 10
if(day < 10)
{
    day = "0" + day;
}

if(month < 10)
{
    month = "0" + month;
}


const dateString = day + "/" + month + "/" + year;

console.log(dateString);
