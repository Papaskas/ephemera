'use client'

import ChatList from '@/components/chat/chat-list/chat-list'
import Chat from '@/components/chat/chat'
import UserProfile from '@/components/user/user-profile/user-profile'

export default function Home() {

  return (
    <main
      className="flex justify-center items-start min-h-screen py-8 px-2"
    >
      <div
        className="
          flex flex-col
          w-full max-w-xs
          mr-6
          rounded-2xl
          shadow-lg
          p-4
          gap-4
          min-h-[500px]
        "
      >
        <UserProfile />
        <ChatList
          chats={[
            { id: '1', title: "Ivan", lastMessage: null },
            { id: '2', title: 'Alex', lastMessage: 'Hello' }
          ]}
        />
      </div>

      <div
        className="
          flex-1
          rounded-2xl
          shadow-xl
          p-6
          min-h-[500px]
          flex
          flex-col
          justify-start
          ml-0
        "
      >
        <Chat />
      </div>
    </main>
  )
}
