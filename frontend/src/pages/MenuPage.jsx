import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { momoProducts, galleryImages } from '../data/mockData';

const MenuPage = () => {
  return (
    <div>
      <Header />
      
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
                {galleryImages.map((item, index) => (
                  <div key={item.id} className="col-md-4">
                    <div className={`container_main ${index === 1 ? 'margin_top_30' : ''}`}>
                      <img src={item.url} alt={item.alt} className="image" />
                      <div className="overlay">
                        <div className="text">
                          <h4 className="jony_text">{item.title}</h4>
                          <p className="some_text">{item.description}</p>
                          <div className="btn_main">
                            <div className="buy_bt"><a href="#">Order Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Menu Items */}
          <div className="design_section_2">
            <div className="design_section_main">
              <div className="row">
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/pizza-4.jpg" alt="Spicy Momos" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Spicy Momos</h4>
                        <p className="some_text">For those who love heat! Our spicy momos with special chili sauce will set your taste buds on fire.</p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/pizza-5.jpg" alt="Cheese Momos" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Cheese Momos</h4>
                        <p className="some_text">Rich and creamy cheese-filled momos that melt in your mouth. Perfect for cheese lovers!</p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container_main margin_top_30">
                    <img src="/images/pizza-6.jpg" alt="Mixed Platter" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Mixed Platter</h4>
                        <p className="some_text">Can't decide? Try our mixed platter with a variety of steamed, fried, and fusion momos.</p>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Order Now</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="/images/drink-1.jpg" alt="Momo Combo" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <h4 className="jony_text">Momo Combo</h4>
                        <p className="some_text">Complete meal with momos, soup, and beverage. Perfect value for money option!</p>
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
        </div>
      </div>
      {/* Design section end */}

      <Footer />
    </div>
  );
};

export default MenuPage;