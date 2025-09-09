import React, { useEffect } from 'react';

const JusmomoMenu = () => {
  useEffect(() => {
    // Load jQuery and other dependencies
    const script1 = document.createElement('script');
    script1.src = '/js/jquery.min.js';
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = '/js/bootstrap.min.js';
      document.body.appendChild(script2);

      const script3 = document.createElement('script');
      script3.src = '/js/main.js';
      document.body.appendChild(script3);
    };

    return () => {
      const scripts = document.querySelectorAll('script[src^="/js/"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              color: 'white',
              padding: '8px 16px',
              fontWeight: 'bold',
              position: 'relative',
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)',
              textAlign: 'center',
              lineHeight: '1.2'
            }}>
              <div style={{fontSize: '18px'}}>JUS</div>
              <div style={{fontSize: '24px'}}>MOMO</div>
              <div style={{fontSize: '12px'}}>est</div>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item active"><a href="/menu" className="nav-link">Menu</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-wrap hero-bread" style={{backgroundImage: 'url(/images/bg_1.jpg)'}}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2"><a href="/">Home</a></span> 
                <span>Menu</span>
              </p>
              <h1 className="mb-0 bread">Our Menu</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Discover our <span style={{color: '#dc2626'}}>Menu</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 nav-link-wrap mb-5">
              <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main Dish</a>
                <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
                <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
              </div>
            </div>
            <div className="col-md-12 d-flex align-items-center">
              <div className="tab-content ftco-animate" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png)'}}></a>
                        <div className="text">
                          <h3><a href="#">Steamed Momos</a></h3>
                          <p>Delicious, Mouthwatering Handcrafted Momos Filled With Juicy Veg and Non-Veg Filling</p>
                          <p className="price"><span>₹120</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png)'}}></a>
                        <div className="text">
                          <h3><a href="#">Kurkure Momos</a></h3>
                          <p>Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight</p>
                          <p className="price"><span>₹150</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png)'}}></a>
                        <div className="text">
                          <h3><a href="#">Mo Pav</a></h3>
                          <p>Jus Momo's Signature Crunchy Kurkure Momo Placed Inside a Soft Pav Bun</p>
                          <p className="price"><span>₹80</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png)'}}></a>
                        <div className="text">
                          <h3><a href="#">Momo Maggick</a></h3>
                          <p>Piping Hot Maggi Noodles Served With Our Saucy Momos in a Choice of 4 Tantalizing Flavours</p>
                          <p className="price"><span>₹180</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/pizza-5.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Veg Momos</a></h3>
                          <p>Fresh vegetable filling with aromatic spices wrapped in soft dough</p>
                          <p className="price"><span>₹100</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/pizza-6.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Cheese Momos</a></h3>
                          <p>Delicious momos filled with melted cheese and herbs</p>
                          <p className="price"><span>₹140</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/drink-1.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Masala Tea</a></h3>
                          <p>Traditional spiced tea perfect with momos</p>
                          <p className="price"><span>₹30</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/drink-2.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Momo Soup</a></h3>
                          <p>Hot and tangy soup served with momos</p>
                          <p className="price"><span>₹50</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/drink-3.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Fresh Lime Soda</a></h3>
                          <p>Refreshing lime soda with mint</p>
                          <p className="price"><span>₹40</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/dessert-1.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Sweet Momos</a></h3>
                          <p>Sweet momos filled with jaggery and nuts</p>
                          <p className="price"><span>₹90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(/images/dessert-2.jpg)'}}></a>
                        <div className="text">
                          <h3><a href="#">Chocolate Momos</a></h3>
                          <p>Steamed momos with chocolate filling</p>
                          <p className="price"><span>₹110</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Jus Momo</h2>
                <p>Authentic handcrafted Tibetan Momos made with love and the freshest ingredients.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-youtube-play"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-2 d-block">Home</a></li>
                  <li><a href="/menu" className="py-2 d-block">Menu</a></li>
                  <li><a href="/about" className="py-2 d-block">About</a></li>
                  <li><a href="/contact" className="py-2 d-block">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contact Info</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">Mumbai, India</span></li>
                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 9876543210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@jusmomo.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Opening Hours</h2>
                <div className="opening-hours">
                  <h4>Monday - Sunday:</h4>
                  <p className="pl-3">
                    <span>10:00 AM - 10:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>© 2024 Jus Momo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JusmomoMenu;