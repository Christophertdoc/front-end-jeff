import React, { Component } from 'react';
import Content from './content/users';
import UserList from './components/UserList';

// https://www.kirupa.com/react/simple_todo_app_react.htm


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			unselected: [],
			selected: [],
			test: [{first: "Wells", last: "Maruszewski", email: "wmaruszewski9@illinois.edu"}]
		};
		this.addToSelected = this.addToSelected.bind(this);
		this.returnSelected = this.returnSelected.bind(this);
	}

	addToSelected = (id) => {
		// console.log(this.returnSelected());
		return (
			// Content.map(user => { 
			// 	if(id === user.id) {
					// this.state.selected.push({
					// 	key: id,
					// 	first: user.first,
					// 	last: user.last,
					// 	email: user.email,
					// 	image: user.image
					// });
					// this.setState({
					// 	selected: {
					// 		key: id,
					// 		first: user.first,
					// 		last: user.last,
					// 		email: user.email,
					// 		image: user.image
					// 	}
					// });
					this.setState({
						selected: 
						Content.map((user) => ({
							key: id,
							first: user.first,
							last: user.last,
							email: user.email,
							image: user.image
						}))
					})
				// }
				// console.log(this.state.selected);
			// }
		)
	}

	unselectedList = () => {
		return (
			Content.map(user => {
				return (
					<ul key={user.id}>
						<li><img src={user.image} alt={`${user.first} icon`} /></li>
						<li>{user.first} {user.last}</li>
						<li>{user.email}</li>
						<li>
							<button onClick={(() => this.addToSelected(user.id))}>
								Select
							</button>
						</li>
					</ul>
				);
			})
		)
	}

	returnSelected = () => {
		const { selected } = this.state; 
		console.log("returnSelected function call");
		return (
			selected.map(value => {
				return (
					value.first
				);
			})
		)
	}

	render() {
		return (
			<div>
				<ul>
					<li>
						<h2>Unselected</h2>
					</li>
					<li>
						{this.unselectedList()}
					</li>
				</ul>
				<ul>
					<li>
						<h2>Selected</h2>
					</li>
					<li>
						{/* INSERT SELECTED LIST HERE */}
						{/* <UserList entries={this.state.selected}/> */}
						{this.returnSelected()}
						{/* {this.state.test.map(value => {
							return (
								value.first
							);
						})}	 */}
						{/* {this.state.selected.map(value => {
							return (
								value.first
							);
						})}	 */}
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
