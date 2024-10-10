import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  
  const movies = ref(JSON.parse(localStorage.getItem('movies')) || [])  //  преобразовывает JSON строку обратно в объект (в данном случае массив фильмов) если в localeStorage ничего нет возвращается пустой массив
  
    const addMovie = (movie) => {
      movies.value.push(movie)
      saveToLocalStorage()
    }
    const removeMovie = (index) => {
      movies.value.splice(index,1)
      saveToLocalStorage()
    }
    const saveToLocalStorage = () => {
      localStorage.setItem('movies', JSON.stringify(movies.value))
    }

    const loadFromLocalStorage = () => {
      const storedMovies = JSON.parse(localStorage.getItem('movies'))
      if(storedMovies){
        movies.value = storedMovies
      }
    }
    
    const updateMovie = (index, updatedMovie) => {
      movies.value[index] = updatedMovie
      saveToLocalStorage()
    }


   return { movies, addMovie, removeMovie, saveToLocalStorage, updateMovie, loadFromLocalStorage }

})

export const useViewedMoviesStore = defineStore('viewedMovies', () => {
  const viewedMovies = ref(JSON.parse(localStorage.getItem('viewedMovies')) || [])

  const addMovie = (movie) => {
    viewedMovies.value.push(movie)
    saveToLocalStorage()  
  }

  const removeMovie = (index) => {
    viewedMovies.value.splice(index,1)
    saveToLocalStorage()
  }
  const saveToLocalStorage = () => {
    localStorage.setItem('viewedMovies', JSON.stringify(viewedMovies.value))
  }

  const loadFromLocalStorage = () => {
    const storedMovies = JSON.parse(localStorage.getItem('viewedMovies'))
    if(storedMovies){
      viewedMovies.value = storedMovies
    }
  }
  
  const updateMovie = (index, updatedMovie) => {
    viewedMovies.value[index] = updatedMovie
    saveToLocalStorage()
  }

  return{ viewedMovies, addMovie, removeMovie, saveToLocalStorage, updateMovie, loadFromLocalStorage }
})