import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileGithub extends Component {
  constructor() {
    super();
    this.state = {
      clientId: "265901a48151ba920373",
      clientSecret: "3ffc2ab5e482def9c070fee7900e4519c00e6942",
      count: 5,
      sort: "create asc",
      repos: []
    };
  }
  componentDidMount() {
    const { userName } = this.props;
    const { clientId, clientSecret, count, sort, repos } = this.state;
    fetch(
      `https://api.github.com/users/${userName}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(body => body.json())
      .then(data => this.setState({ repos: data }))
      .catch(e => console.log(e));
  }
  render() {
    const { repos } = this.state;
    const repoItems =
      repos.length &&
      repos.map(repo => (
        <div key={repo.id} className="card card-body mb-2">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={repo.html_url} className="text-info" target="_blank">
                  {" "}
                  {repo.name}
                </Link>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars:{repo.stargazers_count}
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: {repo.watchers_count}
              </span>
              <span className="badge badge-success">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      ));
    return (
      <div>
        <hr />
        <h3 class="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}
