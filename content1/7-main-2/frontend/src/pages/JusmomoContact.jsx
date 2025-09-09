import React, { useEffect } from 'react';

const JusmomoContact = () => {
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
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item active"><a href="/contact" className="nav-link">Contact</a></li>
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
                <span>Contact</span>
              </p>
              <h1 className="mb-0 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-map-o"></span>
                  </div>
                  <p><span>Address:</span> Mumbai, India</p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                  <div className="icon">
                    <span className="icon-mobile-phone"></span>
                  </div>
                  <p><span>Phone:</span> <a href="tel://+919876543210">+91 9876543210</a></p>
                </div>
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-envelope-o"></span>
                  </div>
                  <p><span>Email:</span> <a href="mailto:info@jusmomo.com">info@jusmomo.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <h2 className="text-center">Get in Touch</h2>
              <form action="#" className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our <span style={{color: '#dc2626'}}>Locations</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Phoenix MarketCity</h2>
                  <span className="price"><sup></sup> <span className="number">Kurla West, Mumbai</span></span>
                  <ul className="pricing-text mb-5">
                    <li><span className="fa fa-check mr-2"></span>Phone: +91 9876543210</li>
                    <li><span className="fa fa-check mr-2"></span>Hours: 10:00 AM - 10:00 PM</li>
                    <li><span className="fa fa-check mr-2"></span>All Varieties Available</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-2 py-3">Get Directions</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Palladium Mall</h2>
                  <span className="price"><sup></sup> <span className="number">Lower Parel, Mumbai</span></span>
                  <ul className="pricing-text mb-5">
                    <li><span className="fa fa-check mr-2"></span>Phone: +91 9876543211</li>
                    <li><span className="fa fa-check mr-2"></span>Hours: 10:00 AM - 10:00 PM</li>
                    <li><span className="fa fa-check mr-2"></span>Franchise Available</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-2 py-3">Get Directions</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Inorbit Mall</h2>
                  <span className="price"><sup></sup> <span className="number">Malad West, Mumbai</span></span>
                  <ul className="pricing-text mb-5">
                    <li><span className="fa fa-check mr-2"></span>Phone: +91 9876543212</li>
                    <li><span className="fa fa-check mr-2"></span>Hours: 10:00 AM - 10:00 PM</li>
                    <li><span className="fa fa-check mr-2"></span>Home Delivery Available</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-2 py-3">Get Directions</a>
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

export default JusmomoContact;