import React  from 'react';
import azure from '../api/azure'
import Swal from 'sweetalert2';

class ImageCard extends React.Component {
    
    //The purpose of the spans logic is to try and make the image list layout pretty by calculating how many spans each individual image needs
    //Instead of this component we can also just use the responsive-container css class in ImageList css which will make the layout dimensions even and responsive for each cell
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0, loading: false};        
    }
    
    componentDidMount(){
         // in order to use the image reference we need to wait for the image to load
         //to do that we need to add an event listener
         this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{ //we want the image height to set the spans value in css
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10); //10px is the height we gave the auto-row attribute in css  
        this.setState({spans});
    }

    renderModal(data) {
        const caption = data.description.captions[0] ? data.description.captions[0].text : "No prediction";
        const capConfidence = data.description.captions[0] ? (data.description.captions[0].confidence *100).toFixed(5) +'%' : "No prediction";
        const dominantColors = data.color.dominantColors ? data.color.dominantColors.join(", ") : "No prediction";
        const tags = data.description.tags ? data.description.tags.join(", ") : "No prediction";
        return (
            `<div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>Predicted Attribute</th>
                            <th>Value</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td data-label="captionLbl">Caption</td>
                            <td data-label="captionValue">${caption}</td>
                        </tr>
                        <tr>
                            <td data-label="confLbl">Confidence</td>
                            <td data-label="confValue">${capConfidence}</td>
                        </tr>
                        <tr>
                            <td data-label="captionLbl">Dominant Colors</td>
                            <td data-label="captionValue">${dominantColors}</td>
                        </tr>
                        <tr>
                            <td data-label="confLbl">Tags</td>
                            <td data-label="confValue">${tags}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        );
    }

    loadingGif() {
        return (this.state.loading ?
            <div className="ui active inverted dimmer" style={{position:'fixed'}}>
                <div className="ui text loader">Loading</div>
            </div> : null
        );
    }

    onImgClick = async () => {
        this.setState({ loading: true });   
        const MS_LOGO = "https://azurecomcdn.azureedge.net/cvt-43585516c91952e44ccd39cf22cd31714613c4ccdea4ad5d9c5c6b1696e0a606/images/icon/favicon.ico"
        const { urls } = this.props.image;        
        const response = await azure.post('?visualFeatures=Categories,Description,Color&language=en', {url: urls.regular
            // params: { 
            //     visualFeatures: 'Categories, Description, Color',
            //     language: 'en'
            // },
            //data: { url: urls.regular}
        });
        //deconstruct the data object to pass in our modal function 
        const { data } = response;
        
       this.setState({ loading: false });       
        Swal.fire({
            title: 'Computer Vision analysis ',
            html: this.renderModal(data),
            imageUrl: MS_LOGO,
            imageWidth: 40,
            imageHeight: 40,
            confirmButtonText: 'Cool'
        })
    }

    render() {
        const { description, urls } = this.props.image; 
        return (                
                <div style={{ gridRowEnd: `span ${this.state.spans}`, cursor: 'pointer' }}>                
                    <img onClick={this.onImgClick} className="ui segment" alt={description} src={urls.regular} ref={this.imageRef}></img>
                {this.loadingGif()}
                </div>         
        );
    }
}
export default ImageCard;
