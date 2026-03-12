 /*
 Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

let temparature=[32, 35, 28, 40, 38, 30, 42]
const t=temparature.filter(temp=>temp>35)
console.log("Above 35 ",t)
const f=temparature.map((temp)=>((temp*9)/5+32))
console.log("After Converting Celsius to Fahrenheit ",f)

const avg=temparature.reduce((acc,temp)=>acc+temp)/temparature.length
console.log(avg)

const r=temparature.find(temp=>temp>40)
console.log(r)
const r2=temparature.findIndex((temp)=>temp==28)
console.log(r2)
