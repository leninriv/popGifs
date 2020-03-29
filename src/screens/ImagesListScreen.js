import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import { setPhotoLibrary } from '../redux/actions'
import Header from '../global_components/Header'
import Image from '../global_components/Image'
import SearchInput from '../components/Searchinput';


class ImagesListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchValue: this.props.searchQuery ? this.props.searchQuery : ''
        }
    }

    componentDidMount() {
        this.props.setPhotoLibrary(this.props.searchQuery ? this.props.searchQuery : null)
    }

    searchAction = () => {
        this.props.setPhotoLibrary(this.state.searchValue)
        this.setState({ redirect: true })
    }

    onChangeValue = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        const { photoLibrary } = this.props
        const { searchValue } = this.state
        if (this.state.redirect) {
            return <Redirect push to="/view" />;
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <SearchInput value={searchValue} onChangeValue={this.onChangeValue} onSearch={this.searchAction} />
                    <div className="image_list__container">
                        {
                            !!photoLibrary && photoLibrary.length > 0 &&
                            photoLibrary.map(sourse => <Image sourse={sourse} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    photoLibrary: state.gallery.photoLibrary,
    searchQuery: state.gallery.searchQuery,
})

export default connect
    (mapStateToProps,
        {
            setPhotoLibrary
        })
    (ImagesListScreen);
