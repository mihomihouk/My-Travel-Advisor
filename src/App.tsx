import React, { useState, useEffect } from 'react'
import { getPlacesData } from './api'
import { Bounds } from '../src/types/type'

//styles
import { CssBaseline, Grid } from '@material-ui/core'

//components
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App: React.FC = () => {
  const [places, setPlaces] = useState([])
  // the latitude and logitude of map
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  })
  // top right and bottm left of map
  const [bounds, setBounds] = useState<Bounds | null>(null)
  // once user comes to the page, set user's location to the map's center
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])
  // when there's changes in map's coordinates and bounds, different data is fetched
  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates, bounds])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
