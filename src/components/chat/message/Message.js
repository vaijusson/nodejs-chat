import React from 'react';
import './Message.css';

const Message = ({message:{name,user_id,text},current_uid}) => {
    let isCurrentUser = false;
    if (user_id === current_uid) {
        isCurrentUser = true;
    }
    return (
        isCurrentUser?
        (<div className="message-blue">
            <div className="message-content">
                <p className="sentbyme">{name} : {text}
                </p>
            </div>
        </div>):
        (<div className="message-orange">
            <div className="message-content">
                <p className="opponent">{name} : {text}
                </p>
            </div>
        </div>)
    )
}

export default Message
