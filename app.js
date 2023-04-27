// http://www.omdbapi.com/?i=tt3896198&apikey=b17acb1d

const result = document.getElementById('result')
const form = document.querySelector('form')
const input = document.querySelector('input')
const images = document.querySelectorAll('li > img')
// let options = {
//   rootMargin: '10% 0px',
//   thresold: 0,
// }

// const handleIntersect = (entries) => {
//   console.log(entries)

//   entries.array.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1
//     }
//   })
// }

let movies = []

const fetchMovies = async (search) => {
  await fetch(`http://www.omdbapi.com/?s=${search}&apikey=f27665de`)
    .then((response) => response.json())
    .then((data) => (movies = data))
  console.log(movies.Search)
}

const moviesDisplay = () => {
  if (movies.Search === null) {
    result.innerHTML = '<h2>Aucun résultat</h2>'
  } else {
    result.innerHTML = movies.Search.map((movie) => {
      return `
      <li class='card'>
        <img src='${movie.Poster}' alt='${movie.Title}'>
        <h2>${movie.Title}</h2>
        <p>${movie.Year}</p>
        <button>Read More</button>
      </li>
      `
    }).join('')
  }
  
  // const observer = new IntersectionObserver(handleIntersect, options)
  // images.forEach((image) => {
  //   observer.observe(image)
  // })
}

input.addEventListener('input', (e) => {
  fetchMovies(e.target.value)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  moviesDisplay()
})
