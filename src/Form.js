import React from 'react'
import './Form.css';


function Form() {
  return (
    <div className='form'>
      <div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>

          <h1 style={{ textAlign: 'center', margin: '50px' }} > Fill up the details to register </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
            <div style={{ flex: '1', marginRight: '100px' }}>
              <div style={{ marginBottom: '10px' }}>   <label >   Doctor Name*  </label>                   </div>
              <div >  <input placeholder="Full Name" />                  </div>
            </div>
            <div style={{ flex: '1', flexWrap: 'wrap' }}>
              <div style={{ marginBottom: '10px' }}>   <label>   Speciality*  </label>                    </div>
              <div >  <input placeholder="Select specialization" />      </div>
            </div>
          </div>

          <div style={{ margin: '20px' }}>
            <div style={{ marginBottom: '10px' }}> <label >   Email*  </label>                   </div>
            <div > <input placeholder="you@example.com" /> </div>
          </div>

          <div style={{ margin: '20px' }}>

            <div style={{ marginBottom: '10px' }}> <label >   Mobile Number*  </label>                   </div>
            {/* <div>
                  <select id="country" name="country">
                    <option value="+91"> IND </option>
                    <option value="+91"> IND </option>
                  </select>
                </div> */}
            <div>   <input placeholder=" +91   123456789" />    </div>

          </div>

          <div style={{ display: 'flex', margin: '20px' }}>
            <div style={{ flex: '1', flexWrap: 'wrap', marginRight: '50px' }}>
              <div style={{ marginBottom: '10px' }}>   <label >   Experience*    </label>                   </div>
              <div >  <input placeholder="Write in numbers" />                  </div>
            </div>
            <div style={{ flex: '1', flexWrap: 'wrap', marginLeft: '50px' }}>
              <div style={{ marginBottom: '10px' }}>   <label>   Clinic Name*  </label>                    </div>
              <div >  <input placeholder="Eg. Sharda Clinic" />      </div>
            </div>
          </div>

          <div style={{ margin: '20px' }}>
            <div style={{ marginBottom: '10px' }}> <label >   Address*  </label>                   </div>
            <div > <input placeholder="Address" /> </div>
          </div>
          <div style={{ margin: '20px' }}>
            <div style={{ marginBottom: '10px' }}> <label >   Add work experience  </label>                   </div>
            <div > <input placeholder="eg.   2013 - 2014 Senior registrar at Sahyadri Narayana Hrudayala" /> </div>
          </div>

          <div style={{ display: 'flex', margin: '20px' }}>
            <div style={{ flex: '1', flexWrap: 'wrap', marginRight: '50px' }}>
              <div style={{ marginBottom: '10px' }}>   <label >   Start Date*    </label>                   </div>
              <div >  <input placeholder="DD-MM-YY" />                  </div>
            </div>
            <div style={{ flex: '1', flexWrap: 'wrap', marginLeft: '50px' }}>
              <div style={{ marginBottom: '10px' }}>   <label>   End Date*  </label>                    </div>
              <div >  <input placeholder="DD-MM-YY" />      </div>
            </div>
          </div>

          <div style={{ margin: '20px' }}>
            <div style={{ marginBottom: '10px' }}> <label >   Add work experience  </label>                   </div>
            <div style={{ marginBottom: '20px' }}> <input placeholder="eg.   MBBS - Jagadguru Jayadeva Murugarajendra Medical College (JJMMC), 2008" /> </div>
            <div style={{ marginBottom: '20px' }}> <input placeholder="eg.   MD - General Medicine - BLDEA's Shri B M patil Medical College. Bijapur, 2013" /> </div>
            <div style={{ marginBottom: '20px' }}>
              <button style={{ display: 'block', width: '100%', backgroundColor: 'white', color: 'black', padding: '14px 28px', textAlign: 'center', border: '1px solid black' }}>Add more+</button>
            </div>
          </div>

          <div style={{ marginLeft: '20px' }}>
            <button style={{ display: 'block', width: '100%', backgroundColor: '#001D84', color: 'white', padding: '14px 28px', textAlign: 'center', border: 'none' }}>Complete registration</button>
          </div>

        </form>
      </div>

      <div>
        {/*
        <form className='form__container'>
          <label className='form__heading'>Fill up the details to register</label>
          <label className='form__doctorName'>Doctor Name*</label>
          <label className='form__speciality'>Speciality*</label>
          <label className='form__email'>Email*</label>
          <label className='form__mobileNumber'>Mobile Number*</label>
          <label className='form__experience'>Experience*</label>
          <label className='form__clinicName'>Clinic Name*</label>
          <label className='form__address'>Address</label>
          <label className='form__workExperience'>Add work experience</label>
          <label className='form__startDate'>Start Date*</label>
          <label className='form__endDate'>End Date*</label>
          <label className='form__eduction'>Eduction*</label>

          <input className='input__docterName' placeholder="Full Name" />
          <input className='input__speciality' placeholder="Select specialization" />
          <input className='input__email' placeholder="you@example.com" />


        </form>
      </div> */}
      </div>
    </div>
  )
}

export default Form;