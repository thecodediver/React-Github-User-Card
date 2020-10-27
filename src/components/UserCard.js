import React from 'react'
import FollowersCard from './FollowersCard'
import styled from 'styled-components'

const StyledUserCard = styled.div`
  text-align: center;
`

class UserCard extends React.Component {
  
  render() {
    return (
      <StyledUserCard>
        <h1><u>Name:</u> {this.props.user.name}</h1>
        <p><strong>Bio: </strong>{this.props.user.bio}</p>
        <p><strong>Location: </strong>{this.props.user.location}</p>
        <p><strong>Github URL: </strong><a href={this.props.user.html_url} alt="Link To Github">{this.props.user.html_url}</a></p>
        <FollowersCard followers={this.props.followers} />
      </StyledUserCard>
    )
  }
}

export default UserCard