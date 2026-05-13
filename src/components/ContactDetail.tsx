import reactLogo from '../assets/react.svg';

const ContactDetail = () => (
  <>
    <div className="contact-detail">
      <img src={reactLogo} className="avatar" alt="头像" />
      <div className="contact-name">Alice</div>
    </div>
    <div className="contact-actions">
      <button className="primary-button">Send Message</button>
      <button className="secondary-button">Update Conact</button>
      <button className="secondary-button">Delete Contact</button>
    </div>
  </>
);

export default ContactDetail;
