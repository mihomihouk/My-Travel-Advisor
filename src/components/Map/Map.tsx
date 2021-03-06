import React, { useState } from 'react'

import { Bounds, Coordinates } from '../../types/type'

//styles
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

//component
import NodeMarker from './NodeMarker '

interface Props {
  setCoordinates: (coordinates: Coordinates) => void
  setBounds: (bounds: Bounds) => void
  coordinates: Coordinates
  places: any
  setChildClicked: (child) => void
}
const Map: React.FC<Props> = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles()
  //true if width of device is lager than 600px
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6By3xWJCxo_Z8KROklvHQT2m6FS2nyiE' }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e: GoogleMapReact.ChangeEventValue) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => {
          setChildClicked(child)
        }}
      >
        {/* {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            // @ts-ignore
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {' '}
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))} */}
        <NodeMarker places={places} />
      </GoogleMapReact>
    </div>
  )
}

export default Map
