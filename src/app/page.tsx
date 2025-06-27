'use client'

import ChatList from '@/components/chat/chat-list/chat-list'
import Chat from '@/components/chat/chat'
import UserProfile from '@/components/user/user-profile/user-profile'
import { useColorMode } from '@/components/theme/color-mode-context'
import { getTheme } from '@/components/theme/get-theme'

export default function Home() {
  const { mode } = useColorMode()
  const { palette } = getTheme(mode)

  return (
    <main
      className="flex justify-center items-start min-h-screen py-8 px-2"
      style={{
        background: palette.background.default,
      }}
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
        style={{
          background: palette.background.paper,
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.06)',
          borderRadius: 16,
        }}
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
        style={{
          background: palette.background.paper,
          color: "#fff",
          boxShadow: '0 4px 24px 0 rgba(0,0,0,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.09)',
          borderRadius: 16,
          minWidth: 0,
        }}
      >
        <Chat />
      </div>
    </main>
  )
}
