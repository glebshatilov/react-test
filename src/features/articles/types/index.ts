export interface Article {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  author: {
    id: string
    email: string
    name: string
    avatar: {
      src: string
    }
    username: string
    createdAt: string
  }
}
