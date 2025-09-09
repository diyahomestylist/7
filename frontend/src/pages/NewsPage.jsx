import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { teamMember } from '../data/mockData';

const NewsPage = () => {
  return (
    <div>
      <Header />
      
      {/* News section start */}
      <div className="news_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="news_taital">Our <span style={{color: '#fefefd'}}>Story</span></h3>
            </div>
          </div>
        </div>
        <div className="news_section_2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="news_img">
                  <img src={teamMember.image} alt={teamMember.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="news_taita_main">
                  <h3 className="news_taital_1">{teamMember.name} - {teamMember.position}</h3>
                  <p className="news_text">
                    {teamMember.description}
                  </p>
                  <p className="news_text">
                    "My journey started in the mountains of Tibet, where I learned the traditional art of momo making from my grandmother. Today, at Jus Momo, we honor those traditions while creating innovative fusion dishes that appeal to modern tastes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News section end */}

      {/* Company section start */}
      <div className="company_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="company_taital">The Journey <span style={{color: '#fcfafa'}}>of Jus Momo</span></h1>
              <p className="company_text">From traditional recipes to modern innovation</p>
            </div>
          </div>
          <div className="company_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/pizza-1.jpg" alt="Traditional Recipes" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Traditional <span style={{color: '#f3f3f3'}}>Recipes</span></h3>
                <p className="lorem_text">
                  Our story begins with authentic Tibetan recipes passed down through generations. Each momo is handcrafted using traditional techniques that have been perfected over centuries. We believe in preserving the authentic taste and cultural heritage of Tibet through our food.
                </p>
                <div className="seemore_bt"><a href="/menu">Taste Tradition</a></div>
              </div>
            </div>
          </div>
          <div className="company_section_3">
            <div className="row">
              <div className="col-md-6">
                <h3 className="home_text">Modern <span style={{color: '#f3f3f3'}}>Innovation</span></h3>
                <p className="lorem_text">
                  While respecting tradition, we continuously innovate to create fusion dishes like Mo Pav and Momo Maggick. Our modern approach combines authentic flavors with contemporary presentation, making Tibetan cuisine accessible and exciting for everyone.
                </p>
                <div className="seemore_bt"><a href="/menu">Try Innovation</a></div>
              </div>
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/burger-1.jpg" alt="Modern Innovation" />
                </div>
              </div>
            </div>
          </div>
          <div className="company_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="company_img">
                  <img src="/images/pizza-3.jpg" alt="Quality Commitment" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Quality <span style={{color: '#f3f3f3'}}>Commitment</span></h3>
                <p className="lorem_text">
                  Every ingredient is carefully selected, every momo is handcrafted with love, and every customer experience is our priority. Our commitment to quality has made us one of India's fastest-growing food franchises, with over 100 outlets across the country.
                </p>
                <div className="seemore_bt"><a href="/franchise">Join Our Family</a></div>
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
              <div className="about_taital">Our <span style={{color: '#f7f6f6'}}>Mission</span></div>
              <p className="about_text">
                To bring the authentic taste of Tibet to every corner of India while providing excellent franchise opportunities for entrepreneurs. We aim to preserve traditional Tibetan cuisine while making it accessible to modern food lovers.
              </p>
              <p className="about_text">
                Our vision is to become India's most trusted and loved momo brand, known for quality, authenticity, and innovation. We believe that great food brings people together and creates lasting memories.
              </p>
              <div className="video_bt">
                <div className="play_icon">
                  <img src="/images/play-icon.png" alt="Watch Our Story" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src="/images/about.jpg" alt="Our Mission" />
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

export default NewsPage;