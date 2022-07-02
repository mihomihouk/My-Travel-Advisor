import React from 'react'

import { Bounds, Coordinates } from '../../types/type'

//styles
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'

interface Props {
  setCoordinates: (coordinates: Coordinates) => void
  setBounds: (bounds: Bounds) => void
  coordinates: Coordinates
}
const Map: React.FC<Props> = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles()
  //false if width of device is lager than 600px
  const isMobile = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6By3xWJCxo_Z8KROklvHQT2m6FS2nyiE' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e: GoogleMapReact.ChangeEventValue) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        // onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
