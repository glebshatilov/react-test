export interface MessageInterface {
  id: string,
  text: string,
  createdAt: string
  author?: {
    id: string
  }
}
