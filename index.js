
let temp = prompt("Enter a Temperature")


function converToCelcius(temp){
return (temp - 32) * 5/9
}
 celcius = converToCelcius(temp)
 description = describeTemperature(temp);

function describeTemperature(temp){
if (temp <= 0)
    return `VERY COLD!`
else if (temp < 20)
    return `COLD!`
else if(temp < 30)
    return `WARM!`
else if (temp <= 40)
    return `HOT!`
else;
return `VERY HOT!`

}

console.log("The temperature in F to C is ", celcius, "And its " , description )



