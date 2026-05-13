import ContactsPane from './ContactsPane';
import ContactDetail from './ContactDetail';

const ContactView = () => (
  <>
    <aside>
      <ContactsPane />
    </aside>
    <main>
      <ContactDetail />
    </main>
  </>
);

export default ContactView;
