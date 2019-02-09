import React, { Component } from 'react';
import Content from './content/users';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			unselected: [],
		  	selected: []
		};
		this.addToSelected = this.addToSelected.bind(this);
	}

	addToSelected = (id) => {
		console.log(id);
		return (
			Content.map(user => { 
				if(id === user.id) {
					this.state.selected.push({
						key: id,
						first: user.first,
						last: user.last,
						email: user.email,
						image: user.image
					});
				}
				console.log(this.state.selected);
			}
		)
	)}

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
				<h2>Selected</h2>
					{this.state.selected.map((user) => (
						<p>{user.key}</p>
					))}
			</div>
		);
	}
}

export default App;
