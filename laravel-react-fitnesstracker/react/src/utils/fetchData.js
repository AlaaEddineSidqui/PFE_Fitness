export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3055a32dbfmsh729c0bc342dc084p1ced22jsnf4a2d08b053c',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3055a32dbfmsh729c0bc342dc084p1ced22jsnf4a2d08b053c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}