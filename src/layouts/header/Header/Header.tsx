import HeaderUser from '../HeaderUser/HeaderUser.js'
import HeaderLogo from '../HeaderLogo/HeaderLogo.js'
import HeaderNav from '../HeaderNav/HeaderNav.js'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import './Header.scss'

function Header() {
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
            <HeaderUser />
          </div>
        </Stack>
      </Container>
    </div>
  )
}

export default Header
