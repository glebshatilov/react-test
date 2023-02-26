import Container from '@mui/material/Container'
import { EditNav } from '@/features/edit'
import { PageLayout } from '@primer/react'
import { Outlet } from 'react-router-dom'

function EditPage() {
  return (
    <div className="ProfileMainPage">
      <Container sx={{ paddingY: 4 }}>
        <PageLayout padding="none">
          <PageLayout.Content>
            <Outlet />
          </PageLayout.Content>
          <PageLayout.Pane sticky offsetHeader={16} sx={{ alignSelf: 'flex-start' }}>
            <EditNav />
          </PageLayout.Pane>
        </PageLayout>
      </Container>
    </div>
  )
}

export default EditPage
