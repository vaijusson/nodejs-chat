import React from 'react';
import './Input.css';

const Input = ({message,setMessage,sendMessage}) => {
    return (
        <form action="" onSubmit={sendMessage} className="search-wrapper cf">
                <input type="text" className="input" 
                placeholder="type something..."
                value={message} 
                onChange={event => setMessage(event.target.value)}
                onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button type="submit" className="button">Send Message</button>
            </form>
    )
}

export default Input
