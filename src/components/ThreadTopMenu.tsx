const ThreadTopMenu = () => (
  <header className="thread-top-menu">
    <form>
      <input maxLength={20} />
      <input type="submit" value="search thread" />
    </form>
    <button>new thread</button>
  </header>
);

export default ThreadTopMenu;
