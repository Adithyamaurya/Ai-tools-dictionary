export interface Tool {
  id: string
  name: string
  shortDescription: string
  description: string
  categories: string[]
  url: string
  free: boolean
  popular?: boolean
}
