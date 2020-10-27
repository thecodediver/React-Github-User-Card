import React from 'react'
import styled from 'styled-components'

const StyledFollowersCard = styled.div`
  text-align: center;
`

class FollowersCard extends React.Component {
  state = {
    followers: []
  }
  componentDidMount() {
    this.setState({
      followers: this.props.followers.map(follower => {
        return {
          name: follower.name,
          bio: follower.bio,
          location: follower.location,
          html_url: follower.html_url,
        }
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.followers !== this.props.followers) {
      this.setState({
        followers: this.props.followers
      })
    }
  }
  
  render() {
    return (
      <StyledFollowersCard>
        {this.state.followers.map(follower => {
          return (
            <div key={follower.id}>
              <h1>Follower</h1>
              <p>Username: {follower.login}</p>
              <p>Github Link: {follower.html_url}</p>
              <img src={follower.avatar_url} alt="user" />
            </div>
          )
        })}
      </StyledFollowersCard>
    )
  }
}

export default FollowersCard