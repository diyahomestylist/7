import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { outlets } from '../data/mockData';

const ContactPage = () => {
  return (
    <div>
      <Header />
      
      {/* Contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="contact_taital">Contact <span style={{color: '#fefefd'}}>Us</span></h3>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="mail_section_1">
                  <input type="text" className="mail_text" placeholder="Name" name="Name" />
                  <input type="text" className="mail_text" placeholder="Email" name="Email" />
                  <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" />
                  <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                  <div className="send_bt"><a href="#">SEND</a></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Mumbai+Maharashtra+India"
                      width="600" 
                      height="368" 
                      frameBorder="0" 
                      style={{border:0, width: '100%'}}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section end */}

      {/* Outlets section start */}
      <div className="company_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="company_taital">Our <span style={{color: '#fcfafa'}}>Outlets</span></h1>
              <p className="company_text">Visit us at any of our locations across Mumbai</p>
            </div>
          </div>
          
          {outlets.map((outlet, index) => (
            <div key={outlet.id} className={index % 2 === 0 ? "company_section_2" : "company_section_3"}>
              <div className="row">
                {index % 2 === 0 ? (
                  <>
                    <div className="col-md-6">
                      <div className="company_img">
                        <img src={`/images/pizza-${index + 1}.jpg`} alt={outlet.name} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="home_text">{outlet.name}</h3>
                      <p className="lorem_text">
                        <strong>Address:</strong> {outlet.address}<br/>
                        <strong>Phone:</strong> {outlet.phone}<br/>
                        <strong>Hours:</strong> {outlet.hours}
                      </p>
                      <div className="seemore_bt"><a href={`tel:${outlet.phone}`}>Call Now</a></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6">
                      <h3 className="home_text">{outlet.name}</h3>
                      <p className="lorem_text">
                        <strong>Address:</strong> {outlet.address}<br/>
                        <strong>Phone:</strong> {outlet.phone}<br/>
                        <strong>Hours:</strong> {outlet.hours}
                      </p>
                      <div className="seemore_bt"><a href={`tel:${outlet.phone}`}>Call Now</a></div>
                    </div>
                    <div className="col-md-6">
                      <div className="company_img">
                        <img src={`/images/pizza-${index + 1}.jpg`} alt={outlet.name} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Outlets section end */}

      <Footer />
    </div>
  );
};

export default ContactPage;