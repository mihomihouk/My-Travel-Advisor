import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

const NodeMarker = ({ places }) => {
  const classes = useStyles()
  //true if width of device is lager than 600px
  const isDesktop = useMediaQuery('(min-width:600px)')
  console.log(places)

  return (
    <>
      {places &&
        places.map((place, i) => (
          <div
            className={classes.markerContainer}
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
        ))}
    </>
  )
}

export default NodeMarker
