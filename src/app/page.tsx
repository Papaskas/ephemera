import ChatList from '@/components/chat/chat-list/chat-list';
import Chat from '@/components/chat/chat';
import UserProfile from '@/components/user/user-profile/user-profile';

export default function Home() {

  return (
    <main className="flex mx-auto container h-screen">
      <div className="flex-[1] pr-4 bg-amber-200 overflow-y-auto flex flex-col">

        <UserProfile />

        <ChatList chats={[{ id: '1', title: "Ivan", lastMessage: null }, { id: '2', title: 'Alex', lastMessage: 'Hello' }]} />
      </div>

      <div className="flex-[3] bg-amber-900 overflow-y-auto">
        <Chat />
      </div>
    </main>
  );
}
