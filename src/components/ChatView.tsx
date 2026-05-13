import ThreadsPane from './ThreadsPane';
import MessagesPane from './MessagesPane';

const ChatView = () => (
  <>
    <aside>
      <ThreadsPane />
    </aside>
    <main>
      <MessagesPane />
    </main>
  </>
);

export default ChatView;
