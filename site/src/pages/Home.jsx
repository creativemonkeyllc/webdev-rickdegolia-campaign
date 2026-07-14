import { Link } from 'react-router-dom'

const HOME_FEATURES = [
  {
    id: 'priorities',
    label: 'Priorities',
    title: 'What Rick Will Fight For',
    description:
      'Review the six issues shaping this election, from fiscal discipline and housing to local control and public safety.',
    to: '/issues',
    cta: 'View Issues',
  },
  {
    id: 'record',
    label: 'Record',
    title: 'A Proven Record of Service',
    description:
      "See Rick's leadership history, key accomplishments, and the experience he brings to the next term.",
    to: '/about#record',
    cta: 'View Record',
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Community Endorsements',
    description:
      "Hear from local leaders and residents who trust Rick's balanced judgment and commitment to resident-focused governance.",
    to: '/endorsers',
    cta: 'See Endorsements',
  },
  {
    id: 'about',
    label: 'About',
    title: 'Meet Rick DeGolia',
    description:
      'Learn about Rick\'s background, his approach to civic leadership, and why he has stayed focused on Atherton residents for more than a decade.',
    to: '/about#about-rick',
    cta: 'About Rick',
  },
]

const HOME_STAKES = [
  {
    title: 'Housing and Local Character',
    description:
      'State housing pressure is accelerating. Atherton needs experienced leadership that protects local character while navigating legal requirements with discipline.',
    to: '/issues/housing-protecting-athertons-character',
  },
  {
    title: 'Fiscal Stewardship',
    description:
      'Budget decisions made now affect services, reserves, and long-term liabilities for years to come. A measured approach matters.',
    to: '/issues/fiscal-discipline-long-term-solvency',
  },
  {
    title: 'Resident-Driven Leadership',
    description:
      'Atherton works best when residents are heard early and often. Preserving that decision-making culture is central to the next term.',
    to: '/issues/resident-driven-governance',
  },
]

function Home() {
  return (
    <>
      <section className="home-hero">
        <h1>He knows how to listen, and he knows how to lead.</h1>
        <p>
          Thirteen years of steady, accountable leadership. The experience Atherton needs for
          what comes next.
        </p>
        <ul className="home-tags" aria-label="Campaign highlights">
          <li>3 terms as mayor</li>
          <li>13 years of city council</li>
          <li>fiscal responsibility</li>
          <li>local control</li>
        </ul>
      </section>

      <section className="home-sections" aria-label="Key campaign sections">
        <div className="home-guide" role="list" aria-label="Campaign guide">
          <header className="home-guide-header">
            <p className="home-guide-kicker">Campaign Guide</p>
          </header>

          {HOME_FEATURES.map((item, index) => (
            <article className="home-guide-row" key={item.id} role="listitem">
              <p className="home-guide-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="home-guide-main">
                <p className="home-section-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="home-guide-action">
                <Link className="home-section-link" to={item.to}>
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-stakes" aria-labelledby="home-stakes-heading">
        <div className="home-stakes-layout">
          <div className="home-stakes-copy">
            <p className="home-stakes-kicker">Why This Election Matters</p>
            <h2 id="home-stakes-heading">Atherton's Next Decisions Will Shape the Next Decade</h2>
            <p className="home-stakes-intro">
              The next council term will not be routine. Housing mandates, long-term fiscal
              planning, and resident-first governance will define how Atherton protects its
              character while preparing responsibly for what comes next.
            </p>

            <div className="home-stakes-links" aria-label="Learn more links">
              <Link className="home-section-link" to="/issues">
                Explore Priorities
              </Link>
              <Link className="home-section-link" to="/about#record">
                Review Track Record
              </Link>
            </div>
          </div>

          <ol className="home-stakes-list" role="list" aria-label="Election stakes">
            {HOME_STAKES.map((item) => (
              <li className="home-stakes-item" key={item.title} role="listitem">
                <Link className="home-stakes-item-link" to={item.to}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default Home
