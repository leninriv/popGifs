import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import { Link } from "react-router-dom";

import Header from '../global_components/Header'
import Image from '../global_components/Image'

import { setPhotoLibrary } from '../redux/actions'

class ImageDetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        }
    }

    render() {
        const { photoLibrary } = this.props
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <div >
                <Header />
                <div className="container">
                    <Link to="/">Back To Search</Link>
                    <div className="image_detail_view">
                        {photoLibrary && photoLibrary.length > 0 && <iframe src={photoLibrary[this.state.currentImage].embed_url} width="400" height="400" frameBorder="0" ></iframe>}
                    </div>
                    <h2>See other popular images</h2>
                    <div className="image_scroll__container">
                        {
                            !!photoLibrary && photoLibrary.length > 0 &&
                            photoLibrary.map(sourse => <iframe src={sourse.embed_url} width="200" height="200" frameBorder="0" ></iframe>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    photoLibrary: state.gallery.photoLibrary
})

export default connect
    (mapStateToProps,
        {
            setPhotoLibrary
        })
    (ImageDetailsScreen);
