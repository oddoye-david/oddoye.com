import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Projects from '../components/projects'

// const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flick: false
    }

    this.flickIt = this.flickIt.bind(this)
  }

  flickIt () {
    this.setState({
      flick: true
    })
    setTimeout(() => {
      this.setState({
        flick: false
      })
    }, 1000)
  }

  static async getInitialProps () {
    const response = await fetch(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`)

    const data = await response.json()

    return {
      projects: data.items.map(item => {
        return {...item.fields, id: item.sys.id}
      })
    }
  }

  render () {
    const {projects} = this.props

    return <div>
      <Head>
        <title>Oddoye David | Web Developer</title>
        <link rel='stylesheet' href='static/css/main.css' />
        <meta charset='utf8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='handheldfriendly' content='true' />
        <meta name='mobileoptimized' content='320' />
        <meta name='title' content='Oddoye David' />
        <meta name='description' content='Backend Web Development' />
        <meta property='og:title' content='Oddoye David' />
        <meta property='og:description' content='Oddoye David | Web Developer' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://oddoye.com' />
        <meta property='og:site_name' content='Oddoye David' />
      </Head>
      <header role='banner'>
        <nav role='navigation' className='h4'>
          <a href='#home' title='home' className='js-fx' onClick={this.flickIt}>Oddoye David</a>
          <span> • </span>
          <a href='#projects' title='projects' className='js-fx' onClick={this.flickIt}>Projects</a>
        </nav>
      </header>
      <main role='main'>
        <section id='projects'>
          <h2 className='h4 caps'>Projects &amp; Experiments</h2>
          <hr />
          <Projects data={projects} />
        </section>
        <section id='home'>
          <h2>Oddoye David is a software developer. Proficient in HTML/CSS, Node JS, Angular 1.x, Ionic 1.x. and React JS</h2>
          <hr />
          <ul>
            <li>
              <a href='https://twitter.com/theRealBraZee' target='_blank' title='Twitter' className='h3'>twitter</a>
            </li>
            <li>
              <a href='https://github.com/oddoye-david' target='_blank' title='Github' className='h3'>github</a>
            </li>
          </ul>
        </section>
      </main>
      <div className={`flick ${this.state.flick ? 'flick-on' : ''}`} />
      <p style={{ textDecoration: 'underline' }}>&copy; 2018</p>
    </div>
  }
}
