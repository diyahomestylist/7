import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer_logo">
                <img src="/images/logo.png" alt="Jus Momo" />
              </div>
              <p className="footer_text">
                Authentic handcrafted Tibetan Momos made with love and the freshest ingredients
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer_taital">LET US HELP YOU</h3>
              <p className="footer_text">
                Experience the authentic taste of Tibet with our handcrafted momos
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer_taital">INFORMATION</h3>
              <div className="footer_menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/franchise">Franchise</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer_taital">Contact Us</h3>
              <div className="location_text">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="padding_left_10">Mumbai, Maharashtra, India</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919876543210">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span className="padding_left_10">+91 9876543210</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@jusmomo.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span className="padding_left_10">info@jusmomo.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_section">
            <div className="row">
              <div className="col-md-6">
                <div className="input_bt">
                  <input type="text" className="mail_bt" placeholder="Enter Your Email" name="email" />
                  <span className="subscribe_bt" id="basic-addon2">
                    <a href="#">Subscribe</a>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer_social_icon">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section end */}
      
      {/* Copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2024 All Rights Reserved. Jus Momo - Authentic Tibetan Momos
          </p>
        </div>
      </div>
      {/* Copyright section end */}
    </>
  );
};

export default Footer;