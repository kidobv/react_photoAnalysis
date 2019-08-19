(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),c=a.n(r),o=a(2),l=a(3),s=a(5),u=a(4),d=a(6),m=a(7),h=a.n(m),p=a(8),f=a(23),g=a.n(f),v=a(9),b=a.n(v),y=b.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID eca10f34d3ac8c233aa95b8aae59d936a1e002ca2a4698d3e73c73681ff4de1c"}}),E=(a(48),b.a.create({baseURL:"https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze",headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":"6eda8989b29e4683a14d1f548e3505b0"}})),j=a(24),O=a.n(j),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.onImgClick=Object(p.a)(h.a.mark(function e(){var t,n,i,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t="https://azurecomcdn.azureedge.net/cvt-43585516c91952e44ccd39cf22cd31714613c4ccdea4ad5d9c5c6b1696e0a606/images/icon/favicon.ico",n=a.props.image.urls,e.next=5,E.post("?visualFeatures=Categories,Description,Color&language=en",{url:n.regular});case 5:i=e.sent,r=i.data,a.setState({loading:!1}),O.a.fire({title:"Computer Vision analysis ",html:a.renderModal(r),imageUrl:t,imageWidth:40,imageHeight:40,confirmButtonText:"Cool"});case 9:case"end":return e.stop()}},e)})),a.imageRef=i.a.createRef(),a.state={spans:0,loading:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"renderModal",value:function(e){var t=e.description.captions[0]?e.description.captions[0].text:"No prediction",a=e.description.captions[0]?(100*e.description.captions[0].confidence).toFixed(5)+"%":"No prediction",n=e.color.dominantColors?e.color.dominantColors.join(", "):"No prediction",i=e.description.tags?e.description.tags.join(", "):"No prediction";return'<div>\n                <table class="ui celled table">\n                    <thead>\n                        <tr><th>Predicted Attribute</th>\n                            <th>Value</th>\n                        </tr></thead>\n                    <tbody>\n                        <tr>\n                            <td data-label="captionLbl">Caption</td>\n                            <td data-label="captionValue">'.concat(t,'</td>\n                        </tr>\n                        <tr>\n                            <td data-label="confLbl">Confidence</td>\n                            <td data-label="confValue">').concat(a,'</td>\n                        </tr>\n                        <tr>\n                            <td data-label="captionLbl">Dominant Colors</td>\n                            <td data-label="captionValue">').concat(n,'</td>\n                        </tr>\n                        <tr>\n                            <td data-label="confLbl">Tags</td>\n                            <td data-label="confValue">').concat(i,"</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>")}},{key:"loadingGif",value:function(){return this.state.loading?i.a.createElement("div",{className:"ui active inverted dimmer",style:{position:"fixed"}},i.a.createElement("div",{className:"ui text loader"},"Loading")):null}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return i.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans),cursor:"pointer"}},i.a.createElement("img",{onClick:this.onImgClick,className:"ui segment",alt:t,src:a.regular,ref:this.imageRef}),this.loadingGif())}}]),t}(i.a.Component),w=function(e){var t=e.images.map(function(e){return i.a.createElement(C,{key:e.id,image:e})});return i.a.createElement("div",{className:"image-list"},t)},N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderPhotoPlaceholder",value:function(){return i.a.createElement("div",{className:"ui column"},i.a.createElement("div",{className:"ui segment"},i.a.createElement("img",{className:"ui wireframe image",alt:"...",src:"https://semantic-ui.com/images/wireframe/image.png"})))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"ui three column grid"},this.renderPhotoPlaceholder(),this.renderPhotoPlaceholder(),this.renderPhotoPlaceholder()),i.a.createElement("div",{className:"ui three column grid"},this.renderPhotoPlaceholder(),this.renderPhotoPlaceholder(),this.renderPhotoPlaceholder()))}}]),t}(i.a.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onBannerClose=function(){a.props.onClick()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui floating message",style:{marginTop:"10px"}},i.a.createElement("i",{onClick:this.onBannerClose,className:"close icon"}),i.a.createElement("div",{className:"header"},"Welcome! search something..."),"Find pictures and select one to see what Microsoft Computer Vision can tell you about it.")}}]),t}(i.a.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={topic:"",showBanner:!0,showImgPlaceholder:!0,loading:!1,images:[]},a.onSearchSubmit=function(){var e=Object(p.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,y.get("/search/photos",{params:{query:t}});case 3:n=e.sent,a.setState({images:n.data.results,showBanner:!1,showImgPlaceholder:!1,loading:!1}),0===a.state.images.length&&g()({title:"No images found (\u0ca5_\u0ca5)",text:"Please try a different topic",icon:"warning"});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.closeBannerMessage=function(){a.setState({showBanner:!1})},a.onFormSubmit=function(e){e.preventDefault(),a.onSearchSubmit(a.state.topic)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderBanner",value:function(){return this.state.showBanner?i.a.createElement(k,{onClick:this.closeBannerMessage}):null}},{key:"renderPlaceholder",value:function(){return this.state.showImgPlaceholder?i.a.createElement(N,null):null}},{key:"loadingGif",value:function(){return this.state.loading?i.a.createElement("div",{className:"ui active inverted dimmer",style:{position:"fixed"}},i.a.createElement("div",{className:"ui text loader"},"Loading")):null}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.renderBanner(),i.a.createElement("div",{className:"ui segment",style:{marginTop:"10px"}},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Image Search"),i.a.createElement("div",{className:"ui input"},i.a.createElement("input",{type:"text",placeholder:"e.g. cats, winter, orange sky, etc...",value:this.state.topic,onChange:function(t){e.setState({topic:t.target.value})}}),i.a.createElement("button",{className:"right attached mini ui button"},i.a.createElement("i",{className:"search icon"}),"Search"))))),this.loadingGif(),this.renderPlaceholder(),i.a.createElement(w,{images:this.state.images}))}}]),t}(i.a.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={value:null},a.handleChange=function(e){a.setState({value:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(P,null))}}]),t}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.202825f6.chunk.js.map