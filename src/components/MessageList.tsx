import reactLogo from '../assets/react.svg';

const MessageList = () => (
  <ul className="message-list">
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="Avatar" />
      <p className="message">Hello React!</p>
    </li>
    <li>
      <img src={reactLogo} className="avatar" alt="Avatar" />
      <p className="message">Hello React!</p>
    </li>
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="Avatar" />
      <p className="message">
        Welcome to learning React web app development. What you are seeing now
        is the chat application from this book.
      </p>
    </li>
    <li>
      <img src={reactLogo} className="avatar" alt="Avatar" />
      <p className="message">Does this app have a name?</p>
    </li>
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="Avatar" />
      <p className="message">Yes, it’s called “I Chat”.</p>
    </li>
  </ul>
);

export default MessageList;
