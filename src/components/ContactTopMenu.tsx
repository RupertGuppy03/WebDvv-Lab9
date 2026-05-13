const ContactTopMenu = () => (
  <header className="contact-top-menu">
    <form>
      <input maxLength={20} />
      <input type="submit" value="Search Contact" />
    </form>
    <button>Add Contact</button>
  </header>
);

export default ContactTopMenu;
