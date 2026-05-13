import reactLogo from '../assets/react.svg';

const ContactList = () => {
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
  );
};

export default ContactList;
