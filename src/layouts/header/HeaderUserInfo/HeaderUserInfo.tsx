import Button from '@mui/material/Button'

interface Props {
  data: {
    name: string,
    email: string
  }
}

function HeaderUserInfo({ data }: Props) {
  return (
    <div className="header-user-info">
      <Button>
        {data.name || data.email}
      </Button>
    </div>
  )
}

export default HeaderUserInfo
