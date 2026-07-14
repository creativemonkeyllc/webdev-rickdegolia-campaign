import { Navigate, useParams } from 'react-router-dom'
import { ISSUES } from '../data/issues.js'

function IssueArticle() {
  const { slug } = useParams()
  const issue = ISSUES.find((item) => item.slug === slug)

  if (!issue) {
    return <Navigate replace to="/issues" />
  }

  return (
    <>
      <section className="issues-hero">
        <p className="issues-kicker">Issue Brief</p>
        <h1>{issue.title}</h1>
      </section>

      <article className="page issue-article-card">
        <p>{issue.summary}</p>
      </article>
    </>
  )
}

export default IssueArticle
