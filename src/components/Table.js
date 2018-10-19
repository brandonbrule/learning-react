import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({posts: data}));
  }
  render() {
    const userList = this.state.posts.map(post => (
      <div key={post.id}>
        <p><strong>{post.name}</strong> : {post.email}</p>
      </div>
      ));
    return (
      <div>
        <h1>Users</h1>
        {userList}
        <ReactTable
          data={this.state.posts}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Username",
                  id: "username",
                  accessor: d => d.username
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Phone",
                  accessor: "phone"
                }
              ]
            },
            {
              Header: 'Extra',
              columns: [
                {
                  Header: "Website",
                  accessor: "website"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default UserTable;
