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
		
		//const selectedArray = this.state.items;
		console.log(id);
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
			</div>
		);
	}
}

export default App;
