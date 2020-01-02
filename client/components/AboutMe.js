import React, {Component} from 'react'
import axios from 'axios'

export default class AboutMe extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  async componentDidMount() {
    try {
      const infoResponse = await axios.get('/api/info')
      this.setState({info: infoResponse.data})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const info = this.state.info

    return (
      <div id="container">
        <img
          id="photo"
          className="circle card story4 sticky"
          src="CrispinaMuriel.JPG"
          width="280"
          height="280"
        />
        <div id="stories" className="column quotes">
          {info.map(infoEntry => (
            <div className="story opacity card" key={infoEntry.id}>
              <div
                className="story opacity box margin-bottom"
                key={infoEntry.id}
              >
                <img src={infoEntry.imgUrl} width="500" />
              </div>
              <a>
                <h3>{infoEntry.title}</h3>
              </a>
              <a>
                <p>{infoEntry.content}</p>
              </a>
              <hr />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
