import { Link } from 'react-router-dom'
import { ISSUES } from '../data/issues.js'

const HOME_STAKES = [
  {
    title: 'Housing and Local Character',
    description:
      'State housing pressure is accelerating. Atherton needs experienced leadership that protects local character while navigating legal requirements with discipline and a local focus.',
    to: '/issues/housing-protecting-athertons-character',
  },
  {
    title: 'Fiscal Stewardship',
    description:
      'Budget decisions made now affect services, reserves, and long-term liabilities for years to come. A measured approach matters. Atherton has had a balanced budget for the past 13 years due to very careful management and conservative policies.',
    to: '/issues/fiscal-discipline-long-term-solvency',
  },
  {
    title: 'Resident-Driven Leadership',
    description:
      'Atherton works best when residents are heard early and often. Preserving that decision-making culture is central to the next term.',
    to: '/issues/resident-driven-governance',
  },
]

const RECORD_HIGHLIGHTS = [
  {
    title: 'Town Center Delivered',
    detail:
      'Helped guide Atherton\'s Town Center project through planning and final delivery on budget and on time.',
  },
  {
    title: 'First Caltrain Quiet Zone',
    detail:
      'Led efforts that established Atherton\'s first Caltrain Quiet Zone and later expanded it to an additional crossing.',
  },
  {
    title: 'Public Safety Strengthened',
    detail:
      'Supported a fully staffed local police department and modern facilities that help recruit and retain officers.',
  },
  {
    title: 'Fiscal Discipline',
    detail:
      'Advanced conservative budgeting, reduced long-term liabilities, and invested in core projects responsibly.',
  },
  {
    title: 'Atherton Community Library',
    detail:
      'Chaired key planning work that helped shape Atherton\'s new community library, later recognized with a national design award.',
  },
  {
    title: 'Local Control Priority',
    detail:
      'Consistently pushed back on one-size-fits-all state mandates and defended Atherton\'s ability to govern local decisions.',
  },
  {
    title: 'Peninsula Clean Energy Leadership',
    detail:
      'Helped found Peninsula Clean Energy and served in leadership on its 23-member board serving San Mateo County customers.',
  },
]

const ENDORSEMENT_STATS = [
  {
    value: '5',
    label: 'Past Mayors',
    detail:
      'Former Atherton mayors have endorsed Rick and his record of practical leadership.',
  },
  {
    value: '1',
    label: 'Other Elected Official',
    detail:
      'Current and former public leaders have backed Rick\'s approach to local governance.',
  },
  {
    value: '300+',
    label: 'Resident Endorsers',
    detail:
      'A broad coalition of Atherton residents have publicly supported Rick\'s campaign.',
  },
]

const ISSUE_ICON_BY_SLUG = {
  'fiscal-discipline-long-term-solvency': 'ledger',
  'housing-protecting-athertons-character': 'home',
  'local-control-against-state-overreach': 'shield',
  'resident-driven-governance': 'people',
  'public-safety-and-infrastructure': 'safety',
  'protecting-the-quality-of-life': 'leaf',
}

function IssueIcon({ icon }) {
  if (icon === 'ledger') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <path d="M8 9h8M8 12h8M8 15h5" />
      </svg>
    )
  }

  if (icon === 'home') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6.5 10.5V19h11v-8.5" />
      </svg>
    )
  }

  if (icon === 'shield') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4 19 7v5c0 4.2-2.4 6.9-7 8-4.6-1.1-7-3.8-7-8V7l7-3z" />
      </svg>
    )
  }

  if (icon === 'people') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="8" cy="9" r="2.2" />
        <circle cx="16" cy="9" r="2.2" />
        <path d="M4.8 17.5c.4-2.5 2.3-4 4.8-4s4.4 1.5 4.8 4" />
        <path d="M11.2 17.5c.35-2 1.9-3.2 4-3.2 2.05 0 3.6 1.2 4 3.2" />
      </svg>
    )
  }

  if (icon === 'safety') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4v16" />
        <path d="M7 8h10l-1.7 3.3H8.7z" />
        <rect x="10" y="17" width="4" height="3" rx="0.8" ry="0.8" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 5c4.4 0 7.2 2.5 7.2 6.4 0 4.5-2.8 7-7.2 7s-7.2-2.5-7.2-7C4.8 7.5 7.6 5 12 5z" />
      <path d="M12 8.1v6.6" />
      <path d="M8.7 11.4h6.6" />
    </svg>
  )
}

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

      <section className="home-intro" aria-label="About Rick DeGolia">
        <div className="home-intro-copy">
          <p className="home-intro-text">
            Rick DeGolia has served Atherton for more than a decade with a practical, steady
            approach rooted in listening first and making decisions that reflect resident priorities.
            As mayor and councilmember, he has focused on accountability, fiscal discipline, and
            preserving the character that makes Atherton unique.
          </p>
          <p className="home-intro-text">
            This campaign matters because the next council term will shape long-term choices on
            housing, budgeting, and local control. Rick brings proven experience navigating those
            complex issues while keeping governance transparent, respectful, and resident-driven.
          </p>

          <div className="home-intro-links" aria-label="Learn more about Rick">
            <Link className="home-section-link" to="/about">
              Get to Know Rick
            </Link>
          </div>
        </div>

        <div className="home-intro-image-frame" role="img" aria-label="Campaign image placeholder">
          <p className="home-intro-placeholder">Image placeholder</p>
        </div>
      </section>

      <section className="home-priorities" aria-labelledby="home-priorities-heading">
        <header className="home-priorities-header">
          <h2 id="home-priorities-heading">Issues &amp; Priorities</h2>
          <p className="home-priorities-subheadline">
            Review the six issues described below that will be critical to this election, from
            fiscal discipline and housing to local control and public safety.
          </p>
        </header>

        <div className="home-priorities-grid" role="list" aria-label="Issue priorities">
          {ISSUES.map((issue) => (
            <Link
              className="home-priority-card"
              key={issue.slug}
              role="listitem"
              to={`/issues/${issue.slug}`}
            >
              <span className="home-priority-icon-wrap" aria-hidden="true">
                <IssueIcon icon={ISSUE_ICON_BY_SLUG[issue.slug]} />
              </span>
              <h3>{issue.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-record" aria-labelledby="home-record-heading">
        <header className="home-record-header">
          <h2 id="home-record-heading">Record of Service</h2>
          <p className="home-record-subheadline">
            See Rick's leadership history, key accomplishments, and the experience he brings to
            his next term.
          </p>
        </header>

        <div className="home-record-grid" role="list" aria-label="Record of service highlights">
          {RECORD_HIGHLIGHTS.map((item) => (
            <article className="home-record-item" key={item.title} role="listitem">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="home-record-links" aria-label="View full record link">
          <Link className="home-section-link" to="/about#record">
            View Full Record
          </Link>
        </div>
      </section>

      <section className="home-endorsements" aria-labelledby="home-endorsements-heading">
        <header className="home-endorsements-header">
          <h2 id="home-endorsements-heading">Community Endorsements</h2>
          <p className="home-endorsements-subheadline">
            Support from leaders and residents across Atherton reflects confidence in Rick's
            steady, resident-first leadership.
          </p>
        </header>

        <div className="home-endorsement-stats" role="list" aria-label="Community endorsement statistics">
          {ENDORSEMENT_STATS.map((item) => (
            <article className="home-endorsement-stat" key={item.label} role="listitem">
              <p className="home-endorsement-value">{item.value}</p>
              <p className="home-endorsement-label">{item.label}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="home-endorsements-links" aria-label="View endorsements link">
          <Link className="home-section-link" to="/endorsers">
            View All Endorsements
          </Link>
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
              character while preparing responsibly for what comes next. The choices made in this
              election will influence public safety, infrastructure priorities, and budget
              stability for years to come. Atherton needs leadership with the experience to weigh
              competing pressures carefully and keep local priorities at the center of every
              decision.
            </p>

            <div className="home-stakes-links" aria-label="Learn more links">
              <Link className="home-section-link" to="/impact">
                Continue Reading
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
