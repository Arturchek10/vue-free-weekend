const API_KEY = 'b38c89fe' 

export const getMovie = async (title) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    const response = await fetchResponse.json()
    if (response.Response === 'False'){
    throw new Error(response.Error)
    }
    return response
  }
  catch(error){
    throw new Error(`movie response was not ok ${error.message}`)
  }
}

export const searchMovies = async (query) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
    const response = await fetchResponse.json()
    if(response.Response === 'False'){
      throw new Error (response.Error)
    } 
    return response.Search || []
  } catch (error){
    throw new Error (`movie search response was not ok: ${error.message}`)
  }
}

