import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'cfc15fdc09mshd5f67d3c0d72811p136d5cjsn0b16e2d55e51',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
