const pastMayors = ['Jerry Carlson', 'Malcom Dudley', 'Didi Fisher', 'John Fisher', 'Jim Janz']

const otherElectedOfficials = ['Congresswoman Anna Eshoo']

const residentEndorsers = [
  'Maryan and Steve Ackley',
  'Gail Alberti',
  'Karen and Ellis Alden',
  'Bianca and Jamie Alexander',
  'Muffie and Fred Alvarez',
  'Colleen and Grant Anderson',
  'John Anderson',
  'Tom and Tami Arrington',
  'David and Marty Arscott',
  'Alan and Marianne Austin',
  'Melissa and Jim Badger',
  'David Bagshaw',
  'Rafi Bamdad',
  'Ilda and Carl Barbieri',
  'Elyse and David Barca',
  'Ildiko and Robert Barker',
  'Scott Barnum',
  'Bill and Kay Bates',
  'Todd and Inna Beardsley',
  'Margaret and Daniel Beltramo',
  'Eric and Edith Bergstrom',
  'Rebecca and Jeff Berry',
  'Cameron and Tito Bianchi',
  'Susan Bird',
  'Kerry and George Bischoff',
  'John and Linda Bolger',
  'Lori and Steve Bouret',
  'Joni and Tom Brown',
  'Beverly Browne',
  'Kelly and David Burke',
  'Suzanne and Bill Burrows',
  'Sandra Buscemi',
  'Shawn and Brook Byers',
  'Ferne Calcaterra',
  'Peter Carpenter',
  'Jennifer Carrico',
  'Armando Castro',
  'Shirley Carlson',
  'Leslie Coleman',
  'Chris Darwall',
  'Liz and Mark Daschbach',
  'Christine and Mike David',
  'Jean and Duncan Davidson',
  'Patti and Mark Davis',
  'Kathy and Norm Dewitt',
  'John and Susan Diekman',
  'Michelle and Gary Dillabough',
  'Dimitrios Dimitrelis',
  'Betsy and Don Dixon',
  'Dave Dollinger',
  'Steve Dostart and Sharon Meers',
  'Julie and Mark Douglass',
  'Jim and Mary Drake',
  'John Duane',
  'Peter Drekmeier',
  'Cosette Dudley',
  'Elizabeth and Bruce Dunlevie',
  'Louise El-Sum',
  'Alain and Rosemary Enthoven',
  'Kyle Enright',
  'Carolyn and Scott Feamster',
  'Claire Feder',
  'John and Chris Fennell',
  'Sandra Ferrando',
  'Judi and Jerry Finch',
  'David Fleck and Elaine Wong',
  'Mark Flegel',
  'Jill and Norm Fogelsong',
  'Diana and Freeman Ford',
  'Laura and John Foster',
  'Karen Francis',
  'Keiko Franklin',
  'John Friedenrich',
  'Liz and Doug Fritz',
  'Marilee Gardner',
  'Valerie Gardner',
  'Dominic and Eva Geraghty',
  'Diane and Charlie Giancarlo',
  'Margaret Gill',
  'Betsy Glikbarg',
  'Ernie Goiten',
  'John and Marcia Goldman',
  'Bianca Gonzalez',
  'Edward Goodstein',
  'Peter and Carol Grassi',
  'Josh and Judy Green',
  'William and Susan Grindley',
  'Bob and Anne Gunderson',
  'Susan and Steven Hailey',
  'Sherman and Jane Hall',
  'Jim and Marsha Hannay',
  'Griff Harsh',
  'Ken Hausman',
  'Bob Hellman and Holly Cao',
  'Sarah and Stephen Herrick',
  'Margaret Hinman',
  'Tom and Kathy Holt',
  'Susan and Joel Hyatt',
  'Frauke Janssen',
  'Kathy Janz',
  'David Jones',
  'Anita and Chris Joy',
  'Kent and Linda Kaiser',
  'Alyce and Steve Kaplan',
  'Guy and Beth Kawasaki',
  'Chris Kelley',
  'Elizabeth Kerrigan',
  'Nancy and Andy Kessler',
  'Ed King',
  'Leslie and Charles King',
  'Jill and John Kispert',
  'Fred and Gail Kittler',
  'Kris Klint',
  'Ross Koningstein',
  'Vivian Kral',
  'Denise Kupperman',
  'Kathy and Michael Ladra',
  'Rajeeva and Sangeeta Lahri',
  'Randy and Lisa Lamb',
  'Joan Lambert',
  'David Lampert',
  'Janet Larson',
  'Lois Larson',
  'Gary and Laura Lauder',
  'Linda and Skip Law',
  'Herb Lechner and Kay Clarke',
  'Jeffrey Lee',
  'Bren and Larry Leisure',
  'Darcy and Mark Leschly',
  'Ginger and Doug Levick',
  'Sandy and Dave Levison',
  'Joe Lewis',
  'Linda and Sid Liebes',
  'Debbie and Mike Linton',
  'Joyce and Phil Lively',
  'Connie and Robert Loarie',
  'Greg Loew',
  'Larry and Jennie Lowry',
  'Connie and Bob Lurie',
  'Helen and Dick MacDonell',
  'Jillian Manus',
  'Jim and Judy Massey',
  'Susan Masetti',
  'Louis Matas',
  'Anne and William McNertney',
  'Janice and Kevin Meier',
  'Janice and Kevin Meisel',
  'Clive Merredew',
  'Alan Miller',
  'Bill Miller',
  'Suzanne and Indra Mohan',
  'Russ and Kate Moore',
  'John Moragne',
  'Mark Moriconi',
  'Jeff Morris',
  'Merv and Roslyn Morris',
  'Elissa Murphy',
  'Susan and Gib Myers',
  'Ben and Alex Narasin',
  'Maaike Neves',
  'Lorrie Norrington',
  'Pejam and Mania Nozad',
  'Sue and Bob O\'Donnell',
  'Michelle and Erik Olsen',
  'Marion and Bob Oster',
  'Robert Oyster',
  'Hana and Peter Palecek',
  'Lori and Vic Para',
  'Roslyn and Lisle Payne',
  'Wendy Petersmeyer',
  'Bill Peterson',
  'Barbara and Ron Peyton',
  'Jack Phillips',
  'Laura and Mark Pitchford',
  'Bob Polito',
  'Barbara and Charles Preuss',
  'Linda and Eric Protiva',
  'Russel and Helen Pyne',
  'Andrea and Geoff Ralston',
  'Jan and Neil Rasmussen',
  'Jenny Redo and Kevin Brown',
  'Earl Rennison',
  'Jack Ringham',
  'Walter and Judith Robinson',
  'Mindy and Jesse Rodgers',
  'Sharon and Bob Roeser',
  'Danielle and Mario Rosati',
  'Debbie and Stuart Rosenberg',
  'Shelley and Bernard Ross',
  'Peter Rukavina and Wendy Adams',
  'Kim and Henry Sabet',
  'Mansour and Liza Salame',
  'Steve and Lisa Schatz',
  'Randy and Kelly Schmitz',
  'Lee and Bill Schroeder',
  'Bobbie Schumacher',
  'Alicia and Jim Seebold',
  'Susan and Richard Seiler',
  'Anne Senti-Willis',
  'June and Mario Sevilla',
  'Hildy Shandell',
  'Sheri and John Shenk',
  'Mark Silverman',
  'Howard and Susan Slayen',
  'Carol and Ned Spieker',
  'Madeline and Isaac Stein',
  'Mary and Mark Stevens',
  'Margaret Tao',
  'Barry Taylor and Libby Tyree-Taylor',
  'John and Debbie Thibault',
  'Jonathan Tiemann',
  'Marylue Timpson',
  'Paul Tonelli',
  'Tom Toy',
  'Carolyn and Todd Tuomala',
  'Roxanne Velez',
  'Loren Viegas',
  'Stephanie and Gregg von Thaden',
  'Anne Yvonne Walker',
  'Ray Walton',
  'Don and Sylvia Way',
  'Betty and Michael Weinstock',
  'Heidi and David Welch',
  'Steve Westly',
  'Catherine and Robert Westover',
  'Zachary Whitman',
  'Barb and John Windham',
  'Jeff Wise',
  'David Wollenberg',
  'Keith Wollenberg',
  'John and Margaret Worthing',
  'Elizabeth Wright',
  'Marsha Wythes',
  'Patricia and Newt Yaeger',
  'Amy and Geoff Yang',
  'Kim Young',
  'Tricia Young',
  'Ingrid and George Yule',
  'Barbara zuPutiz'
]

function Endorsers() {
  return (
    <>
      <section className="endorsers-hero">
        <p className="endorsers-kicker">Community Support</p>
        <h1>Rick's Endorsers</h1>
      </section>

      <section className="page endorsers-card">
        <p className="endorsers-subheadline">
          The following endorsements are from Rick's 2014 election and reflect broad support
          across Atherton residents, community leaders, and public officials.
        </p>

        <div className="endorsers-stats" role="list" aria-label="Endorser summary">
          <article className="endorsers-stat" role="listitem">
            <p className="endorsers-stat-value">{pastMayors.length}</p>
            <p className="endorsers-stat-label">Past Mayors</p>
          </article>
          <article className="endorsers-stat" role="listitem">
            <p className="endorsers-stat-value">{otherElectedOfficials.length}</p>
            <p className="endorsers-stat-label">Other Elected Officials</p>
          </article>
          <article className="endorsers-stat" role="listitem">
            <p className="endorsers-stat-value">{residentEndorsers.length}</p>
            <p className="endorsers-stat-label">Resident Endorsers Listed</p>
          </article>
        </div>

        <section className="endorsers-section" aria-labelledby="past-mayors-heading">
          <h2 id="past-mayors-heading">Past Mayors</h2>
          <ul className="endorsers-list">
            {pastMayors.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <section className="endorsers-section" aria-labelledby="officials-heading">
          <h2 id="officials-heading">Other Elected Officials</h2>
          <ul className="endorsers-list">
            {otherElectedOfficials.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <section className="endorsers-section" aria-labelledby="residents-heading">
          <h2 id="residents-heading">Atherton Residents</h2>
          <ul className="endorsers-grid" aria-label="Resident endorser names">
            {residentEndorsers.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  )
}

export default Endorsers
