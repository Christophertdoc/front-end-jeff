import React, { Component } from 'react';
import Content from './content/users';


class App extends Component {

	userList = () => {
		return (
			Content.map(user => {
				return (
					<li>{user.first}</li>
				);
			})
		)
	}

	render() {
		return (
			<div>
				{this.userList()}
			</div>
		);
	}
}

export default App;
