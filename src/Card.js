import React from 'react'
import './Card.css'

class Card extends React.Component {
    static defaultProps = {
        title: 'Card',
        content: 'Card Content'
    }
    render() {
        return (
            <div class="Card">
            <button type="button">delete</button>
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
          </div>
        )
    }
}

export default Card