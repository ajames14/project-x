import React from 'react'

const Gallery = ({ image }) => {
  return <section className="section" id="gallery">
    <div className="container">
      <h2 className="title">Gallery</h2>
      <div>Latest images from NASA's rovers on Mars.</div>
      <div id="gallery-images">
        <img src='https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG'></img>
        <img src='https://mars.nasa.gov/system/resources/detail_files/22496_PIA23241.gif'></img>
        <img src='https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/rcam/RLB_622990164EDR_F0763002RHAZ00341M_.JPG'></img>
      </div>
    </div>
  </section>
}

export default Gallery