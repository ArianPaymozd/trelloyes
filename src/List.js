import React from 'react'
import Card from './Card'
import './List.css'

function List(props) {
    return (
        <section class="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) => {
                    return (<Card title={card.title} content={card.content} />)
                })}
            </div>
        </section>
    )
}

export default List