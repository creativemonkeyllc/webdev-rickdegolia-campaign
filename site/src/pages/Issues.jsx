import { Link } from 'react-router-dom'
import { ISSUES } from '../data/issues.js'

function Issues() {
  return (
    <>
      <section className="issues-hero">
        <p className="issues-kicker">Rick's Priorities for the Next Term</p>
        <h1>What Rick Will Fight For</h1>
      </section>

      <section className="page issues-card">
        <p className="issues-subheadline">
          These are not campaign promises. These are the priorities Rick has demonstrated through
          thirteen years of committed service to Atherton. Being a genuine representative, Rick
          believes that the singular job of an acting council member is to lead by reaching out to
          residents, listening to their concerns, and always representing their needs.
        </p>

        <ol className="issues-list">
          {ISSUES.map((issue) => (
            <li key={issue.slug}>
              <h2>{issue.title}</h2>
              <p>{issue.summary}</p>
              <Link className="issues-read-more" to={`/issues/${issue.slug}`}>
                Continue Reading {'>'}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

export default Issues
