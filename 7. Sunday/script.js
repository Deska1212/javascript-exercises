// Write a program to find out if the 1st of Jan will be a Sunday between 2014 and 2050

for(let i = 2014; i <= 2050; i++)
{
    // new Date(year, month index(0-11), date index(1-31))
    let date = new Date(i, 0, 1)

    if(date.getDay() == 0)
    {
        console.log(i);
    }
    
}