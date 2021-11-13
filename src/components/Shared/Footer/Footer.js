import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class='site-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p class='text-justify'>
                Wheels and Deals provide best quality cars.We appreciate you
                taking the time today to visit our web site. Our goal is to give
                you an interactive tour of our new and used inventory, as well
                as allow you to conveniently get a quote, schedule a service
                appointment, or apply for financing. The search for a luxury car
                is filled with high expectations. Undoubtedly, that has a lot to
                do with the vehicles you are considering, but at Motors, we
                think you should also have pretty high expectations for your
                dealership.
              </p>
            </div>

            <div class='col-xs-6 col-md-3'>
              <h6>We Provide </h6>
              <ul class='footer-links'>
                <li>Best Quality</li>
                <li>Best Service</li>
                <li>Genuine Product</li>
              </ul>
            </div>

            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul class='footer-links'>
                <li>
                  <Link to='/explore'>Explore</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright &copy; 2021 All Rights Reserved by
                <Link to='/'> Wheel and Deals</Link>
              </p>
            </div>

            <div class='col-md-4 col-sm-6 col-xs-12'>
              <ul class='social-icons'>
                <li>
                  <Link class='facebook' href='#'>
                    <i class='fa fa-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link class='twitter' href='#'>
                    <i class='fa fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link class='dribbble' href='#'>
                    <i class='fa fa-dribbble'></i>
                  </Link>
                </li>
                <li>
                  <Link class='linkedin' href='#'>
                    <i class='fa fa-linkedin'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
