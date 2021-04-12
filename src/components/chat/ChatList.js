import React from 'react'
import ChatPreview from './ChatPreview';
import foto from "../../assets/pictures/marsyalina.svg";

const ChatList = () => {
    return (
        <div>
            <ChatPreview image={foto} name = 'Marsyalina' previewChat="bladmasdlkmasdkmasldmals" id='1'/>
            <ChatPreview image={foto} name = 'Marsyalina' previewChat="bladmasdlkmasdkmasldmals" id='2'/>
            <ChatPreview image={foto} name = 'Marsyalina' previewChat="bladmasdlkmasdkmasldmals" id='3'/>
            <ChatPreview image={foto} name = 'Marsyalina' previewChat="bladmasdlkmasdkmasldmals" id='4'/>
        </div>
    )
}

export default ChatList;