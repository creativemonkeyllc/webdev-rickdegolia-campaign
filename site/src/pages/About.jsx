import { useEffect, useState } from 'react'

const ABOUT_TAB_IDS = ['about-rick', 'statement', 'record', 'timeline', 'campaigns']

function About() {
  const [activeTab, setActiveTab] = useState('about-rick')

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (ABOUT_TAB_IDS.includes(hash)) {
        setActiveTab(hash)
      }
    }

    syncTabFromHash()
    window.addEventListener('hashchange', syncTabFromHash)

    return () => {
      window.removeEventListener('hashchange', syncTabFromHash)
    }
  }, [])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.history.replaceState(null, '', `#${tabId}`)
  }

  return (
    <>
      <section className="about-hero">
        <p className="about-kicker">A Fifth-Generation Californian</p>
        <h1>Rooted in Atherton</h1>
      </section>

      <nav aria-label="About page sections" className="about-tabs" role="tablist">
        <button
          aria-controls="about-rick-panel"
          aria-selected={activeTab === 'about-rick'}
          className={`about-tab ${activeTab === 'about-rick' ? 'about-tab-active' : ''}`}
          id="about-rick-tab"
          onClick={() => handleTabChange('about-rick')}
          role="tab"
          type="button"
        >
          About Rick
        </button>
        <button
          aria-controls="statement-panel"
          aria-selected={activeTab === 'statement'}
          className={`about-tab ${activeTab === 'statement' ? 'about-tab-active' : ''}`}
          id="statement-tab"
          onClick={() => handleTabChange('statement')}
          role="tab"
          type="button"
        >
          Statement
        </button>
        <button
          aria-controls="record-panel"
          aria-selected={activeTab === 'record'}
          className={`about-tab ${activeTab === 'record' ? 'about-tab-active' : ''}`}
          id="record-tab"
          onClick={() => handleTabChange('record')}
          role="tab"
          type="button"
        >
          Record
        </button>
        <button
          aria-controls="timeline-panel"
          aria-selected={activeTab === 'timeline'}
          className={`about-tab ${activeTab === 'timeline' ? 'about-tab-active' : ''}`}
          id="timeline-tab"
          onClick={() => handleTabChange('timeline')}
          role="tab"
          type="button"
        >
          Timeline
        </button>
        <button
          aria-controls="campaigns-panel"
          aria-selected={activeTab === 'campaigns'}
          className={`about-tab ${activeTab === 'campaigns' ? 'about-tab-active' : ''}`}
          id="campaigns-tab"
          onClick={() => handleTabChange('campaigns')}
          role="tab"
          type="button"
        >
          Campaigns
        </button>
        
      </nav>

      {activeTab === 'about-rick' && (
        <section
          aria-labelledby="about-rick-tab"
          className="page about-card"
          id="about-rick"
          role="tabpanel"
          tabIndex={0}
        >
          <div className="about-content">
            <p>
              Rick DeGolia's connection to Atherton began in the 1950s, visiting grandparents on
              Catalpa Drive. He came to civic life not as a politician but as a frustrated
              resident who believed Atherton could do better, and he has spent more than a decade
              proving it.
            </p>

            <p>
              In 2013, Rick stepped up to run for the Council seat vacated by Jerry Carlson,
              winning 63% of the vote. He had been serving as Vice Chair of the newly formed
              Civic Center Advisory Committee (CCAC), the body that would shape the design of
              Atherton's entire new civic campus, and he channeled that energy directly into
              elected service.
            </p>

            <p>
              In the years since, he has served as Mayor three times, founded and chaired
              Peninsula Clean Energy's 23-member board, represented Atherton on the San Mateo
              Library Governing Board, and been liaison to the Civic Center Advisory, Finance and
              Audit, and Park and Recreation Committees.
            </p>

            <p>
              As a Harvard-educated lawyer who spent many years representing technology companies,
              venture capitalists, and investment banks, he is very comfortable on boards,
              including the City Council. He knows how to listen and how to lead.
            </p>

            <p>
              His approach has remained constant: deliberate, intellectually rigorous, respectful
              of all voices, and firmly committed to the idea that Atherton should govern itself,
              on its own terms, for its own residents.
            </p>
          </div>

          <blockquote className="about-quote">
            <p>
              I believe that my years of board and executive experience and my personal style of
              deliberation and negotiation have proved to be extremely valuable to the Town of
              Atherton. The job is to represent Atherton residents. Working alongside them on
              their individual issues and the Town's general issues has inspired and energized me
              to remain focused on the future of Atherton.
            </p>
            <cite>Rick DeGolia</cite>
          </blockquote>
        </section>
      )}

      {activeTab === 'record' && (
        <section
          aria-labelledby="record-tab"
          className="page about-delivered-card"
          id="record"
          role="tabpanel"
          tabIndex={0}
        >
          <h2>What Rick Has Delivered for Atherton</h2>
          <p className="about-delivered-subheadline">
            This is not a list of promises. It is a record of decisions made, projects delivered,
            and institutions protected over more than a decade of service.
          </p>

          <ol className="about-delivered-list">
            <li>
              <h3>Town Center - On Budget and On Time</h3>
              <p>
                Rick was Vice Chair of the Civic Center Advisory Committee (CCAC) before he was
                on Council, shaping the $50M project from its earliest design. As Mayor he
                oversaw the final delivery of a campus that replaced 30-year-old trailers and a
                condemned 90-year-old administration building and police station.
              </p>
            </li>

            <li>
              <h3>First Caltrain Quiet Zone - A Game Changer for Atherton Residents</h3>
              <p>
                As Mayor in 2015, Rick led the effort to understand and establish the first Quiet
                Zone on the Caltrain tracks at the Fair Oaks Lane road crossing. He then worked
                to expand it in 2023 to the Watkins Avenue road crossing, ensuring quality of
                life for residents near the train tracks.
              </p>
            </li>

            <li>
              <h3>Police Department at Full Headcount - Community Policing at Its Best</h3>
              <p>
                One of Rick's first tasks on City Council was to oppose an effort to replace
                Atherton's Police Department with the County Sheriff in order to save costs. For
                the first time in ten years, Atherton's Police Department recently reached full
                staffing, in part because the new facility is one officers want to work in. Rick
                fought to ensure the building served both the public and the people who protect
                us.
              </p>
            </li>

            <li>
              <h3>Atherton Community Library - Designed From the Ground Up</h3>
              <p>
                Rick chaired the Library Subcommittee of the Civic Center Advisory Committee,
                helping craft foundational decisions about what Atherton's library would be. The
                result earned a national AIA/ALA Library Building Award, given to just five
                libraries in the country.
              </p>
            </li>

            <li>
              <h3>Fiscal Responsibility and Pension Reform</h3>
              <p>
                The number one responsibility of council members is to manage costs and deliver
                services within budget. Over the past 13 years, the Council has reduced long-term
                pension and healthcare liabilities, maintained conservative budgets, and invested
                in important capital projects when surplus tax revenue allowed. Atherton's
                finances are sound because its Council has been disciplined.
              </p>
            </li>

            <li>
              <h3>Local Control - An Absolute Priority for Atherton</h3>
              <p>
                Throughout his tenure, Rick has pushed back against state mandates that fail to
                account for Atherton's unique character. He believes Atherton is a unique
                community that needs as much authority over its own affairs as the law allows,
                and he has acted accordingly.
              </p>
            </li>

            <li>
              <h3>Peninsula Clean Energy - Board Chair</h3>
              <p>
                Rick helped found Peninsula Clean Energy in 2014 and has served as Board Chair of
                Peninsula Clean Energy's 23-member board, a joint powers authority that provides
                100% clean electricity to San Mateo County. PCE delivers $500M of electricity to
                300,000 customers annually.
              </p>
            </li>
          </ol>
        </section>
      )}

      {activeTab === 'timeline' && (
        <section
          aria-labelledby="timeline-tab"
          className="page about-timeline-card"
          id="timeline"
          role="tabpanel"
          tabIndex={0}
        >
          <h2>A Decade of Decisive Moments</h2>
          <p className="about-timeline-subheadline">
            From volunteer committee member to three terms as Mayor, Rick's record is a
            continuous thread of engaged, principled service that is entirely focused on Atherton
            residents.
          </p>

          <ol className="about-timeline" aria-label="A decade of decisive moments timeline">
            <li className="timeline-entry">
              <p className="timeline-year">2023+</p>
              <div className="timeline-panel">
                <p>Focused on Athertons Housing Element.</p>
              </div>
            </li>

            <li className="timeline-entry timeline-entry-continued">
              <p aria-hidden="true" className="timeline-year timeline-year-repeat"></p>
              <div className="timeline-panel">
                <p>
                  Rick has served as council liaison or governing board member across every major Atherton institution - accumulating institutional knowledge that cannot be replaced.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2020</p>
              <div className="timeline-panel">
                <p>
                  Served as Mayor during COVID-19. Rick helped guide Atherton residents through
                  the pandemic year while maintaining Town Center construction on schedule and
                  managing fiscal pressures on the general fund.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2019</p>
              <div className="timeline-panel">
                <p>
                  Town Center groundbreaking: "Today we launch the most significant construction
                  project in the history of Atherton." The project was $50M and was ultimately
                  completed on time and on budget.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2014</p>
              <div className="timeline-panel">
                <p>Rick is re-elected for a four-year term.</p>
              </div>
            </li>

            <li className="timeline-entry timeline-entry-continued">
              <p aria-hidden="true" className="timeline-year timeline-year-repeat"></p>
              <div className="timeline-panel">
                <p>
                  Rick ran for City Council because he knew he would be 100% focused on Atherton
                  residents and the issues that impact their quality of life. Endorsed by The
                  Almanac, he won 63% of the vote.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2013</p>
              <div className="timeline-panel">
                <p>
                  Rick serves as Vice Chair of the Civic Center Advisory Committeeand chairs the
                  Library Subcommittee, shaping the design of Atherton's new civic campus before
                  ever holding office.
                </p>
              </div>
            </li>

            <li className="timeline-entry timeline-entry-continued">
              <p aria-hidden="true" className="timeline-year timeline-year-repeat"></p>
              <div className="timeline-panel">
                <p>Rick is elected to City Council.</p>
              </div>
            </li>
          </ol>
        </section>
      )}

      {activeTab === 'campaigns' && (
        <section
          aria-labelledby="campaigns-tab"
          className="page about-campaigns-card"
          id="campaigns"
          role="tabpanel"
          tabIndex={0}
        >
          <h2>Rick's Council Campaigns</h2>
          <p className="about-campaigns-subheadline">
            Rick's campaign history reflects consistent community support and a practical,
            resident-first approach to local government.
          </p>

          <ol className="about-timeline" aria-label="Rick DeGolia campaign timeline">
            <li className="timeline-entry">
              <p className="timeline-year">2022</p>
              <div className="timeline-panel">
                <p>
                  Rick ran for re-election again, continuing his focus on measured leadership,
                  transparent governance, and long-term stewardship for Atherton.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2018</p>
              <div className="timeline-panel">
                <p>
                  With three candidates for three open seats, the Council appointed all candidates
                  and no election was required.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2014</p>
              <div className="timeline-panel">
                <p>
                  Rick ran for his first full election and won re-election to a full four-year term
                  on the City Council.
                </p>
              </div>
            </li>

            <li className="timeline-entry">
              <p className="timeline-year">2013</p>
              <div className="timeline-panel">
                <p>
                  Rick ran to fill the remaining one year of Jerry Carlson's term and won 63% of
                  the vote. Soon after, he was elected to serve as Vice Mayor.
                </p>
              </div>
            </li>
          </ol>

          <section className="about-campaign-priorities" aria-labelledby="campaign-priorities-heading">
            <h3 id="campaign-priorities-heading">Core Campaign Priorities</h3>
            <ul>
              <li>Manage town resources in a careful, fiscally conservative manner.</li>
              <li>Protect neighborhoods from traffic safety concerns and crime.</li>
              <li>Prioritize communication with residents and remain consistently accessible.</li>
            </ul>
          </section>
        </section>
      )}

      {activeTab === 'statement' && (
        <section
          aria-labelledby="statement-tab"
          className="page about-statement-card"
          id="statement"
          role="tabpanel"
          tabIndex={0}
        >
          <h2>Rick's Campaign Statement</h2>

          <figure className="about-statement-figure">
            <img
              alt="Rick DeGolia"
              className="about-statement-photo"
              src="https://rickdegolia.com/wp-content/uploads/2013/07/RickDeGoliaPhoto1-1024x763.jpg"
            />
          </figure>

          <section className="about-statement-block about-statement-voter-copy" aria-labelledby="statement-voter-copy-heading">
            <h3 id="statement-voter-copy-heading">
              This first portion is exactly as it appears in the voter pamphlet.
            </h3>
            <p className="about-statement-lead">
              I have been on the City Council for nine years. It is an honor to represent the
              residents of Atherton. I am running for re-election because people deserve
              responsible, accountable, transparent government. I am innovative and running on my
              record.
            </p>
            <p>
              I was instrumental in advocating for and helping to ensure that Atherton built its
              new Town Center on budget and with very significant resident involvement. It is
              open and for the first time in ten years we have filled every position in our police
              department.
            </p>
            <p>
              I worked to deepen our close, cooperative relationship with our police and to
              attract and retain officers with community policing as their commitment.
            </p>
            <p>
              I strongly support local control of housing and believe that Atherton can provide
              excellent affordable housing with residents renting ADUs and schools building housing
              for staff.
            </p>
            <p>
              I started the committee that resulted in Atherton Fiber building a fiber network
              throughout Atherton. This system provides faster, cheaper Internet service than its
              competitors.
            </p>
            <p>
              I support increased community involvement and encourage resident communication to
              obtain input on all Council decisions. I respond to every email and phone call. I
              work to build consensus and always respect differences of opinion.
            </p>
            <p>
              I have worked in Silicon Valley as a business lawyer and software executive for
              thirty-three years. I will listen to you and I want to represent your interests.
            </p>
            <p>
              Email:{' '}
              <a href="mailto:rick@rickdegolia.com">rick@rickdegolia.com</a>.
            </p>
          </section>

          <section className="about-statement-block about-statement-commitments" aria-labelledby="statement-commitments-heading">
            <h3 id="statement-commitments-heading">My commitments to the community remain the same.</h3>
            <ul className="about-statement-list">
              <li>Insure resident-focused government.</li>
              <li>Maintain Atherton's close, cooperative relationship with the police.</li>
              <li>
                Support important, long-neglected capital projects, including bike lanes, safe
                crossings on El Camino and a well cared for Holbrook-Palmer Park.
              </li>
              <li>Increase community involvement.</li>
              <li>Increase communication to obtain input on important Council decisions.</li>
              <li>Build consensus among Council members and always respect differences of opinion.</li>
              <li>Contribute executive expertise to Council deliberations and process.</li>
            </ul>
          </section>

          <section className="about-statement-block about-statement-endorsement" aria-labelledby="statement-endorsement-heading">
            <h3 id="statement-endorsement-heading">In 2014, The Almanac Endorsed Rick</h3>
            <p>
              <a
                className="about-statement-endorsement-link"
                href="http://www.almanacnews.com/print/story/2013/10/23/editorial-rick-degolia-for-atherton-council"
                rel="noreferrer"
                target="_blank"
              >
                Editorial: Rick DeGolia for Atherton Council
              </a>
            </p>
          </section>
        </section>
      )}
    </>
  )
}

export default About
