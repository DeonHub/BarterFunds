import React from "react";

class MainFooter extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
      currentYear: currentYear,
    };
  }

  render() {
    const footerLinkStyle = {
      flex: '1 1 16.666%', // 100% / 6 = 16.666%
      boxSizing: 'border-box',
    };

    const iconStyle = {
      fontSize: '18px',
      display: 'inline-block',
      background: '#810020',
      color: '#fff',
      lineHeight: '1',
      padding: '8px 0',
      marginRight: '4px',
      borderRadius: '5px',
      textAlign: 'center',
      width: '36px',
      height: '36px',
      transition: '0.3s'
    };
    

    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Partnerships</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/developers">Developers</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/investors">Investors</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/partners">Partners</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/affiliates">Affiliates</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Legal Terms</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/payment-policy">
                      Payment Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/refund-policy">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/terms-of-use">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Help Center</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/support-center">Support</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/fees">Fees</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/features">Features</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Solutions</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/personal">Personal</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/business">Business</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/freelance">Freelance</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/organization">Organization</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="https://blog.barter-funds.com/">News/Blog</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/newsletter">Newsletter</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/security">Security</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/products">Products</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/services">Services</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/about">About us</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="text-center">
            <div className="credits">
              © 2019 - 2024 Barter Funds. All Rights Reserved. Powered by{" "}
              <a href="https://wa.me/233246580585">Currency Technologies</a>
            </div>
          </div>
          <div className="text-center social-links" style={footerLinkStyle}>
            <a href="https://twitter.com/barterfunds" className="twitter">
              <i className="fab fa-twitter-square" />
            </a>
            <a href="https://facebook.com/barterfunds" className="facebook">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="https://instagram.com/barterfunds" className="instagram">
              <i className="fab fa-instagram-square" />
            </a>
            <a href="https://youtube.com/barterfunds" className="youtube">
              <i className="fab fa-youtube-square" />
            </a>
            <a href="https://linkedin.com/company/barterfunds" className="linkedin">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://wa.me/message/ON5PHWAZTGKWI1" className="whatsapp">
              <i className="fa-brands fa-square-whatsapp" />
            </a>
            <a href="https://linkedin.com/barterfunds" className="tiktok">
              <i className="fa-brands fa-tiktok" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
