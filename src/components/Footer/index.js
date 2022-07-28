import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const Footer = () => {
  return (
    <div className='footer-main-block'>
      <footer className="footer-section">
        <div className='row newsletter-main-block'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <div className="newslatter-item">
              <h5>Join Our Newsletter Now</h5>
              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Enter Your Mail" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-item">
                <h5>Shop</h5>
                <ul>
                  <li>Gift cards</li>
                  <li>Sitemap</li>
                  <li>Etsy blog</li>
                  <li>Etsy United Kingdom</li>
                  <li>Etsy blog</li>
                  <li>Etsy Canada</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-item">
                <h5>Sell</h5>
                <ul>
                  <li>
                    <Link to='/'>Sell on Etsy</Link>
                  </li>
                  <li>
                    <Link to='/'>Teams</Link>
                  </li>
                  <li>
                    <Link to='/'>Forums</Link>
                  </li>
                  <li>
                    <Link to='/'>Affiliates</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-item">
                <h5>About</h5>
                <ul>
                  <li>
                    <Link to='/'>Policies</Link>
                  </li>
                  <li>
                    <Link to='/'>Investors</Link>
                  </li>
                  <li>
                    <Link to='/'>Careers</Link>
                  </li>
                  <li>
                    <Link to='/'>Press</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-item">
                <h5>Help</h5>
                <ul>
                  <li>
                    <Link to='/'>Help Center</Link>
                  </li>
                  <li>
                    <Link to='/'>Trust and safety</Link>
                  </li>
                  <li>
                    <Link to='/'>Privacy settings</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <a href="#">
                  <Instagram size={20} style={{ color: '#FFFF' }} />
                </a>
                <a href="#">
                  <Facebook size={20} style={{ color: '#FFFF' }} />
                </a>
                <a href="#">
                  <Twitter size={20} style={{ color: '#FFFF' }} />
                </a>
                <a href="#">
                  <Youtube size={20} style={{ color: '#FFFF' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-reserved">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://therichpost.com" target="_blank">
                    Ecommerce
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer