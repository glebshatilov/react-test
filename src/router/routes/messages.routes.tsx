import MessagesPage from '@/pages/messages/Messages.page.js'
import ChatPage from '@/pages/messages/Chat.page.js'
import EmptyChatPage from '@/pages/messages/EmptyChat.page.js'

export default [
  {
    path: '/messages',
    element: <MessagesPage />,
    children: [
      {
        index: true,
        element: <EmptyChatPage />
      },
      {
        path: '/messages/dm/:userId',
        element: <ChatPage />
      }
    ]
  }
]
