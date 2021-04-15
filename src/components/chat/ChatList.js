import React from 'react'
import ChatPreview from './ChatPreview';
import foto from "../../assets/pictures/nopic.jpeg";

const ChatList = () => {
    return (
        <div>
            <ChatPreview image={foto} name = 'Marsyalina' previewChat="Halo, permisi kak izin bertanya" id='1'/>
            <ChatPreview image={foto} name = 'Bobi' previewChat="Pagi kak, cara install ulang windows gimana ya" id='2'/>
            <ChatPreview image={foto} name = 'Marsha' previewChat="Terima kasih kak" id='3'/>
            <ChatPreview image={foto} name = 'John' previewChat="Thank you kak" id='4'/>
        </div>
    )
}

export default ChatList;