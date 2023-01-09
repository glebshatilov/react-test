import './Header.scss'
import HeaderUser from '../HeaderUser/HeaderUser.js'
import HeaderLogo from '../HeaderLogo/HeaderLogo.js'
import HeaderNav from '../HeaderNav/HeaderNav.js'
import HeaderSignInButton from '../HeaderSignInButton/HeaderSignInButton.js'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import useAuth from '@/hooks/useAuth.js'

function Header() {
  const { isSignedIn } = useAuth()
  return (
    <div className="header">
      <Container sx={{ marginY: 'auto' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div className="header__left">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              <HeaderLogo />
              <HeaderNav />
            </Stack>
          </div>
          <div className="header__right">
            {isSignedIn
              ? <HeaderUser />
              : <HeaderSignInButton />}
          </div>
        </Stack>
      </Container>
    </div>
  )
}

export default Header
