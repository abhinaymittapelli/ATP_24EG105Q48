/*filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
    const marks = [78, 92, 35, 88, 40, 67];
let  f=marks.filter((mark)=>mark>=40)
console.log(f)
let m=marks.map((mark)=>mark+5)
console.log(m)
let r=marks.reduce((acc,mark)=>acc>mark?acc:mark)
console.log(r)
let s=marks.find((mark)=>mark<40)
console.log(s)
let t=marks.findIndex((mark)=>mark==92)
console.log(t)
