import React, { useEffect } from 'react';

const JusmomoHome = () => {
  useEffect(() => {
    // Load essential scripts only - removing stellar and other problematic ones
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load scripts sequentially to avoid conflicts
    const loadScripts = async () => {
      try {
        await loadScript('/js/jquery.min.js');
        await loadScript('/js/bootstrap.min.js');
        await loadScript('/js/owl.carousel.min.js');
        // Skip problematic scripts like stellar and main.js that cause errors
        console.log('Essential scripts loaded successfully');
      } catch (error) {
        console.warn('Some scripts failed to load:', error);
      }
    };

    loadScripts();

    return () => {
      // Cleanup scripts on unmount
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
              <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Jusmomo content */}
      <section className="home-slider owl-carousel img">
        <div className="slider-item" style={{backgroundImage: 'url(/images/bg_1.jpg)'}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
              <div className="col-md-8 col-sm-12 ftco-animate">
                <span className="subheading">Yummy delicious authentic</span>
                <h1 className="mb-4">Tibetan Momos</h1>
                <p className="mb-4 mb-md-5">Double bite sized parcels with a healthy veg and non veg filling</p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Start Shopping Now</a>
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2">View Menu</a>
                </p>
              </div>
              <div className="col-md-4 ftco-animate">
                <img src="https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png" className="img-fluid" alt="Steamed Momos" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item" style={{backgroundImage: 'url(/images/bg_3.jpg)'}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
              <div className="col-md-8 col-sm-12 order-md-last ftco-animate">
                <span className="subheading">Crunchy</span>
                <h1 className="mb-4">Kurkure Momos</h1>
                <p className="mb-4 mb-md-5">Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight</p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2">View Menu</a>
                </p>
              </div>
              <div className="col-md-4 ftco-animate">
                <img src="https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png" className="img-fluid" alt="Kurkure Momos" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item" style={{backgroundImage: 'url(/images/bg_1.jpg)'}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
              <div className="col-md-7 col-sm-12 text-center ftco-animate">
                <span className="subheading">Welcome</span>
                <h1 className="mb-4">We cooked your desired Momo Recipe</h1>
                <p className="mb-4 mb-md-5">Authentic handcrafted Tibetan Momos made with love and the freshest ingredients.</p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2">View Menu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="ftco-intro">
        <div className="container-wrap">
          <div className="wrap d-md-flex" style={{background: 'linear-gradient(90deg, #FFC107 0%, #FFEB3B 100%)'}}>
            <div className="info">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="icon"><span className="icon-phone"></span></div>
                  <div className="text">
                    <h3>+91 9876543210</h3>
                    <p>Authentic Handcrafted Tibetan Momos</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="icon"><span className="icon-my_location"></span></div>
                  <div className="text">
                    <h3>Mumbai, India</h3>
                    <p>Multiple Outlets Across City</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="icon"><span className="icon-clock-o"></span></div>
                  <div className="text">
                    <h3>Open Daily</h3>
                    <p>10:00am - 10:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-md-flex pl-md-5 p-4 align-items-center">
              <ul className="social-icon">
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-youtube-play"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="ftco-about d-md-flex">
        <div className="one-half img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png)'}}></div>
        <div className="one-half ftco-animate">
          <div className="heading-section ftco-animate">
            <h2 className="mb-4">Welcome to <span className="flaticon-pizza">Jus Momo</span></h2>
          </div>
          <div>
            <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px'}}>
              'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages
            </p>
            <p>offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs using the freshest of ingredients in both veg and non veg to consumers tastes and preferences.</p>
            <p>Launched in 2021, <strong style={{color: '#dc2626'}}>Jus Momo offers excellent opportunities for franchise owners by providing affordable investment options with good ROI</strong> and simple menu with a variety of choices.</p>
            <p><strong style={{color: '#dc2626'}}>This is one of India's best food franchises under ₹2 lakhs.</strong></p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Some of our <span style={{color: '#dc2626'}}>exclusive items</span></h2>
              <p>Discover our delicious range of authentic Tibetan momos</p>
            </div>
          </div>
        </div>
        <div className="container-wrap">
          <div className="row no-gutters d-flex">
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Steamed Momos</a></h3>
                  <p>Delicious, Mouthwatering Handcrafted Momos Filled With Juicy Veg and Non-Veg Filling</p>
                  <p className="price"><span>₹120</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Kurkure Momos</a></h3>
                  <p>Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight</p>
                  <p className="price"><span>₹150</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Mo Pav</a></h3>
                  <p>Jus Momo's Signature Crunchy Kurkure Momo Placed Inside a Soft Pav Bun</p>
                  <p className="price"><span>₹80</span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Momo Maggick</a></h3>
                  <p>Piping Hot Maggi Noodles Served With Our Saucy Momos in a Choice of 4 Tantalizing Flavours</p>
                  <p className="price"><span>₹180</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(/images/pizza-5.jpg)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Veg Momos</a></h3>
                  <p>Fresh vegetable filling with aromatic spices wrapped in soft dough</p>
                  <p className="price"><span>₹100</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a href="#" className="img" style={{backgroundImage: 'url(/images/pizza-6.jpg)'}}></a>
                <div className="text p-4">
                  <h3><a href="#">Cheese Momos</a></h3>
                  <p>Delicious momos filled with melted cheese and herbs</p>
                  <p className="price"><span>₹140</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ftco-section testimony-section" style={{backgroundImage: 'url(/images/bg_1.jpg)'}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4" style={{color: 'white'}}>Happy Customers</h2>
              <p style={{color: 'white'}}>What our customers say about Jus Momo</p>
            </div>
          </div>
          <div className="row ftco-animate justify-content-center">
            <div className="col-md-8">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{backgroundImage: 'url(/images/person_1.jpg)'}}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5 pl-4 line">Had a wonderful experience with Jus Momo. Kudos to Mr.Baskar for his excellent customer service. I went for an assorted veg Momos Happy Box. Worth the money!</p>
                      <p className="name">Shiv Raman</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{backgroundImage: 'url(/images/person_2.jpg)'}}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5 pl-4 line">The best momos in town! The kurkure momos are absolutely delicious and the service is always prompt. Highly recommended!</p>
                      <p className="name">Priya Sharma</p>
                      <span className="position">Regular Customer</span>
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

export default JusmomoHome;