export const getMovie = async (title) => {
  try{
    const fetchResponse = await fetch(`http://www.omdbapi.com/?apikey=b38c89fe&t=${encodeURIComponent(title)}`)
    const response = await fetchResponse.json()
    if (response.Response === 'False'){
    throw new Error(response.Error)
    }
    const movie = response
    return movie
  }
  catch(error){
    throw new Error(`movie response was not ok ${error.message}`)
  }
}



