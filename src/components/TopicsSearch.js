import React from "react";
import swal from "sweetalert";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import PhotoPlaceholder from "./PhotoPlaceholder";
import IntroBanner from "./IntroBanner";

class TopicsSearch extends React.Component {

    state = {
        topic: '',
        showBanner: true,
        showImgPlaceholder: true,
        loading: false,
        images: []
    };

    onSearchSubmit = async (topic) => {
        this.setState({ loading: true });
        // we could add this whole function inside the unsplash.js and make it cleaner but then it is not as generic if we want another endpoint we can't reuse it
        const response = await unsplash.get('/search/photos', {
            params: { query: topic }
        });
        this.setState({
            images: response.data.results,
            showBanner: false,
            showImgPlaceholder: false,
            loading: false
        });
        if (this.state.images.length === 0) {
            swal({
                title: "No images found (ಥ_ಥ)",
                text: "Please try a different topic",
                icon: "warning",
            });
        }
    }

    closeBannerMessage = () => {
        this.setState({ showBanner: false });
    }

    renderBanner() {
        return (this.state.showBanner ?
            <IntroBanner onClick={this.closeBannerMessage} /> : null
        );
    }
    
    renderPlaceholder() {
        return (this.state.showImgPlaceholder ? <PhotoPlaceholder /> : null);
    }

    loadingGif() {
        return (this.state.loading ?
            <div className="ui active inverted dimmer" style={{ position: 'fixed' }}>
                <div className="ui text loader">Loading</div>
            </div> : null
        );
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.onSearchSubmit(this.state.topic)
    }

    render() {
        return (
            <div>
                {this.renderBanner()}
                <div className="ui segment" style={{ marginTop: '10px' }}>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            {/* when we do value={this.state.topic} on the input we are basically forcing it to take the value of the state param we can dynamically manipulate it */}
                            <div className="ui input">
                                <input type="text" placeholder="e.g. cats, winter, orange sky, etc..." value={this.state.topic}
                                    onChange={(event) => { this.setState({ topic: event.target.value }) }}
                                />
                                <button className="right attached mini ui button"><i className="search icon"></i>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.loadingGif()}
                {this.renderPlaceholder()}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default TopicsSearch