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
            <div className="User" key={key}> 
                <img src={image} alt={`${first} icon`} />
                <div className="content">
                    <h3>{first} {last}</h3>
                    <p>{email}</p>
                </div>
            </div> 
        );
    }
    
}

export default User; 