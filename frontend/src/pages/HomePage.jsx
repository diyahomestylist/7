import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { momoProducts, bannerImages, testimonials, galleryImages, teamMember } from '../data/mockData';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientSlide, setClientSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const clientTimer = setInterval(() => {
      setClientSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(clientTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const nextClientSlide = () => {
    setClientSlide((prev) => (prev + 1) % 3);
  };

  const prevClientSlide = () => {
    setClientSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div>
      <Header />
      
      {/* Banner section start */}
      <div className="banner_section layout_padding">
        <div className="container-fluid">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-sm-2">
                    <h1 className="banner_taital">Authentic <span style={{color: '#343535'}}>Tibetan Momos</span></h1>
                  </div>
                  <div className="col-sm-10">
                    <div className="images_main">
                      <div className="banner_img">
                        <img src="/images/pizza-1.jpg" alt="Steamed Momos" />
                      </div>
                      <div className="banner_img">
                        <img src="/images/burger-1.jpg" alt="Mo Pav" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-sm-2">
                    <h1 className="banner_taital">Handcrafted <span style={{color: '#343535'}}>With Love</span></h1>
                  </div>
                  <div className="col-sm-10">
                    <div className="images_main">
                      <div className="banner_img">
                        <img src="/images/pizza-2.jpg" alt="Kurkure Momos" />
                      </div>
                      <div className="banner_img">
                        <img src="/images/pizza-3.jpg" alt="Momo Maggick" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-sm-2">
                    <h1 className="banner_taital">Fresh <span style={{color: '#343535'}}>Ingredients</span></h1>
                  </div>
                  <div className="col-sm-10">
                    <div className="images_main">
                      <div className="banner_img">
                        <img src="/images/pizza-4.jpg" alt="Fresh Momos" />
                      </div>
                      <div className="banner_img">
                        <img src="/images/pizza-5.jpg" alt="Delicious Momos" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" onClick={prevSlide}>
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" onClick={nextSlide}>
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Banner section end */}

      {/* About section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">About <span style={{color: '#f7f6f6'}}>Jus Momo</span></div>
              <p className="about_text">
                'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs using the freshest of ingredients in both veg and non veg to consumers tastes and preferences. This is one of India's best food franchises under ₹2 lakhs.
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

      {/* Design section start */}
      <div className="design_section layout_padding">
        <div className="container">
          <h1 className="design_taital">Our Delicious <span style={{color: '#f3f3f3'}}>Menu Items</span></h1>
          <p className="design_text">
            Authentic handcrafted Tibetan Momos made with love and the freshest ingredients. Experience the taste of Tibet!
          </p>
          <div className="design_section_2">
            <div className="design_section_main">
              <div className="row">
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/pizza-1.jpg" alt="Steamed Momos" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Steamed Momos</h4>
                        <p className="some_text">
                          Delicious, Mouthwatering Handcrafted Momos Filled With Juicy Veg and Non-Veg Filling
                        </p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/pizza-2.jpg" alt="Kurkure Momos" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Kurkure Momos</h4>
                        <p className="some_text">
                          Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight
                        </p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container_main margin_top_30">
                    <img src="/images/burger-1.jpg" alt="Mo Pav" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Mo Pav</h4>
                        <p className="some_text">
                          Signature Crunchy Kurkure Momo Placed Inside a Soft Pav Bun with Authentic Vadapav Masala
                        </p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/pizza-3.jpg" alt="Momo Maggick" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Momo Maggick</h4>
                        <p className="some_text">
                          Piping Hot Maggi Noodles Served With Our Saucy Momos in 4 Tantalizing Flavours
                        </p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="read_bt"><a href="/menu">See More</a></div>
        </div>
      </div>
      {/* Design section end */}

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
                  <img src="/images/pizza-4.jpg" alt="Restaurant Setup" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Low <span style={{color: '#f3f3f3'}}>Investment</span></h3>
                <p className="lorem_text">
                  Start your own Jus Momo outlet with investment under ₹2 lakhs. Get complete training and setup support with no royalty fees. Perfect for entrepreneurs looking for a profitable food business with authentic taste and good ROI.
                </p>
                <div className="seemore_bt"><a href="/franchise">Learn More</a></div>
              </div>
            </div>
          </div>
          <div className="company_section_3">
            <div className="row">
              <div className="col-md-6">
                <h3 className="home_text">Complete <span style={{color: '#f3f3f3'}}>Support</span></h3>
                <p className="lorem_text">
                  We provide comprehensive training programs, marketing support, and ongoing assistance to ensure your success. Our proven business model and simple menu make it easy to operate and maintain quality standards.
                </p>
                <div className="seemore_bt"><a href="/franchise">Get Started</a></div>
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
                  <img src="/images/pizza-6.jpg" alt="Quality Standards" />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="home_text">Quality <span style={{color: '#f3f3f3'}}>Standards</span></h3>
                <p className="lorem_text">
                  Maintain the highest quality standards with our proven recipes and cooking techniques. Fresh ingredients, authentic taste, and consistent quality are the pillars of our success. Join our growing family of successful franchisees.
                </p>
                <div className="seemore_bt"><a href="/franchise">Join Now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company section end */}

      {/* Client section start */}
      <div className="client_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="client_taital">Customers <span style={{color: '#2ea0f8'}}>Love Us</span></h3>
            </div>
          </div>
          <div className="client_section_2">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${clientSlide === 0 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img1.png" alt="Shiv Raman" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Shiv Raman</h3>
                          <p className="client_text">
                            Had a wonderful experience with Jus Momo. Kudos for excellent customer service. The assorted veg Momos Happy Box was delicious!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img2.png" alt="Priya Sharma" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Priya Sharma</h3>
                          <p className="client_text">
                            The best momos in town! The kurkure momos are absolutely delicious and the service is always prompt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${clientSlide === 1 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img1.png" alt="Rajesh Kumar" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Rajesh Kumar</h3>
                          <p className="client_text">
                            Working with Jus Momo has been a great experience. The support from the team is exceptional and the business model is sustainable.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img2.png" alt="Anita Singh" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Anita Singh</h3>
                          <p className="client_text">
                            Amazing authentic taste! The Mo Pav is my favorite - such a creative fusion. Highly recommend to all food lovers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${clientSlide === 2 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img1.png" alt="Vikram Gupta" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Vikram Gupta</h3>
                          <p className="client_text">
                            Fresh ingredients and authentic flavors make Jus Momo stand out. The steamed momos are perfect for healthy eating.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_taital_main">
                        <div className="client_left">
                          <div className="client_img">
                            <img src="/images/client-img2.png" alt="Meera Patel" />
                          </div>
                        </div>
                        <div className="client_right">
                          <h3 className="moark_text">Meera Patel</h3>
                          <p className="client_text">
                            The Momo Maggick is incredible! Perfect combination of noodles and momos. Great value for money and excellent taste.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#my_slider" role="button" onClick={prevClientSlide}>
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#my_slider" role="button" onClick={nextClientSlide}>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Client section end */}

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
                  <img src="/images/news-img.png" alt="Chef Tenzin" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="news_taita_main">
                  <h3 className="news_taital_1">Chef Tenzin - Master Chef</h3>
                  <p className="news_text">
                    With over 15 years of experience in Tibetan cuisine, Chef Tenzin brings authentic flavors and traditional techniques to every momo we serve. His passion for preserving the authentic taste of Tibet while innovating with modern fusion has made Jus Momo a beloved brand across India.
                  </p>
                  <div className="readmore_bt"><a href="/news">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News section end */}

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

      <Footer />
    </div>
  );
};

export default HomePage;