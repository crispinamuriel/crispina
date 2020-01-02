import React, {Component} from 'react'
import axios from 'axios'

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount() {
    try {
      const storiesResponse = await axios.get('/api/projects')
      this.setState({stories: storiesResponse.data})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const stories = this.state.stories
    return (
      <div id="stories" className="column">
        <h2 className="shadow">Technical Projects</h2>
        {stories.map(story => (
          <div className="story story2 opacity" key={story.id}>
            <hr />
            <a href={story.projectUrl} target="_blank">
              <div className="centered solid">
                <img src={story.imageUrl} width="100" />
              </div>
              <h3 id="project">{story.title}</h3>
            </a>
            <p>{story.content}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}
