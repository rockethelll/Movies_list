// http://www.omdbapi.com/?i=tt3896198&apikey=b17acb1d

const result = document.getElementById('result')
const form = document.querySelector('form')
const input = document.querySelector('input')

const modal = document.getElementById('myModal')

let movies = []

const fetchMovies = async (search) => {
  await fetch(`http://www.omdbapi.com/?s=${search}&apikey=f27665de`)
    .then((response) => response.json())
    .then((data) => (movies = data))
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
        <button data-imdbID='${movie.imdbID}' id='read'>Read More</button>
      </li>
      `
    }).join('')
    let readMoreBtn = document.querySelectorAll('button')
    readMoreBtn = document.querySelectorAll('button')
    readMoreBtn.forEach((button) => {
      button.addEventListener('click', () => {
        let imdbID = button.dataset.imdbid
        console.log(imdbID + ' test')
        modalDisplay(imdbID)
      })
    })
  }
}

let searchModal = []

const fetchModal = async (imdbID) => {
  let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=f27665de`
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      searchModal = data
    })
}

const modalDisplay = async (imdbID) => {
  await fetchModal(imdbID).then(() => {
    console.log(searchModal.Title + ' test')

    return modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src='${searchModal.Poster}'>
      <p>${searchModal.Title}</p>
      <p>${searchModal.Year}</p>
      <p>${searchModal.Plot}</p>
    </div>
    `
      })
      console.log(searchModal.Year + ' test2222')

  const span = document.getElementsByClassName("close")[0]

  modal.style.display = 'block'
  span.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

input.addEventListener('input', (e) => {
  fetchMovies(e.target.value)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  moviesDisplay()
})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
// let options = {
//   rootMargin: '10% 0px',
//   thresold: 0,
// }

// const images = document.querySelectorAll('li > img')
// const handleIntersect = (entries) => {
//   console.log(entries)

//   entries.array.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1
//     }
//   })
// }

// const observer = new IntersectionObserver(handleIntersect, options)
// images.forEach((image) => {
//   observer.observe(image)
// })
