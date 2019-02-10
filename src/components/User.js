import React from 'react';

class User extends React.Component { 

    render() {
        const { 
            key,
            first,
            last,
            email,
            image
        } = this.props 

        return ( 
            <ul key={key}>
                <li><img src={image} alt={`${first} icon`} /></li>
                <li>{key}</li>
                <li>{first} {last}</li>
                <li>{email}</li>
            </ul> 
        );
    }
    
}

export default User; 