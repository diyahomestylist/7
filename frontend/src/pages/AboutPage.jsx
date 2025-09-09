import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      {/* About section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">About <span style={{color: '#f7f6f6'}}>Jus Momo</span></div>
              <p className="about_text">
                'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs using the freshest of ingredients in both veg and non veg to consumers tastes and preferences.
              </p>
              <p className="about_text">
                Launched in 2021, Jus Momo offers excellent opportunities for franchise owners by providing affordable investment options with good ROI and simple menu with a variety of choices. This is one of India's best food franchises under ₹2 lakhs.
              </p>
              <div className="video_bt">
                <div className="play_icon">
                  <img src="/images/play-icon.png" alt="Play Video" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src="/images/about.jpg" alt="About Jus Momo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section end */}

      <Footer />
    </div>
  );
};

export default AboutPage;