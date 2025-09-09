import React, { useEffect } from 'react';

const JusmomoAbout = () => {
  useEffect(() => {
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
              <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>
              <li className="nav-item active"><a href="/about" className="nav-link">About</a></li>
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
                <span>About</span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="ftco-about d-md-flex">
        <div className="one-half img" style={{backgroundImage: 'url(https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png)'}}></div>
        <div className="one-half ftco-animate">
          <div className="overlap">
            <div className="heading-section ftco-animate">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Story</h2>
            </div>
            <div>
              <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>
                'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages
              </p>
              <p style={{marginBottom: '20px'}}>
                offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs using the freshest of ingredients in both veg and non veg to consumers tastes and preferences.
              </p>
              <p style={{marginBottom: '20px'}}>
                Launched in 2021, <strong style={{color: '#dc2626'}}>Jus Momo offers excellent opportunities for franchise owners by providing affordable investment options with good ROI</strong> and simple menu with a variety of choices that don't require employees hired for any particular abilities.
              </p>
              <p style={{marginBottom: '20px'}}>
                Jus Momo not only provides support and assistance to franchisees, including staff training to help them establish the store but also does not require them to fulfil any financial requirement or pay royalties year after year.
              </p>
              <p style={{color: '#dc2626', fontWeight: 'bold', fontSize: '18px'}}>
                This is one of India's best food franchises under ₹2 lakhs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our <span style={{color: '#dc2626'}}>Services</span></h2>
              <p>What makes Jus Momo special</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-diet"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Healthy Food</h3>
                  <p>Fresh ingredients and healthy cooking methods ensure nutritious and delicious momos.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-bicycle"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Fast Delivery</h3>
                  <p>Quick and reliable delivery service to bring fresh momos right to your doorstep.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-pizza-1"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Original Recipes</h3>
                  <p>Authentic Tibetan recipes passed down through generations, perfected for modern taste.</p>
                </div>
              </div>      
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="ftco-section ftco-counter img" style={{backgroundImage: 'url(/images/bg_2.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section heading-section-white ftco-animate text-center">
              <h2 className="mb-4">Franchise <span style={{color: '#FFC107'}}>Opportunity</span></h2>
              <p>Join India's best food franchise under ₹2 lakhs</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon"><span className="flaticon-pizza-1"></span></div>
                      <strong className="number" data-number="200000">₹2,00,000</strong>
                      <span>Investment</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon"><span className="flaticon-medal"></span></div>
                      <strong className="number" data-number="0">0%</strong>
                      <span>Royalty</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon"><span className="flaticon-laugh"></span></div>
                      <strong className="number" data-number="50">50+</strong>
                      <span>Outlets</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon"><span className="flaticon-chef"></span></div>
                      <strong className="number" data-number="100">100%</strong>
                      <span>Support</span>
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

export default JusmomoAbout;