const API_KEY = 'b38c89fe' 

export const getMovie = async (title) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    const response = await fetchResponse.json()
    if (response.Response === 'False'){
      console.log("response.Response === 'False'");
      throw new Error(response.Error)
    }
    return response
  }
  catch(error){
    console.log("erorrrrr");
    throw new Error(`movie response was not ok ${error.message}`)
  }
}

export const searchMovies = async (query) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
    const response = await fetchResponse.json()
    // console.log(response);
    
    if(response.Response === 'False' && response.Error === 'Movie not found!'){
      console.log('фильм не найден')
    }
    else if(response.Response === 'False' && response.Error === 'Too many results.'){
      console.log('слишком много совпадений, уточните запрос');
    }
    // console.log(response);
    return response.Search ? response.Search.slice(0, 5) : [];

  } catch (error){
    throw new Error (`movie search response was not ok: ${error.message}`)
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

