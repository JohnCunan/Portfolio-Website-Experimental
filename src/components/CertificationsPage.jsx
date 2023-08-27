import '../styles/CertificationsPage.css'
import LoadingIcon from '../material_ui_components/loading_icon'
import { useState } from 'react'

// Images of certificates
import cert1 from "../images/c1.png"
import cert2 from "../images/c2.png"
import cert3 from "../images/c3.png"
import cert4 from "../images/c4.png"
import cert5 from "../images/c5.png"
import cert6 from "../images/c6.png"

export default function CertificationsPage() {

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => { setLoaded(true) }

  return (
    <div className='CertificationsPageContainer'>
        <h2>Certifications</h2>
        <p>Certifications I earned throughout the years</p>
        <div className='CertsContainer'>
        {!loaded && <LoadingIcon />}
          <img src={cert1} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
          <img src={cert2} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
          <img src={cert3} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
          <img src={cert4} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
          <img src={cert5} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
          <img src={cert6} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
        </div>
    </div>
  )
}
