import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Container from 'react-bootstrap/Container'

export default function Contact() {
  return (
    <Container>
      <MapContainer style={{height: "80vh", width: "100vh"}} center={[35.29629, -81.01604]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.2965, -81.0166]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  )
}
