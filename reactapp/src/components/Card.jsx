import React from 'react'

function Card({person, imageUrl}) {
    return (
        <>
            <section className="card" style={{maxWidth: '320px'}}>
                <img src={person.imageUrl} className="card-img-top" alt={person.name}/>
                    <div className="card-body">
                        <h4 className="card-title">{person.name} {person.lname}</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn-solid theme-primary">Go somewhere</a>
                    </div>
            </section>
        </>
    )
}

export default Card