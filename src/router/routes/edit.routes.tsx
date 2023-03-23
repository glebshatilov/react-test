import EditPage from '@/pages/edit/Edit.page.js'
import EditProfilePage from '@/pages/edit/EditProfile.page.js'
import EditContactsPage from '@/pages/edit/EditContacts.page.js'
import EditAvatarPage from '@/pages/edit/EditAvatar.page.js'
import EditDeletePage from '@/pages/edit/EditDelete.page.js'

export default [
  {
    path: '/edit',
    element: <EditPage />,
    children: [
      {
        index: true,
        element: <EditProfilePage />
      },
      {
        path: 'avatar',
        element: <EditAvatarPage />
      },
      {
        path: 'contacts',
        element: <EditContactsPage />
      },
      {
        path: 'delete',
        element: <EditDeletePage />
      }
    ]
  }
]
