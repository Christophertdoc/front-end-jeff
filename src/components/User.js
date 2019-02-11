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
            <ul className="User" key={key}> 
                <li><img src={image} alt={`${first} icon`} /></li>
                <li>
                    <p>{first} {last}</p>
                </li> 
                <li>
                    <p>{email}</p>
                </li>
            </ul> 
        );
    }
    
}

export default User; 