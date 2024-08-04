import React  from "react";
import { Component } from 'react';
import './githubuser.styles.css';
import { UserForm } from "./form/user-form.component";

class GitHubUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      username: 'rabindra12345',
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchUser(this.state.username);
  }

  fetchUser = (username) => {
    this.setState({ loading: true, error: null });

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network issue while receiving response.');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ user: data, loading: false }, () => {
          console.log(this.state.user); // Ensure this logs correctly
        });
      })
      .catch(error => {
        this.setState({ error: 'Error fetching user data', loading: false });
      });
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSearch = () => {
    this.fetchUser(this.state.username);
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { user, error, loading, username } = this.state;

    return (
      <div className="App">
        <h1 className="title">GitHub User Finder</h1>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            value={username}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            placeholder="Enter GitHub username"
          />
          <button className="search-field" onClick={this.handleSearch}>Search</button>
        </div>
        <br/>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && !user && <div>User is null</div>}
        {!loading && !error && user && (
          <div className="github-result">
            <img src={user.avatar_url} alt={user.login} width="150" />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <table >
              <tbody>
                <tr>
                  <th>Followers:</th>
                  <th>Following:</th>
                  <th>Public Repos:</th>
                </tr>
                <tr>
                  <td>{user.followers}</td>
                  <td>{user.following}</td>
                  <td>{user.public_repos}</td>
                </tr>
              </tbody>
            </table>
            <a className="github-link" href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    );
  }
}

export { GitHubUser };
