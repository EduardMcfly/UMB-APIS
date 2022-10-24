import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Grid, Typography } from '@mui/material';
import { googleMapsApiKey } from '../config';

const AnyReactComponent = ({
  text,
}: {
  text: string;
  lat?: number;
  lng?: number;
}) => <div>{text}</div>;

export default function Maps() {
  const defaultProps = {
    center: {
      lat: 4.559642972306875,
      lng: -74.2044801092969,
    },
    zoom: 11,
  };

  return (
    <Container>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: 1,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Google Maps</Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: '100vh', width: '1000px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleMapsApiKey }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
