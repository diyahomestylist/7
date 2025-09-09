import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { franchiseInfo } from '../data/mockData';

const FranchisePage = () => {
  return (
    <div>
      <Header />
      
      {/* Company section start */}
      <div className="company_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="company_taital">Franchise <span style={{color: '#fcfafa'}}>Opportunities</span></h1>
              <p className="company_text">Join India's best food franchise under ₹2 lakhs with excellent ROI</p>
            </div>
          </div>
          <div className="company_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/pizza-4.jpg" alt="Low Investment" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Low <span style={{color: '#f3f3f3'}}>Investment</span></h3>
                <p className="lorem_text">
                  <strong>Investment:</strong> {franchiseInfo.investment}<br/>
                  <strong>ROI:</strong> {franchiseInfo.roi}<br/>
                  <strong>Support:</strong> {franchiseInfo.support}<br/>
                  <strong>Royalty:</strong> {franchiseInfo.royalty}
                </p>
                <p className="lorem_text">
                  Start your own Jus Momo outlet with minimal investment. Perfect for entrepreneurs looking for a profitable food business with authentic taste and proven success.
                </p>
                <div className="seemore_bt"><a href="#contact">Apply Now</a></div>
              </div>
            </div>
          </div>
          <div className="company_section_3">
            <div className="row">
              <div className="col-md-6">
                <h3 className="home_text">Complete <span style={{color: '#f3f3f3'}}>Training</span></h3>
                <p className="lorem_text">
                  We provide comprehensive training programs covering:
                </p>
                <ul className="lorem_text">
                  <li>• Authentic momo preparation techniques</li>
                  <li>• Kitchen setup and equipment guidance</li>
                  <li>• Staff training and management</li>
                  <li>• Marketing and promotional strategies</li>
                  <li>• Quality control and hygiene standards</li>
                </ul>
                <div className="seemore_bt"><a href="#contact">Learn More</a></div>
              </div>
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/pizza-5.jpg" alt="Training Support" />
                </div>
              </div>
            </div>
          </div>
          <div className="company_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/pizza-6.jpg" alt="Success Story" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Success <span style={{color: '#f3f3f3'}}>Stories</span></h3>
                <p className="lorem_text">
                  Join our growing family of 50+ successful franchisees across India. Our proven business model ensures:
                </p>
                <ul className="lorem_text">
                  <li>• Quick return on investment</li>
                  <li>• Ongoing marketing support</li>
                  <li>• Brand recognition and trust</li>
                  <li>• Simple operations and management</li>
                  <li>• Regular menu innovations</li>
                </ul>
                <div className="seemore_bt"><a href="#contact">Join Today</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company section end */}

      {/* About section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">Why Choose <span style={{color: '#f7f6f6'}}>Jus Momo?</span></div>
              <p className="about_text">
                {franchiseInfo.description}
              </p>
              <p className="about_text">
                With our proven track record, authentic recipes, and comprehensive support system, Jus Momo offers one of the best franchise opportunities in the food industry. Our simple yet delicious menu ensures consistent quality and customer satisfaction.
              </p>
              <div className="video_bt">
                <div className="play_icon">
                  <img src="/images/play-icon.png" alt="Watch Success Stories" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src="/images/about.jpg" alt="Franchise Success" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section end */}

      {/* Contact section start */}
      <div className="contact_section layout_padding" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="contact_taital">Apply for <span style={{color: '#fefefd'}}>Franchise</span></h3>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="mail_section_1">
                  <input type="text" className="mail_text" placeholder="Full Name" name="Name" />
                  <input type="text" className="mail_text" placeholder="Email Address" name="Email" />
                  <input type="text" className="mail_text" placeholder="Phone Number" name="Phone" />
                  <input type="text" className="mail_text" placeholder="Preferred Location" name="Location" />
                  <input type="text" className="mail_text" placeholder="Investment Budget" name="Budget" />
                  <textarea className="massage-bt" placeholder="Tell us about your experience and why you want to join Jus Momo" rows="5" id="comment" name="Message"></textarea>
                  <div className="send_bt"><a href="#">APPLY NOW</a></div>
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

      <Footer />
    </div>
  );
};

export default FranchisePage;