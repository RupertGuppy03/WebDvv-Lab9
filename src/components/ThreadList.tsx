import reactLogo from '../assets/react.svg';

const ThreadList = () => {
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
  );
};

export default ThreadList;
