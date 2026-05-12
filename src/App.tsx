import { useState } from 'react';
import reactLogo from './assets/react.svg';
import contactIcon from './assets/icon-contact.svg';
import messageIcon from './assets/icon-message.svg';
import menuIcon from './assets/icon-menu.svg';
import './App.css';

/*
  convert the hard-coded ContactsPane to list rendering
*/

const ContactsPane = () => {
  const contacts = [
    {
      id: 1,
      name: 'Harry',
    },
    {
      id: 2,
      name: 'Dia',
    },
    {
      id: 3,
      name: 'Alice',
      active: true,
    },
    {
      id: 4,
      name: 'Patrick',
    },
    {
      id: 5,
      name: 'Krabs',
    },
    {
      id: 6,
      name: 'Sandy',
    },
  ];

  return (
    <>
      <header className="contact-top-menu">
        <form>
          <input maxLength={20} />
          <input type="submit" value="Search Contact" />
        </form>
        <button>Add Contact</button>
      </header>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className={contact.active && 'active'}>
            <a href="#">
              <img src={reactLogo} className="avatar" alt="avatar" />
              <div className="contact-name">{contact.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

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

const MessagesPane = () => (
  <>
    <header className="message-top-menu">
      <h1>Jim</h1>
      <button>
        <img src={menuIcon} alt="Message Menu" />
      </button>
    </header>
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
    <form className="compose-message">
      <textarea placeholder="Please enter a message…" />
      <input type="submit" value="Send" />
    </form>
  </>
);

const ThreadsPane = () => {
  const threads = [
    {
      id: 1,
      contactName: 'Alice',
      updateTime: '2025-11-04',
      latestMessage:
        'The theme of the book is the design and development practices of modern React web applications.',
    },
    {
      id: 2,
      contactName: 'Jim',
      updateTime: '2025-11-03',
      latestMessage: 'Yes, the name of the app is WhatsChat',
      active: true,
    },

    {
      id: 3,
      contactName: 'Harry',
      updateTime: '2025-11-02',
      latestMessage: 'Modern React Web app design',
    },
    {
      id: 4,
      contactName: 'Dia',
      updateTime: '2025-11-02',
      latestMessage: "let's chat",
    },
    {
      id: 5,
      contactName: 'Patrick',
      updateTime: '2025-10-31',
      latestMessage: 'no title',
    },
  ];

  return (
    <>
      <header className="thread-top-menu">
        <form>
          <input maxLength={20} />
          <input type="submit" value="search thread" />
        </form>
        <button>new thread</button>
      </header>
      <ul className="thread-list">
        {threads.map((thread) => (
          <li key={thread.id} className={thread.active && 'active'}>
            <a href="#">
              <img src={reactLogo} className="avatar" alt="avatar" />
              <div className="thread">
                <span className="contact-name">{thread.contactName}</span>
                <span className="update-time">{thread.updateTime}</span>
                <span className="latest-message">{thread.latestMessage}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

function App() {
  const [activeView, setActiveView] = useState('chat');

  return (
    <div className="root">
      <nav>
        <img src={reactLogo} className="my-avatar" alt="my avatar" />
        <ul className="top-nav">
          <li className={activeView === 'chat' ? 'active' : undefined}>
            <a href="#" onClick={() => setActiveView('chat')}>
              <img src={messageIcon} />
            </a>
          </li>
          <li className={activeView === 'contact' ? 'active' : undefined}>
            <a href="#" onClick={() => setActiveView('contact')}>
              <img src={contactIcon} />
            </a>
          </li>
        </ul>
      </nav>

      {/*} <aside>{activeView === 'chat' && <ThreadsPane />}</aside>*/}
      <aside>
        {activeView === 'chat' ? <ThreadsPane /> : <ContactsPane />}
      </aside>
      <main>
        {activeView === 'chat' ? <MessagesPane /> : <ContactDetail />}
      </main>
    </div>
  );
}

/**
 *  Conditional Rendering examples:
 *  if..then: {activeView === 'chat' && <ThreadsPane />}</aside>
 *  if..then..else: <li className={activeView === 'chat' ? 'active' : undefined}>
 *
 *   Rendering list exampe:
 *   threads.map()
 *
 */
export default App;
