import React, { Component } from 'react';
import Content from './content/users';
import UserList from './components/UserList';

// https://www.kirupa.com/react/simple_todo_app_react.htm


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			unselected: 
			Content.map((user) => (
			{
				key: user.id,
				first: user.first,
				last: user.last,
				email: user.email,
				image: user.image
				}
			)),
			selected: [],
		};
		this.addToSelected = this.addToSelected.bind(this);
		this.returnSelected = this.returnSelected.bind(this);
		this.unselectedList = this.unselectedList.bind(this);
	}

	addToSelected = (key) => {
		let array = []; 
		this.state.selected.map(user => {
			array.push({
				first: user.first
			})
		})
		Content.map(user => { 
			if(key === user.id) {
				array.push({
					key: key,
					first: user.first,
					last: user.last,
					email: user.email,
					image: user.image
				});
			}
		})
		return (
			this.setState(() => ({
				selected:
				array.map((user) => (
					{
					key: key,
					first: user.first,
					last: user.last,
					email: user.email,
					image: user.image
					}
				))
			}))
		)
	}

	unselectedList = () => {
		const { unselected } = this.state; 
		console.log(unselected)
		return (
			unselected.map(user => {
				return (
					<ul key={user.id}>
						<li><img src={user.image} alt={`${user.first} icon`} /></li>
						<li>{user.first} {user.last}</li>
						<li>{user.email}</li>
						<li>
							<button onClick={(() => this.addToSelected(user.key))}>
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
						{this.returnSelected()}
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
