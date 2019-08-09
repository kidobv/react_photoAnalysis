import React from 'react';

class PhotoPlaceholder extends React.Component {

    renderPhotoPlaceholder() {
        return (
            <div className="ui column">
                <div className="ui segment">
                    <img className="ui wireframe image"
                        alt="..."
                        src="https://semantic-ui.com/images/wireframe/image.png">
                    </img>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>                
                <div className="ui three column grid">
                    {this.renderPhotoPlaceholder()}
                    {this.renderPhotoPlaceholder()}
                    {this.renderPhotoPlaceholder()}
                </div>
                <div className="ui three column grid">
                    {this.renderPhotoPlaceholder()}
                    {this.renderPhotoPlaceholder()}
                    {this.renderPhotoPlaceholder()}
                </div>
            </div>
        );
    }

};
export default PhotoPlaceholder