import React from 'react';

function Image(props) {
    return (
        <div className="image__container">
            <iframe src={props.sourse.embed_url} width="350" height="350" frameBorder="0" ></iframe>
        </div>
    );
}


export default Image