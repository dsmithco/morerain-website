import PropTypes from 'prop-types'
import React from 'react'
import about from '../images/about.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About More Rain</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
          "More Rain" is the moniker for worship songs by Daniel Moraine Smith with the goal to lead 
          others into Christ-centered worship. Each song is created with the desire to express simple, authentic, 
          and christ-centered adoration for God. Daniel (Dan) leads worship regularly and serves in his local church's 
          various ministries.</p>
          
          <p>"Growing up in the church I have always felt a deep connection to God through worship. 
            I can recall services as a youth just singing endlessly about God's greatness and feeling His 
            presence in those moments. This desire for God's presence and to bless His name in worship is what fuels 
            the songs of More Rain."</p>
          
            <p><strong>Colossians 3:14-17</strong><br /> "And above all these put on love, which binds everything together in perfect harmony. 15 And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful. 16 Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God. 17 And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him."</p>
            <p><strong>Roman 12:1-2</strong><br /> "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. 2 Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."</p>
            <p><strong>Psalm 95:1-6</strong><br /> "Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation! 2 Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise! 3 For the Lord is a great God, and a great King above all gods. 4 In his hand are the depths of the earth; the heights of the mountains are his also. 5 The sea is his, for he made it, and his hands formed the dry land. 6 Oh come, let us worship and bow down; let us kneel before the Lord, our Maker!"</p>
            <p><strong>Philippians 2:10-11</strong><br /> "10 that at the name of Jesus every knee should bow, of those in heaven, and of those on earth, and of those under the earth, 11 and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father."</p>
          {close}
        </article>

        <article
          id="music"
          className={`${this.props.article === 'music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">music</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <iframe src="https://open.spotify.com/embed/artist/6fIAOtNh49o9ggr059aEEf" width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <br /><br />
          <h4>Adoration (We Love You Jesus)</h4>
          <h4>All I Need</h4>
          <h4>Angels Adore</h4>
          <h4>Only Jesus</h4>
          {close}
        </article>

        <article
          id="links"
          className={`${this.props.article === 'links' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">links</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p style={{fontWeight: '300', fontSize: '.8em'}}>
              <a target="_blank" href="https://open.spotify.com/artist/6fIAOtNh49o9ggr059aEEf?si=dyavetAOQJmdY6A_HW3Nrg&dl_branch=1">SPOTIFY</a> <br /><br />
              <a href="https://music.apple.com/us/artist/more-rain/1546437942" target="_blank">APPLE MUSIC</a> <br /><br />
              <a href="https://www.youtube.com/channel/UCgmX-z98orMn8EtwmrsfjrQ" target="_blank">YOU TUBE</a> <br /><br />
              <a href="https://soundcloud.com/morerain" target="_blank">SOUND CLOUD</a> <br /><br />
              <a href="https://instagram.com/morerainmusic" target="_blank">INSTAGRAM</a> <br /><br />
              <a href="https://facebook.com/morerainmusic" target="_blank">FACEBOOK</a> <br /><br />
              <a href="https://soundcloud.com/morerain" target="_blank">WINGS MUSIC GROUP</a></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
