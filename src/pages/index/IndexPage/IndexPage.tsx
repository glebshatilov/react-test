import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'
import Container from '@mui/material/Container'

function IndexPage() {
  return (
    <DefaultLayout>
      <div className="index-page">
        <Container>
          <h1>Index</h1>
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
