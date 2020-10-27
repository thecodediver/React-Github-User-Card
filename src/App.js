import React from 'react'
import axios from 'axios'
import {Route } from 'react-router-dom'
import UserCard from './components/UserCard'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StyledApp = styled.div`
  text-align: center;
  background-color: #333;
  color: white;
`


class App extends React.Component {
  state = {
    input: "",
    user: {
      name: "",
      bio: "",
      location: "",
      html_url: "",
      followers: "",
      loaded: false
    },
    followers: [
    ]
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  onSubmit = () => {
    const { history } = this.props;
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: {
            name: res.data.name,
            bio: res.data.bio,
            location: res.data.location,
            html_url: res.data.html_url,
            followers: res.data.followers_url
          }
        })
        axios.get(res.data.followers_url)
          .then(resTwo => {
            console.log(resTwo.data)
            this.setState({
              ...this.state,
              followers: resTwo.data
            })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    
      history.push('/user')
  }

  render() {
    return (
      <StyledApp className="App">
        <div>
          <h1>Enter Your Github Username</h1>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button onClick={e => this.onSubmit(this.state.input)}>Submit</button>
        </div>
        <Route path="/user">
          <UserCard user={this.state.user} followers={this.state.followers}/>
        </Route>
      </StyledApp>
    );
  }

}

export default withRouter(App)
