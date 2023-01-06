import HeaderUser from './HeaderUser/HeaderUser.js'
import HeaderLogo from './HeaderLogo/HeaderLogo.js'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <div className="header__logo">
            <HeaderLogo />
          </div>
          <div className="header__user">
            <HeaderUser />
          </div>
        </Stack>
      </Container>
    </div>
  )
}

export default Header
