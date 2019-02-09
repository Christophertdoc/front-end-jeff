import React, { Component } from 'react';
import Content from './content/users';
import User from './components/User';

// https://www.kirupa.com/react/simple_todo_app_react.htm


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			unselected: 
			Content.map((user) => ({
				key: user.id,
				first: user.first,
				last: user.last,
				email: user.email,
				image: user.image
			})),
			selected: [],
		};
	}

	removeFromUnselected = (chosenKey) => {
		console.log(chosenKey)
		const array = [];
		this.state.unselected.map(user => {
			if (chosenKey !== user.key) {
				array.push({
					key: user.key,
					first: user.first,
					last: user.last,
					email: user.email,
					image: user.image
				})
			} else {

			}
		})
		return (
			this.setState(() => ({
				unselected:
				array.map((user) => ({
					key: user.key,
					first: user.first,
					last: user.last,
					email: user.email,
					image: user.image
				}))
			}))
		)
	}

	addToSelected = (key) => {
		const array = []; 
		let chosenKey = null;
		this.state.selected.map(user => {
			array.push({
				key: key,
				first: user.first,
				last: user.last,
				email: user.email,
				image: user.image
			})
		})
		Content.map(user => { 
			if(key === user.id) {
				chosenKey = key;
				array.push({
					key: key,
					first: user.first,
					last: user.last,
					email: user.email,
					image: user.image
				});
			}
		})
		this.removeFromUnselected(chosenKey);
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

	returnUnselected = () => {
		const { unselected } = this.state; 
		return (
			unselected.map(user => {
				return (
					<div>
						<User key={user.id} first={user.first} last={user.last} email={user.email} image={user.image} />
						<button onClick={(() => this.addToSelected(user.key))}>
							Select
						</button>
					</div>
				);
			})
		) 
	}

	returnSelected = () => {
		const { selected } = this.state; 
		return (
			selected.map(user => {
				return (
					<User key={user.id} first={user.first} last={user.last} email={user.email} image={user.image} />
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
						{this.returnUnselected()}
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
