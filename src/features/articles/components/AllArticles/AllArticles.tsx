import useApiGetAllArticles from '../../hooksApi/useApiGetAllArticles'
import ArticleList from '../ArticleList/ArticleList'

function AllArticles() {
  const { data, loading, error } = useApiGetAllArticles()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div>
      <ArticleList list={data.articles.data} />
    </div>
  )
}

export default AllArticles
