import React from 'react';

const Card = ({name, email, id}) => { //obj Destructing 
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt="robot img" src={`https://robohash.org/${id}?100*100`}/>
            <div>
                <h2> { name }</h2>
                <p> { email } </p>
            </div>
        </div>
    )
}
export default Card;