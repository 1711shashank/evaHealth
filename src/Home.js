import React from 'react'
import { useHistory } from "react-router-dom";
import './App.css';
import doctorImg from './public/image1.png';
import BoxImg1 from './public/BoxImg1.png';
import BoxImg2 from './public/BoxImg2.png';
import BoxImg3 from './public/BoxImg3.png';
import BoxImg4 from './public/BoxImg4.png';
import BoxImg5 from './public/BoxImg5.png';


function Home() {
  const history = useHistory();

  const gotoForm = async (e) => {
    e.preventDefault();
    history.push('/form');
  }

  return (
    <div className='app'>
      <>
        <div className='app__top' style={{ display: 'flex', marginBottom: '-100px', flexWrap: 'wrap' }}>
          <div style={{ flex: 4 }}>
            <div className='app__header'>
              <div className='app__headerLeft'>
                <p>inspace</p>
              </div>
              <div className='app__headerCenter'>
                <p className='app__about'>About</p>
                <p className='app__event'>Event</p>
                <p className='app__contactUs'>Contact Us</p>
              </div>
            </div>
            <div className='app__mid1'>
              <p>Building a <strong>community of Doctors</strong>. for the future</p>
            </div>
            <div className='app__mid2'>

              <button className='app__midBox1' onClick={gotoForm}> </button>
              <button className='app__midBox2'></button>
              <p className='app__joinText'>Join the community</p>
              <p className='app__explorText'>Explore</p>

            </div>
          </div>

          <div style={{ flex: 2, backgroundColor: '#B4B8FF', marginRight: '100px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '45px', paddingRight: '45px' }}>
              <button style={{ backgroundColor: 'black', color: 'white', padding: '8px', border: 'none' }}>LOG IN</button>
            </div>
            <img className='app__image' src={doctorImg}></img>
          </div>
        </div>

        <div className='app__footer' style={{
          backgroundColor: '#fff', padding: '25px 100px', position: 'absolute',
          width: '1319px',
          height: '339px',
          left: '0px',
          top: '640px'
        }}>
          <div className='app__footerText' style={{ padding: '20px 0px' }}>Our  community comprises graduates from</div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, border: '1px solid #DCDDD5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img className='image__footerImg1' src={BoxImg1} /> </div>
            <div style={{ flex: 1, border: '1px solid #DCDDD5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img className='image__footerImg2' src={BoxImg2} /> </div>
            <div style={{ flex: 1, border: '1px solid #DCDDD5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img className='image__footerImg3' src={BoxImg3} /> </div>
            <div style={{ flex: 1, border: '1px solid #DCDDD5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img className='image__footerImg4' src={BoxImg4} /> </div>
            <div style={{ flex: 1, border: '1px solid #DCDDD5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img className='image__footerImg5' src={BoxImg5} /> <p className='image__footerText5'> IIT Delhi</p> </div>
          </div>
        </div>
      </>


    </div>
  )
}

export default Home