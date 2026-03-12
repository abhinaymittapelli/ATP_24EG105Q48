const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const f=movies.filter((element)=>element.genre=="Sci-Fi")
console.log(f)
const m=movies.map((element)=>element.title + " (" + element.rating + ")")
console.log(m)
const r=movies.reduce((acc,movie)=>acc+movie.rating,0)/movies.length
console.log(r)
const a=movies.find((ele)=>ele.title=="Joker")
console.log(a)
const i=movies.findIndex((ele)=>ele.title=="Avengers")
console.log(i)
