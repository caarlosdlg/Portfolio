import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Thank you for visiting my portfolio! I'm always open to new
            opportunities and collaborations. Stay connected to see my journey
            and updates.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Stay updated on my journey" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          Based in Coahuila, México. Available for freelance projects.
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
