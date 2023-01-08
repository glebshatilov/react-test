import useAuth from '@/hooks/useAuth.js'
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo.js'
import HeaderAuthModal from '@/components/layouts/Header/HeaderAuthModal/HeaderAuthModal.js'

function HeaderUser() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return (
      <div className="header-user">
        <HeaderUserInfo />
      </div>
    )
  }

  return (
    <div className="header-user">
      <HeaderAuthModal />
    </div>
  )
}

export default HeaderUser
