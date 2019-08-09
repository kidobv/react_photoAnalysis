import React from 'react';



class IntroBanner extends React.Component {

    onBannerClose = () => {
        //send the value to close the banner at parent component
        this.props.onClick();
    }

    render(){
        return (
            <div className="ui floating message" style={{ marginTop: '10px' }}>
                <i onClick={this.onBannerClose} className="close icon"></i>
                <div className="header">
                    Welcome! search something...
            </div>
                Find pictures and select one to see what Microsoft Computer Vision can tell you about it.
        </div>
        );
    }
    
};
export default IntroBanner;